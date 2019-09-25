const mongoose = require('mongoose');

const SYearSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    createAt:{
        type:Date,
        default:Date.now
    },
    updateAt:{
        type:Date,
        default:Date.now
    },
    MemberID:{
        type:String,
        require:true
    },
    SchoolID:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('SYear', SYearSchema);