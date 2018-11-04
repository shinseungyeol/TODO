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
            res.redirect('/');
        });
    });
    app.post('/delete',function(req,res){
             connection.query('DELETE FROM todo WHERE name = ? AND description = ? AND priority = ? AND deadline = ?',[req.body.name,req.body.description,req.body.priority,req.body.deadline],function(err,results,fields){
                if(err){
                    console.log(err);
                }
                res.redirect('/');
            });
    });
    app.get('/update',function(req,res){
            res.render('update');
            
    });
    app.post('/update',function(req,res){
             var sql = 'UPDATE todo SET name=?,description=?,deadline=?,priority=? WHERE name=? AND description=? AND deadline=? AND priority=?';
             var input = [req.body.updateName,req.body.updateDescription,req.body.updateDeadline,req.body.updatePriority,req.body.name,req.body.description,req.body.deadline,req.body.priority];
            connection.query(sql,input,function(err,rows,fields){
               if(err){
                  console.log(err);
                }
                res.redirect('/');
                
                
            });
             
    });
}
