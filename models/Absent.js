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
    },
    StudentID:{
        type:String,
        default:''
    },
    SubjectID:{
        type:String,
        default:''
    },
    TeacherID:{
        type:String,
        default:''
    }
});

module.exports = mongoose.model('Absent', AbsentSchema);