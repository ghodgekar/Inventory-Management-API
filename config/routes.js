const STATUS_CONTROLLER = require('../app/api/controllers/status');
const ROLE_CONTROLLER = require('../app/api/controllers/role');
const COUNTRIES_STATES_CITIES_CONTROLLER = require('../app/api/controllers/countries_states_cities');
const DRIVER_CONTROLLER = require('../app/api/controllers/driver');
const ERROR_CONTROLLER = require('../app/api/controllers/error');
// const BOOK_CONTROLLER = require('../controllers/book');
// const COMMENT_CONTROLLER = require('../controllers/comment');
// const CART_CONTROLLER = require('../controllers/cart');
// const AUTH = require('./auth');
module.exports = (APP) => {
    APP.get('/', function(req, res){
        res.json({"tutorial" : "Build REST API with node.js"});
    });
    APP.get('/getAllStatus', STATUS_CONTROLLER.getAllStatus);
    APP.get('/getAllStatusType', STATUS_CONTROLLER.getAllStatusType);

    APP.post('/addRole', ROLE_CONTROLLER.addRole);
    APP.get('/getAllRole', ROLE_CONTROLLER.getAllRole);

    APP.get('/getAllCountriesStatesCities', COUNTRIES_STATES_CITIES_CONTROLLER.getAllCountriesStatesCities);

    APP.post('/addDriver', DRIVER_CONTROLLER.addDriver);
    APP.get('/getSingleDriver', DRIVER_CONTROLLER.getSingleDriver);
    APP.get('/getAllDriver', DRIVER_CONTROLLER.getAllDriver);
    APP.post('/addDriverDocs', DRIVER_CONTROLLER.addDriverDocs);
    APP.get('/getDriverDocs', DRIVER_CONTROLLER.getDriverDocs);
    APP.post('/updateDriverStatus', DRIVER_CONTROLLER.updateDriverStatus);
    APP.post('/addDriverHistory', DRIVER_CONTROLLER.addDriverHistory);
    APP.get('/getDriverHistory', DRIVER_CONTROLLER.getDriverHistory);

    // APP.post('/user/register', USER_CONTROLLER.register);
    // APP.post('/user/login', USER_CONTROLLER.login);
    // APP.get('/user/profile/:username', AUTH.isAuth, USER_CONTROLLER.getProfile);
    // APP.get('/user/purchaseHistory', AUTH.isAuth, USER_CONTROLLER.getPurchaseHistory);
    // APP.post('/user/changeAvatar', AUTH.isAuth, USER_CONTROLLER.changeAvatar);
    // APP.post('/user/blockComments/:userId', AUTH.isInRole('Admin'), USER_CONTROLLER.blockComments);
    // APP.post('/user/unlockComments/:userId', AUTH.isInRole('Admin'), USER_CONTROLLER.unblockComments);

    // APP.get('/cart/getSize', AUTH.isAuth, CART_CONTROLLER.getCartSize);
    // APP.get('/user/cart', AUTH.isAuth, CART_CONTROLLER.getCart);
    // APP.post('/user/cart/add/:bookId', AUTH.isAuth, CART_CONTROLLER.addToCart);
    // APP.delete('/user/cart/delete/:bookId', AUTH.isAuth, CART_CONTROLLER.removeFromCart);
    // APP.post('/user/cart/checkout', AUTH.isAuth, CART_CONTROLLER.checkout);

    // APP.get('/book/search', BOOK_CONTROLLER.search);
    // APP.get('/book/details/:bookId', BOOK_CONTROLLER.getSingle);
    // APP.post('/book/add', AUTH.isInRole('Admin'), BOOK_CONTROLLER.add);
    // APP.put('/book/edit/:bookId', AUTH.isInRole('Admin'), BOOK_CONTROLLER.edit);
    // APP.delete('/book/delete/:bookId', AUTH.isInRole('Admin'), BOOK_CONTROLLER.delete);
    // APP.post('/book/rate/:bookId', AUTH.isAuth, BOOK_CONTROLLER.rate);
    // APP.post('/book/addToFavorites/:bookId', AUTH.isAuth, BOOK_CONTROLLER.addToFavorites);

    // APP.get('/comment/getLatestFiveByUser/:userId', AUTH.isAuth, COMMENT_CONTROLLER.getLatestFiveByUser);
    // APP.get('/comment/:bookId/:skipCount', COMMENT_CONTROLLER.getComments);
    // APP.post('/comment/add/:bookId', AUTH.isAuth, COMMENT_CONTROLLER.add);
    // APP.put('/comment/edit/:commentId', AUTH.isAuth, COMMENT_CONTROLLER.edit);
    // APP.delete('/comment/delete/:commentId', AUTH.isAuth, COMMENT_CONTROLLER.delete);

    APP.all('*', ERROR_CONTROLLER.error);
};