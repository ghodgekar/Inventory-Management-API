const STATUS = require('mongoose').model('Status');
const STATUSTYPE = require('mongoose').model('Status_type');

module.exports = {
    addStatusType: (req, res) => {
        let status = req.body;
        STATUS.create(status).then((data) => {
            return res.status(200).json({
                message: 'STATUS created successfully!',
                data: data
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    getAllStatus: (req, res) => {
        STATUS.find({status_type_id:req.query.status_type_id},(error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    },
    
    getAllStatusType: (req, res) => {
        STATUSTYPE.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    }
};