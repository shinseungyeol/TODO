module.exports = function(app,fs,connection){
    app.get('/',function(req,res){
       connection.query('SELECT * FROM todo ORDER BY deadline', function(err,rows,fields){
          if(err){
             console.log(err);
             res.send("error");
          }
          res.render('main',{data:rows});
        });
    });
    app.post('/registTODO',function(req,res){
        connection.query('INSERT INTO todo (name,description,deadline,priority) VALUES(?,?,?,?)',[req.body.name,req.body.description,req.body.deadline,req.body.priority] , function(err,rows){
            if(err){
               console.log(err);

            }
            res.redirect(req.get('referer'));
        });
    });
    app.post('/delete',function(req,res){
             console.log(req.body);
             connection.query('DELETE FROM todo WHERE name = ? AND description = ? AND priority = ? AND deadline = ?',[req.body.name,req.body.description,req.body.priority,req.body.deadline],function(err,results,fields){
                if(err){
                    console.log(err);
                }
                res.redirect(req.get('referer'));
            });
    });
}
