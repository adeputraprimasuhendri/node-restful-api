const express = require('express');
const router = express.Router();
const Data = require('../models/School');

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
        npsn: req.body.npsn,
        name: req.body.name,
        address: req.body.address,
        province: req.body.province,
        district: req.body.district,
        subdistrict: req.body.subdistrict,
        village: req.body.village,
        tipe: req.body.tipe,
        status: req.body.status,
        MemberID: req.body.MemberID
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
                npsn: req.body.npsn,
                name: req.body.name,
                address: req.body.address,
                province: req.body.province,
                district: req.body.district,
                subdistrict: req.body.subdistrict,
                village: req.body.village,
                tipe: req.body.tipe,
                status: req.body.status
            }
        });
        res.json(dataUpdate);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;