const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const path = require('path');
const passport = require('passport');

const { mongoose } = require('./database')

server.set('PORT', process.env.PORT || 3000);

server.use(express.json());
server.use(morgan('dev'));
server.use(cors({origin: 'http://localhost:4200'}));
server.use(express.static(path.join(__dirname, 'public')));
server.use(passport.initialize());
server.use(passport.session());

// routes

server.use('/user', require('./routes/user.routes'));
server.use('/subject', require('./routes/subject.routes'));

server.listen(server.get('PORT'), () => {
    console.log('Server on port: ', server.get('PORT'));
}); 