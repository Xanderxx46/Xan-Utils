import { createHandle, Client } from "@buape/carbon";
import { createHandler } from "@buape/carbon/adapters/cloudflare";

import HelpCommand from "./commands/help";
import PingCommand from "./commands/ping";
import RemindCommand from "./commands/remind";

const handle = createHandle((env) => {
	const client = new Client(
		{
			baseUrl: String(env.BASE_URL),
			deploySecret: "XanderHi08",
			clientId: String(env.DISCORD_CLIENT_ID),
			clientSecret: String(env.DISCORD_CLIENT_SECRET),
			publicKey: String(env.DISCORD_PUBLIC_KEY),
			token: String(env.DISCORD_TOKEN),
		},
		[new HelpCommand(), new PingCommand(), new RemindCommand()],
	);
	return [client];
});

const handler = createHandler(handle);
export default { fetch: handler };
