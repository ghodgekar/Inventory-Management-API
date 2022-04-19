const ROLE = require('mongoose').model('Role');

module.exports = {
    addRole: (req, res) => {
        let role = req.body;
        ROLE.create(role).then((data) => {
            return res.status(200).json({
                message: 'ROLE created successfully!',
                data: data
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    getAllRole: (req, res) => {
        ROLE.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    }
};