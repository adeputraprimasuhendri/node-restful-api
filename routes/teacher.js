const express = require('express');
const router = express.Router();
const Data = require('../models/Teacher');

//GET DATA
router.get('/', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

//CREATE DATA
router.post('/', async (req, res) => {
    const data = new Data({
        NUPTK: req.body.NUPTK,
        fullname: req.body.fullname,
        MemberID: req.body.MemberID,
        SchoolID: req.body.SchoolID,
        SubjectID: req.body.SubjectID
    });
    try {
        const saveData = await data.save();
        res.json(saveData);
    } catch (error) {
        res.json({ message: error });
    }
});

//GET DATA DETAIL
router.get('/:dataID', async (req, res) => {
    try {
        const data = await Data.findById(req.params.dataID)
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

//DELETE DATA
router.delete('/:dataID', async (req, res) => {
    try {
        const dataRemove = await Data.remove({ _id: req.params.dataID });
        res.json(dataRemove);
    } catch (error) {
        res.json({ message: error });
    }
});

//UPDATE DATA
router.patch('/:dataID', async (req, res) => {
    try {
        const dataUpdate = await Data.updateOne({ _id: req.params.dataID }, {
            $set: {
                NUPTK: req.body.NUPTK,
                fullname: req.body.fullname,
                SubjectID: req.body.SubjectID
            }
        });
        res.json(dataUpdate);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;