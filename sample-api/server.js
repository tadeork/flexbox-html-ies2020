const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const application = express();

const corsOptions = {
  origin: 'http://localhost:3000'
}

const PORT = 3000 || process.env.PORT;
const subjectController = require('./controllers/subject.controller.js');

application.use(cors(corsOptions));
application.use(bodyParser.json());

application.use(bodyParser.urlencoded({ extended: true }));
const db = require('./models/index');

db.sequelizeInstanceDB.sync();

application.get('/', (req, resp) => {
  resp.json({ message: 'Welcome to my api' });
});

application.get('/api/subject', (req, resp) => {
  subjectController.findAll(req, resp);
});

application.get('/api/subject/:id', (req, resp) => {
  subjectController.findOne(req, resp);
});

application.post('/api/subject/', (req, resp) => {
  subjectController.create(req, resp);
});

application.put('/api/subject/:id', (req, resp) => {
  subjectController.update(req, resp);
});

require('./routes/subject.routes')(application);

application.listen(PORT, () => {
  console.log(`Server running over ${PORT}`);
});

