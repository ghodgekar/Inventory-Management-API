const DRIVER = require('mongoose').model('Driver');
const DRIVER_DOC = require('mongoose').model('DriverDoc');
const DRIVER_HISTORY = require('mongoose').model('DriverHistory');
const path = require('path');
module.exports = {
    addDriver: (req, res) => {
        let driver = req.body;
        DRIVER.create(driver).then((data) => {
            return res.status(200).json({
                message: 'DRIVER created successfully!',
                data: data
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    getAllDriver: (req, res) => {
        DRIVER.find({$or:[{"driver_status":req.query.driver_status},{"driver_phone":req.query.driver_phone},{"driver_id":req.query.driver_id}]},(error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    },

    getSingleDriver: (req, res) => {
        DRIVER.find({driver_id:req.query.driver_id},(error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    },

    addDriverDocs:(req,res) => {
        let dest = path.resolve('Uploads/Driver/');
        const file = req.files['image'];
        const filename = req.body.doc_id+'_'+req.body.driver_id+'.png';
        file.mv(dest + "/" + req.body.doc_id + "/" + filename, (err) => {
            if (err) {
                return res.status(500).send({ message: err, code: 200 });
            }
            let driver_doc = {'driver_id':req.body.driver_id,'driver_doc_id':req.body.doc_id,'driver_doc_file_name':filename};
            DRIVER_DOC.create(driver_doc).then((data) => {
                return res.status(200).json({
                    message: 'DRIVER Document Uploaded successfully!',
                    data: data
                });
            }).catch((err) => {
                console.log(err);
                return res.status(400).json({
                    message: 'Something went wrong, please try again.'
                });
            });
        });
    },

    getDriverDocs:(req,res) => {
        DRIVER_DOC.find({driver_id:req.query.driver_id},(error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    },

    updateDriverStatus:(req,res) => {
        DRIVER.updateOne({ driver_id: req.body.driver_id }, { $set: { driver_status: req.body.driver_status } })
        .then(() => {
            return res.status(200).json({
                message: 'Status changed successfully!'
            });
        })
        .catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    addDriverHistory:(req,res) => {
        let driverHistory = req.body;
        DRIVER_HISTORY.create(driverHistory).then((data) => {
            return res.status(200).json({
                message: 'DRIVER history created successfully!',
                data: data
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    getDriverHistory:(req,res) => {
        DRIVER_HISTORY.find({driver_id:req.query.driver_id},(error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    }
};