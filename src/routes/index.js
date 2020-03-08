const express = require('express');
const serverRouter = express.Router();
const apiRouter = express.Router();

const {
    uuidsMiddleware,
    notFoundMiddleware,
    errorMiddleware
} = require('../middlewares');

/**
 * Routes Middlewares
 */
apiRouter.use(uuidsMiddleware); // Uuids Request ID Middleware


/**
 * Routes Definitios
 */
apiRouter.get('/', function(req, res, next) {
    res.json({ ok: true, error: {}, data: {} })
        // res.render('index', { title: 'Express' });
});



/** 
 * Error Routes Handler
 */
apiRouter.use(notFoundMiddleware);
apiRouter.use(errorMiddleware);

/** 
 * Server Routes
 */
serverRouter.use(apiRouter);

module.exports = serverRouter;