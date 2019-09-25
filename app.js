const express = require('express');
const app = express();
const mongoose = require('mongoose');
const BodyParser = require('body-parser');
const cors = require('cors');

//IMPORT ROUTES
const postsRoute = require('./routes/posts');
const SchoolRoute = require('./routes/school');
const SYearRoute = require('./routes/syear');
const SClassRoute  = require('./routes/sclass');
const StudentRoute  = require('./routes/student');
const AbsentRoute  = require('./routes/absent');
const SubjectRoute  = require('./routes/subject');
const TeacherRoute  = require('./routes/teacher');
require('dotenv').config();

//MIDDLEWARE
app.use(cors());
app.use(BodyParser.json());
app.use('/posts', postsRoute);
app.use('/school', SchoolRoute);
app.use('/syear', SYearRoute);
app.use('/sclass', SClassRoute);
app.use('/student', StudentRoute);
app.use('/absent', AbsentRoute);
app.use('/subject', SubjectRoute);
app.use('/teacher', TeacherRoute);

//ROUTE
app.get('/', (req, res) => {
    res.send('Server running...');
});

//CONNECT TO MONGGODB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Database Connected');
});

app.listen(1234, "127.0.0.1");