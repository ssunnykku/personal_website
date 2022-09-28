const mongoose = require("mongoose");
const PhotoSchema = require("./schemas/photo");

exports.Photo = mongoose.model("Photo", PhotoSchema);
