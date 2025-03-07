const User = require('../models/User');
const Article = require('../models/Article')
// GET Articles
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

// ADD Article
exports.addArticle = async (req, res) => {
    try {
        const { title, description, user_id } = req.body;

        // Create and save the article
        const article = new Article({ title, description, user_id });
        await article.save();

        res.status(201).json({ message: 'Article added successfully!', article });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// UPDATE PRODUCT
exports.updateArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedArticle = await Article.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedArticle);
    } catch (error) {
        res.status(500).json({ error: 'Error!' });
    }
};

// DELETE PRODUCT
exports.deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        await Article.findByIdAndDelete(id);
        res.json({ message: 'Article deleted.' });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};
