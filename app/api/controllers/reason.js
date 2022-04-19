const REASON = require('mongoose').model('Reason');

module.exports = {
    addReason: (req, res) => {
        let reason = req.body;
        REASON.create(reason).then((data) => {
            return res.status(200).json({
                message: 'REASON created successfully!',
                data: data
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    getAllReason: (req, res) => {
        REASON.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    }
};