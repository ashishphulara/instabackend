const mongoose = require('mongoose');

const URI = `mongodb+srv://instaclone:instaclone007@cluster04.ofjscpm.mongodb.net/?retryWrites=true&w=majority`
async function connectDB() {
    await mongoose.connect(URI)
}

module.exports = connectDB;