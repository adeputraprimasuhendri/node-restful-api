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
        require:true
    },
    SchoolID:{
        type:String,
        require:true
    },
    SubjectID:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('Teacher', TeacherSchema);