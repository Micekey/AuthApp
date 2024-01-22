import { Schema } from 'mongoose';

// Define the User schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;