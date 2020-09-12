exports.errorHandler = (resp, message, status = 500) => {
  resp.status(status).send({
    message: message
  });
}