const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    text: { type: String, required: true }, // The actual to-do task
    completed: { type: Boolean, default: false }, // Status of the task (done/not done)
    createdAt: { type: Date, default: Date.now } // Timestamp for ordering/display (Optional)
});


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;