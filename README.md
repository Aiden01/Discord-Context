# Discord Context
[![Build Status](https://travis-ci.com/Webd01/Discord-Context.svg?branch=master)](https://travis-ci.com/Webd01/Discord-Context)

A package that helps you create your Discord bots

# Example

```js
import { Client } from 'discord.js'
import Context from 'discord-context'
const bot = new Client()

bot.on('message', (message) => {
    // message = '!ban @username#4454 flood'
    const ctx = new Context(message)

    console.log(ctx.command) // ban
    console.log(ctx.args) // ["ban", "@username#3354"]
    console.log(ctx.message) // Discord.Message object
    console.log(ctx.mentions) // message.mentions
})
```

## Using another separator and prefix

```js
import { Client } from 'discord.js'
import Context from 'discord-context'
const bot = new Client()

bot.on('message', (message) => {
    // message = '//ban.@username#4454.flood'
    const ctx = new Context(message, {
        prefix: "//",
        separator: "."
    })

    console.log(ctx.command) // ban
    console.log(ctx.args) // ["ban", "@username#3354"]
    console.log(ctx.message) // Discord.Message object
    console.log(ctx.mentions) // message.mentions
})
```

# Installation
```bash
$ npm i --save discord-context
```
