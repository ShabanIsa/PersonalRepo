"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
;
exports.UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    somethingElse: Number
});
var User = mongoose.model('User', exports.UserSchema);
exports["default"] = User;
