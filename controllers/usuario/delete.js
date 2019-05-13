const db = require('../../config/database');

module.exports = async (req, res) => {
    try {
        db.remove({_id: req.params.id}, {}, (err, response) => {
            if (err)
                res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
            else if (!response)
                res.status(404).json({ error: 0, payload: { id: req.params.id } });
            else
                res.status(200).json({ error: 0, payload: { id: req.params.id, removed: response } });
        });
    } catch (err) {
        res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
    }
}