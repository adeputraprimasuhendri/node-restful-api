const mongoose = require('mongoose');

const SubjectSchema = mongoose.Schema({
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
        default:''
    },
    SchoolID:{
        type:String,
        default:''
    }
});

module.exports = mongoose.model('Subject', SubjectSchema);