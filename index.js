require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const articleRoutes = require('./routes/ArticleRoutes');

const app = express();
require('./db');

// MiDDLEWARE TO ANALYZE JSON
app.use(express.json());

// Routes
app.use('/api', articleRoutes);
app.use('/api', authRoutes);


app.listen(3000,()=>{
  console.log('server connected')
});

