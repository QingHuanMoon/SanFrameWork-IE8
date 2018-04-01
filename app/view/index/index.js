var sanRouter = require('san-router');
var router = sanRouter.router;
var Link = sanRouter.Link;

var FullPage = require('../../pages/FullPage.san');

router.add({
    rule: '/',
    Component: FullPage,
    target:'#app',
});
router.start();