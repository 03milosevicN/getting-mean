const aboutController = (req, res) => {
    res.render('about');
}

const indexController = (req, res) => {
    res.render('index');
}

module.exports = {
    aboutController,
    indexController,
};

