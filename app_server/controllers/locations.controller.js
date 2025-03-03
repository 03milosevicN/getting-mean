const indexController = (req, res) => {
    res.render('index', {title: 'Home'});
}

const detailsController = (req, res) => {
    res.render('details', {title: 'Details'});
}

const reviewController = (req, res) => {
    res.render('review', {title: 'Review'});
}


module.exports = {
    detailsController, reviewController, indexController
}