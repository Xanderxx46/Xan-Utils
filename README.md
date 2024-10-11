# Why This Exists?
I made this bot to get more experience using [Carbon!](https://carbon.buape.com/carbon) It has some things i say often just as slash commands. Feel free to add it [here.](https://discord.com/oauth2/authorize?client_id=1292669547886940202) Idk why you would but just in case you want to.

## Adding to Main Bot:
If you want to add your own customized messages to the main bot:

1. Go to the [ask-vc.ts](/src/commands/ask-vc.ts) file

2. Go to [line 23](/src/commands/ask-vc.ts?plain#L23) and add the following:
```ts
const YOUR_DISCORD_NAME = "YOUR_DISCORD_ID"
```

3. From here you have 2 different options:

### Option 1: Static Messages

1. Go to line 69 of the [ask-vc.ts](/src/commands/ask-vc.ts?plain#L86) file and add an `else if` statement.

2. It should look something like this:
```ts
else if (userId === YOUR_DISCORD_NAME) { await interaction.reply({ content: "YOUR_MESSAGE_HERE"}); }
```

### Option 2: Random Messages

1. Copy src/random-messages/example folder (replace example with your name)

2. Replace the example messages with anything you want, it should look like this.
```ts
module.exports = [ 
"Hello, want to vc?",
"Hey can you vc?",
"Hey bro, can you vc?",
]
```
3. After adding your file, go down to line 12 of the [ask-vc.ts](/src/commands/ask-vc.ts?plain#L12) file and add the following (replace example with your name):
```ts
import exampleRandom from "../random-messages/example/example"
```

4. Then you can go to line 46 of the [ask-vc.ts](/src/commands/ask-vc.ts?plain#L46) file and add the following (replace example with your name):
```ts
const askExampleMessage = getRandom(exampleRandom);
```
5. Go to line 69 of the [ask-vc.ts](/src/commands/ask-vc.ts?plain#L69) file and add the following (replace example with your name):
```ts
else if (userId === YOUR_DISCORD_NAME) { await interaction.reply({ content: askExampleMessage}); }
```

## Hosting Your Own (Using Cloudflare workers):
To host your own version of the bot:
1. First you must clone the bots repo, do so by running these commands:
```bash
git clone https://github.com/Xanderxx46/Xan-Utils
cd Xan-Utils
```
2. Then, you need to install the dependencies:
```bash
npm install
```
3. Then, add all the varibles:
```bash
npx wrangler secret put CLIENT_ID
npx wrangler secret put PUBLIC_KEY
npx wrangler secret put DISCORD_TOKEN
```
4. Then you can run the bot using:
```bash
npm run build
```
5. Once given the bots worker url, go to `https://xan-utils.{YOUR_CLOUDFLARE_NAME}.workers.dev/deploy` to deploy the commands.

6. Dont forget to go to the [Discord Dev Portal](https://discord.com/developers/applications) and add `https://xan-utils.{YOUR_CLOUDFLARE_NAME}.workers.dev/interaction` as your interaction URL.

## Hosting the bot any other way:
To host the bot any other way, please use the [Carbon Docs](https://carbon.buape.com/carbon) to convert the [index.ts](/src/index.ts) file to use any thing else.

### Adding more commands:
You can use [the Carbon Docs](https://carbon.buape.com/carbon) to make more commands.