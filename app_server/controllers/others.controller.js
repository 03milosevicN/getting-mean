const aboutController = (req, res) => {
    res.render('about', {title: 'About us'});
}

module.exports = {
    aboutController,
};
