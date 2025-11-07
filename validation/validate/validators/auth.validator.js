const Schema = require("validate");

const registerSchema = new Schema({
  username: {
    type: String,
    required: true,
    length: { min: 3, max: 20 },
    message: {
      type: "username must be string (custom message)",
      required: "username is required (custom message)",
      length: "username must be between 3 and 20 characters (custom message)",
    },
  },
  email: {
    type: String,
    required: true,
    length: { min: 5, max: 50 },
    match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,

    message: {
      type: "email must be string (custom message)",
      required: "email is required (custom message)",
      length: "username must be between 5 and 50 characters (custom message)",
      match: "email format is invalid (custom message)",
    },
  },
  role: {
    type: String,
    enum: ["user", "admin", "teacher"],
  },
});

module.exports = { registerSchema };
