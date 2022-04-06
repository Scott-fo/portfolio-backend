const sendForm = (req, res) => {
    res.send(req.body);
};

module.exports = { sendForm };