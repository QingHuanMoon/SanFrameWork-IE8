var sanRouter = require('san-router');
var router = sanRouter.router;
var Link = sanRouter.Link;

var pageOne = require('../../pages/pageOne.san');

router.add({
    rule: '/',
    Component: pageOne,
    target:'#app',
});
router.start();