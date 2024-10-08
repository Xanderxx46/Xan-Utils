import { Client, ClientMode } from "@buape/carbon";

import type { ExecutionContext } from "@cloudflare/workers-types/2023-07-01";

import PingCommand from "./commands/ping";
import HelpCommand from "./commands/help";
import VcCommand from "./commands/ask-vc";
import RemindCommand from "./commands/remind";

type Env = {
	CLIENT_ID: string;
	PUBLIC_KEY: string;
	DISCORD_TOKEN: string;
};

export default {
	async fetch(request: Request, _env: Env, ctx: ExecutionContext) {
		const client = new Client(
			{
				clientId: _env.CLIENT_ID,
				publicKey: _env.PUBLIC_KEY,
				token: _env.DISCORD_TOKEN,
				mode: ClientMode.CloudflareWorkers,
			},
			[
				new HelpCommand(),
				new PingCommand(),
				new VcCommand(),
				new RemindCommand(),
			],
		);

		if (request.url.endsWith("/deploy")) {
			await client.deployCommands();
			return new Response("Deployed commands");
		}
		const response = await client.router.fetch(request, ctx);
		return response;
	},
};
