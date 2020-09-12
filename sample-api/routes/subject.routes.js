module.exports = app => {
  console.log('subject routes ========> ', app);
  const subjectController = require('../controllers/subject.controller.js');
  let router = require('express').Router();
  const URL_SUBJECT = '/subject'

  router.get(URL_SUBJECT, subjectController.findAll);
  router.post(URL_SUBJECT, subjectController.create);
  router.get(URL_SUBJECT + ':id', subjectController.findOne);
  router.put(URL_SUBJECT + ':id', subjectController.update)

  app.use(URL_SUBJECT, router);
}
