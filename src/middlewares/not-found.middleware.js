/**
 * Not Found Content
 */
module.exports = (req, res, next) => {
    const error = new Error();
    error.message = 'NotFoundError';
    error.stack = 'Resource not found!';
    error.status = 404;
    next(error);
}