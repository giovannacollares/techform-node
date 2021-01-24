
module.exports = function (app) {

    app.get('/frontend', function(req,res){

        var connection = app.App.config.database();

        var query = app.App.models.conteudoModel;
        query.getConteudoFront(connection,
            function(error,results, fields){
            console.log(error,results)
            res.render('pages/frontend',{dados:results});
        });

    });
}