const routes = require('express').Router({ mergeParams: true });

const get = require('../../../controllers/usuario/get');
const create = require('../../../controllers/usuario/create');
const update = require('../../../controllers/usuario/update');
const remove = require('../../../controllers/usuario/delete');

routes.get('/:id', get);
routes.post('/', create);
routes.put('/:id', update);
routes.delete('/:id', remove);

module.exports = routes;