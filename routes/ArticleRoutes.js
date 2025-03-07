const express = require('express');
const { getAllArticles, addArticle, updateArticle, deleteArticle } = require('../controllers/articleController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/Articles', authenticateToken, getAllArticles);
router.post('/create-Article', authenticateToken, addArticle);
router.put('/update-Article/:id', authenticateToken, updateArticle);
router.delete('/delete-Article/:id', authenticateToken, deleteArticle);


module.exports = router;
