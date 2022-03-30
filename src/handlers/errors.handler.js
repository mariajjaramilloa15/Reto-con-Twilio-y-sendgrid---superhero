function logErrors(err, req, res, next){
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next){
  res.status(500),json({
    menssage: err.menssage,
    stack: err.stack,
  });
}

function BoomerrorHandler(err, req, res, next){
  if(err.isBoom){
    const {output} = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { logErrors, errorHandler, BoomerrorHandler };