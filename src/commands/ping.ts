import { Command, type CommandInteraction } from "@buape/carbon";

export default class PingCommand extends Command {
	name = "ping";
	description = "A simple ping command (replies with pong)";
	defer = false;

	async run(interaction: CommandInteraction) {
		return interaction.reply({
			content: "Pong!",
		});
	}
}
