import { Command, type CommandInteraction, Embed } from "@buape/carbon";

const helpTitles = [
	"Here are the commands you can do:",
	"You need help? Damn lol:",
	"Help? Yeah sure:",
	"Lol loser needs help:",
	"Ugh i have to do things:",
	"Heres your help ig:",
	"Why are you asking me:",
];

const getRandom = (array: string[]) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};

class HelpEmbed extends Embed {
	constructor(title: string) {
		super({});
		this.description = "The Help Embed!";
		this.title = title;
		this.color = 0xff0000;
		this.fields = [
			{
				name: "Useful Commands:",
				value:
					'</help:1292673305840713739> - Show this menu \n </ping:1292673305840713740> - Bot replies with "Pong"',
				inline: true,
			},
			{
				name: "Fun Commands:",
				value: "</ask-vc:1292673305840713741> - Ask someone to vc with you!",
				inline: true,
			},
		];
	}
}

export default class HelpCommand extends Command {
	name = "help";
	description = "Show the help menu";
	defer = true;

	async run(interaction: CommandInteraction) {
		const helpTitle = getRandom(helpTitles);
		const helpEmbed = new HelpEmbed(helpTitle);

		await interaction.reply({ embeds: [helpEmbed] });
	}
}
