const mongoose = require('mongoose');

const TeacherSchema = mongoose.Schema({
    NUPTK:{
        type:String,
        require:true
    },
    fullname:{
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
    SchoolID:{
        type:String,
        default:''
    },
    SubjectID:{
        type:String,
        default:''
    }
});

module.exports = mongoose.model('Teacher', TeacherSchema);