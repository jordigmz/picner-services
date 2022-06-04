import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Introduce un email válido.'],
    minlength: 3
  },
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    match: [/^[a-zA-Z0-9._-]+$/, 'Introduce en nombre de usuario sin caracteres especiales.'],
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
  guardados: {
    type: [String],
    required: true
  },
  me: {
    type: Boolean
  },
});
