var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/newdata');

var BlogSchema = mongoose.Schema({
    blogContent : String,
    heading : String,
    createdBy: String,
    createdDate : Date,
    isApproved : Boolean

});

// create model if not exists.
module.exports = mongoose.model('blogs',BlogSchema);