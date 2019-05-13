const db = require('../../config/database');

module.exports = async (req, res) => {
    try {
        db.update({_id: req.params.id}, req.body, {}, (err, response) => {
            if (err)
                res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
            else if (!response)
                res.status(404).json({ error: 0, payload: { id: req.params.id } });
            else
                res.status(200).json({ error: 0, payload: { id: req.params.id, set: req.body, modified: response } });
        });
    } catch (err) {
        res.status(500).json({ error: { code: '500', message: err.message }, payload: null });
    }
}