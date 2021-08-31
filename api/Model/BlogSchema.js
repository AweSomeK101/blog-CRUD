const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Structuring a scheme
const BlogSchema = new Schema({
    name: String,
    title: {type: String, required: true},
    subHeading: String,
    content: String,
    verified: Boolean,
}, {timestamps: true});

const Blog = mongoose.model("Blogs", BlogSchema);

module.exports = Blog;