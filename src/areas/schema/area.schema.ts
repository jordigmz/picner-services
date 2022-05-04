import * as mongoose from 'mongoose';

export const AreaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    minlength: 3
  },
  image: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    minlength: 3
  },
  visibility: {
    type: Number,
    required: true
  },
  creator: {
    type: Number
  },
  distance: {
    type: String
  },
  mine: {
    type: Boolean
  },
});
