var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var RateSchema = new mongoose.Schema({
    rates = []

});

module.exports = mongoose.model('Rate', RateSchema); 
