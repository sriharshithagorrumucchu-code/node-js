function errorHandler(err, req, res, next) {
    console.error('error:',err.message);
    res.status(err.status || 500).json({
        error:err.message || 'internal server error'
    });
}
module.exports = errorHandler;function
