const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    province:{
        type:String,
        require:true
    },
    district:{
        type:String,
        require:true
    },
    subdistrict:{
        type:String,
        require:true
    },
    village:{
        type:String,
        require:true
    },
    tipe:{
        type:String,
        require:true
    },
    status:{
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
    }
});

module.exports = mongoose.model('School', SchoolSchema);