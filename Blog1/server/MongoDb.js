
const mongoose =require("mongoose")

const connection =mongoose.connect('mongodb+srv://ppalniraj:0384@cluster0.emmpx.mongodb.net/?retryWrites=true&w=majority')

module.exports = connection;