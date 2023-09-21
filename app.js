const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

// Middleware setup (body parser, CORS, etc.)

app.use('/api/auth', authRoutes);

module.exports = app;
