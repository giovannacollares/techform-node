
module.exports = function (app) {

    app.get('/backend', function(req,res){

        var connection = app.App.config.database();

        var query = app.App.models.conteudoModel;
        query.getConteudoBack(connection,
            function(error,results, fields){
            console.log(error,results)
            res.render('pages/backend',{dados:results});
        });
        
    });
}