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
        default:''
    },
    SClassID:{
        type:String,
        default:''
    },
    SYearID:{
        type:String,
        default:''
    },
    SchoolID:{
        type:String,
        default:''
    }
});

module.exports = mongoose.model('Student', StudentSchema);