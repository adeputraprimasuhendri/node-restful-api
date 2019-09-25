const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    NIS:{
        type:String,
        require:true
    },
    fullname:{
        type:String,
        require:true
    },
    gender:{
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
    SClassID:{
        type:String,
        require:true
    },
    SYearID:{
        type:String,
        require:true
    },
    SchoolID:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('Student', StudentSchema);