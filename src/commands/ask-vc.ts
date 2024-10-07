import {
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
} from "@buape/carbon";

const getRandom = (array: string[]) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};

let targetId = "";
let userId = "";

const askStringsDifferentResponses = [
	"Hey dumbass wanna vc?",
	"Heyyyyy you should vc with me",
	"Hey bitch im bored, vc?",
	"Im gonna shoot you if you dont vc",
	"Vc with me or death",
	"Vc?",
	"im lonely, vc?",
	"im bored, vc?",
];

const askWifeyDifferentResponses = [
	"Hey baby i wanna vc",
	"Vc?",
	"Call? (on snap)",
	"Im boreddddddddddddddd call with me",
	"Meow i wanna call",
	"Give me attention bitch",
	"I love you now call",
];

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

		const askStringsMessage = getRandom(askStringsDifferentResponses);
		const askWifeyMessage = getRandom(askWifeyDifferentResponses);

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
