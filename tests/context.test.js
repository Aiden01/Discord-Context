import test from 'ava'
import DiscordContext from '../src/index';
import { createMessage } from './helpers';

test("Gets the correct arguments", (t) => {
    const message = createMessage('!ping arg')
    const expectedArgs = message.content.slice(1).split(' ')
    const ctx = new DiscordContext(message)
    t.deepEqual(ctx.args, expectedArgs)
})

test("Gets the correct arguments with other separator and prefix", (t) => {
    const message = createMessage('//ping.arg')
    const expectedArgs = message.content.slice(2).split('.')
    const ctx = new DiscordContext(message, {
        prefix: "//",
        separator: "."
    })
    t.deepEqual(ctx.args, expectedArgs)
})

test("Gets the correct command", (t) => {
    const message = createMessage("!ping hello world")
    const ctx = new DiscordContext(message)
    t.is(ctx.command, "ping")
})

test("Gets the correct command with other separator and prefix", (t) => {
    const message = createMessage('//ban.arg')
    const ctx = new DiscordContext(message, {
        prefix: "//",
        separator: "."
    })
    t.is(ctx.command, "ban")
})