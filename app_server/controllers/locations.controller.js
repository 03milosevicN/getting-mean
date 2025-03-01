const indexController = (req, res) => {
    res.render('index');
}

const detailsController = (req, res) => {
    res.render('details');
}

const reviewController = (req, res) => {
    res.render('review');
}


module.exports = {
    detailsController, reviewController, indexController
}