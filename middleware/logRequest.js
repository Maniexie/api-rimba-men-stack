const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.File({ filename: "logs/requests.log" })],
});

const logRequest = (req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString(),
  });
  next();
};

module.exports = logRequest;
