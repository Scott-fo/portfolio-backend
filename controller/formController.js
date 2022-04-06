const transporter = require("../model/transporter");
const config = require("../model/mailOptions");

const sendForm = (req, res) => {
    try {
        transporter.sendMail(config(req.body), (err, info) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: err
                })
            } else {
                res.send({
                    success: true,
                    message: "Thank you for contacting me. I will respond as soon as possible"
                });
            }
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err
        })
    }
};

module.exports = { sendForm };