const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'username field is required']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email field is required']
  },
  password: {
    type: String,
    required: [true, 'password field is required']
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;

