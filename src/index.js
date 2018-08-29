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

    /**
     * @description Gets the Message object
     * @readonly
     * @returns {Discord.Message}
     */
    get message() {
        return this._message
    }

    /**
     * @description Gets the arguments of the message
     * @readonly
     * @returns {Array<String>}
     */
    get args() {
        if(typeof this._args !== 'undefined') return this._args
        const { content } = this.message
        const stack = content.slice(this.options.prefix.length).split(this._options.separator)
        return stack.splice(0, stack.length)
    }

    /**
     * @description Gets the option object
     * @readonly
     * @returns {Object}
     */
    get options() {
        return this._options
    }

    /**
     * @description Gets the mentions of the message
     * @readonly
     * @returns {Array<Discord.User>}
     */
    get mentions() {
        if(typeof this._mentions !== 'undefined') return this._mentions
        return this.message.mentions
    }

    /**
     * @description Gets the command of the message
     * @readonly
     * @returns {String}
     */
    get command() {
        if(typeof this._command !== 'undefined') return this._command
        return this.args[0]
    }

}