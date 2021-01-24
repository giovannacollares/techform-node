
module.exports = function (app) {

    app.get('/servidores', function(req,res){

        var connection = app.App.config.database();

        var query = app.App.models.conteudoModel;
        query.getConteudoServer(connection,
            function(error,results, fields){
            console.log(error,results)
            res.render('pages/servidores',{dados:results});
        });

    });
}