const express = require('express');
const bodyParser = require('body-parser');

module.exports = async () => {
  const app = new express();

  app.use(
    bodyParser.urlencoded({
      uploadDir: '/tmp/uploads',
      extended: false
    })
  );

  app.use(
    bodyParser.json({
      limit: '10mb'
    })
  );

  app.use(
    bodyParser.urlencoded({
      limit: '10mb',
      extended: true
    })
  );

  return app;
};
