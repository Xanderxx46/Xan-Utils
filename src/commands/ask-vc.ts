import {
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
} from "@buape/carbon";

import stringsRandom from "../random-messages/xander/strings"; // Produces a VS code error only
import wifeyRandom from "../random-messages/xander/wifey"; // Produces a VS code error only

// import exampleRandom from "../random-messages/example/example"; | the example

const getRandom = (array: string[]) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};

let targetId = "";
let userId = "";

const xander = "829909201262084096";
const strings = "343915513380077569";
const wifey = "1070876750445293628";

export default class VcCommand extends Command {
	name = "ask-vc";
	description = "Ask someone to VC";
	defer = true;

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "user",
			type: ApplicationCommandOptionType.User,
			description: "Who would you like to ask to vc?",
			required: true,
		},
	];

	async run(interaction: CommandInteraction) {
		if (!interaction.userId) return interaction.reply("You aren't a user");

		userId = interaction.userId?.toString();
		const target = interaction.options.getUser("user", true);
		targetId = target.id;

		const askStringsMessage = getRandom(stringsRandom);
		const askWifeyMessage = getRandom(wifeyRandom);

		// For Xander
		if (userId === xander) {
			if (targetId === strings) {
				//  Strings
				await interaction.reply({
					content: askStringsMessage,
				});
			}
			// Wifey
			else if (targetId === wifey) {
				await interaction.reply({
					content: askWifeyMessage,
				});
			}
			// Anyone else
			else {
				await interaction.reply({
					content: `Hey <@${targetId}>, are you able to vc? <:smile:1292670211954180117>`,
				});
			}
		}

		// For anyone else
		else {
			await interaction.reply({
				content: `Hey <@${targetId}>, are you able to vc?`,
			});
		}
	}
}
