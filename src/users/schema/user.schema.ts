import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    minlength: 3
  },
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  password: {
    type: String,
    minlength: 4
  },
  avatar: {
    type: String
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  me: {
    type: Boolean
  },
});
