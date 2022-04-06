const dotenv = require("dotenv").config();


const mailOptions = (req) => {
    const mailConfig =  {
        "from": process.env.USER_EMAIL,
        "to": process.env.USER_EMAIL,
        "subject": req.subject,
        "html":
        `
            <p>You have a new message</p>
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.name}</li>
                <li>Email: ${req.email}</li>
                <li>Message: ${req.message}</li>
            </ul>
        `
    };

    return mailConfig;
}

module.exports = mailOptions;