module.exports = {
    config: require("./utils/config.js"),
    auth: require("./utils/auth.js"),
    status_server: require("./utils/status_server/lib/index"),
    crypt: require("./utils/crypto.js")
}