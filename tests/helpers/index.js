const { Message, Client, Guild, TextChannel } = require("discord.js")

function createMessage(content) {
    const client = fakeClient()
    const guild = fakeGuild(client)
    const channel = fakeChannel(guild)
    const message = new Message(channel, {
        content,
        id: 'dummyId',
        attachments: [],
        embeds: [],
        author: {
            id: 'authorID'
        }
    }, client)
    return message
}

function fakeClient() {
    return new Client()
}

function fakeGuild(client) {
    return new Guild(client, { emojis: [], id: '122344' })
}

function fakeChannel(guild) {
    return new TextChannel(guild, {id: '31234'})
}

module.exports = {
    fakeChannel,
    createMessage,
    fakeGuild,
    fakeClient
}