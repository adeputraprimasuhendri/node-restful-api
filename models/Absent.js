const mongoose = require('mongoose');

const AbsentSchema = mongoose.Schema({
    absentDate:{
        type:Date,
        require:true
    },
    status:{
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
    },
    StudentID:{
        type:String,
        require:true
    },
    SubjectID:{
        type:String,
        require:true
    },
    TeacherID:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('Absent', AbsentSchema);