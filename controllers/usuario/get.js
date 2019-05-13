const db = require('../../config/database');

module.exports = async (req, res) => {
    try {
        let _id = req.params.id;

        db.find({ _id }, (err, response) => {
            if (err)
                res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
            else if (response.length)
                res.status(200).json({ error: 0, payload: { comments: response } });
            else
                res.status(404).json({ error: 0 });
        });
    } catch (err) {
        res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
    }
};