import {
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
} from "@buape/carbon";

export default class MathCommand extends Command {
	name = "math";
	description = "Do some math";
	defer = true;

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "equation",
			type: ApplicationCommandOptionType.String,
			description: "What is the equation",
			required: true,
		},
	];

	async run(interaction: CommandInteraction) {
		const target = interaction.options.getString("equation", true);

		await interaction.reply({
			content: `Hey <@${targetId}>, are you able to vc?`,
		});
	}
}
