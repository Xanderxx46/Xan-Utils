import {
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
} from "@buape/carbon";

let targetId = "";
let userId = "";

const xander = "829909201262084096";
const strings = "343915513380077569";
const wifey = "1070876750445293628";

export default class RemindCommand extends Command {
	name = "remind";
	description = "Remind someone of something!";
	defer = true;

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "user",
			type: ApplicationCommandOptionType.User,
			description: "Who would you like to ask to remind?",
			required: true,
		},
		{
			name: "about",
			type: ApplicationCommandOptionType.String,
			description: "What are you reminding them about?",
			required: true,
		},
	];

	async run(interaction: CommandInteraction) {
		if (!interaction.userId) return interaction.reply("You aren't a user");

		userId = interaction.userId?.toString();
		const target = interaction.options.getUser("user", true);
		targetId = target.id;

		const about = interaction.options.getString("about", true);

		// For Xander
		if (userId === xander) {
			if (targetId === strings) {
				//  Strings
				await interaction.reply({
					content: `Hey Stringssssssss, dont forget: \n\n${about}`,
				});
			} else if (targetId === wifey) {
				// Wifey
				await interaction.reply({
					content: `Hey princess, dont forget: \n\n${about}`,
				});
			} else {
				// others
				await interaction.reply({
					content: `Hey bro, dont forget: \n\n${about}\n\n<@${targetId}>`,
				});
			}
		}
		// For anyone else
		else {
			await interaction.reply({
				content: `Hey man, don't forget: \n\n${about}\n\n<@${targetId}>`,
			});
		}
	}
}
