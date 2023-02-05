const db = require("../models");
const Login = db.login;

exports.login = (req, res) => {
    let reqestData = req.body;
    Login.find({user_name:reqestData.user_name, user_pass:reqestData.user_pass})
    .exec((err, response) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if(response.length == 0){
        res.status(200).send({ message: 'Invalid Credentials' });
        return;
      }
      res.status(200).send({ data:response, message: "" });
    });
};