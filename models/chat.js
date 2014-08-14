var mongoose = require('mongoose');
var chatSchema = mongoose.Schema({
    username: String,
    message: String
});

Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;