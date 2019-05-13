const db = require('../../config/database');

module.exports = async (req, res) => {
    try {
        db.insert(req.body, (err, response) => {
            if (err) res.status(500).json({ error: { message: err.message }, payload: null });
            else if (response.length) res.status(201).json({ error: 0, payload: { comments: response } });
            else res.location(`${req.originalUrl}`).status(303).json();
        });
    } catch (err) {
        res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
    }
}