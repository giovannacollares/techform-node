module.exports = function(){

    this.getConteudo = function (connection, callback){
        connection.query("SELECT * FROM conteudo",callback);
    }

    this.getConteudoFront = function (connection, callback){
        connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend'",callback);
    }

    this.getConteudoBack = function (connection, callback){
        connection.query("SELECT * FROM conteudo WHERE categoria = 'backend'",callback);
    }

    this.getConteudoServer = function (connection, callback){
        connection.query("SELECT * FROM conteudo WHERE categoria = 'servidores'",callback);
    }

    this.salvarConteudo = function (conteudo, connection, callback){
        connection.query('insert into conteudo set ?',conteudo);
    }

    return this;
}