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
    const expectedArgs = message.content.slice(1).split('.')
    const ctx = new DiscordContext(message, {
        prefix: "//",
        separator: "."
    })
    t.deepEqual(ctx.args, expectedArgs)
})