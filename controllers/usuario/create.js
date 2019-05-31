const db = require('../../config/database');

module.exports = async (req, res) => {
    try {
        db.insert(req.body, (err, response) => {
            if (err.errorType === 'uniqueViolated') res.location(`${req.originalUrl}/${req.body._id}`).status(303).json();
            else if (response.length) res.status(201).json({ error: 0, payload: { comments: response } });
            else res.status(500).json({ error: { message: err.message }, payload: null });
        });
    } catch (err) {
        res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
    }
}