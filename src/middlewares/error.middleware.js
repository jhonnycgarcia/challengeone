/**
 * Final Middleware to handler Error
 */
module.exports = (err, req, res, next) => {
    const httpStatus = err.status || 500;
    return res.status(httpStatus).send({
        ok: false,
        error: {
            message: err.message || 'InternalServerError',
            stack: err.stack || 'Internal server error',
            status: httpStatus,
        }
    });
}