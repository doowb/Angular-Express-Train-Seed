module.exports = function (app) {
    return {
        index:[
            function (req, res, next) {
                //we just want to return an html file.  Angular will take care of the templating.
                res.sendfile(__dirname + '/../public/index.html');
            }]
    };
};
