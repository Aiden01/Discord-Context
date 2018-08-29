module.exports = class DiscordContext {

    /**
     * Creates an instance of DiscordContext.
     * @param {Discord.Message} message
     * @param {Object} [options=undefined]
     * @param {String} options.prefix
     * @param {String} options.separator
     */
    constructor(message, options = { prefix: "!", separator: " " }) {
        this._message = message
        this._options = options
        this._args = undefined
        this._mentions = undefined
        this._command = undefined
    }

    get message() {
        return this._message
    }

    get args() {
        if(typeof this._args !== 'undefined') return this._args
    }

}