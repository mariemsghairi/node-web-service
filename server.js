const express = require('express'); 
const hbs = require('hbs');
var app = express() ; 
const fs = require ('fs');
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log' , log + '/n', (err)=>{
        if (err){
            console.log('unable to append to server .log .');
        }
    });
    next();
});
app.use((req,res,next)=>{
    res.render('maintenance.hbs');
    next();
}); 

hbs.registerHelper('getDate' , ()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('majus' , (text)=>{
return text.toUpperCase() ; 
});
app.get('/' , (req , res)=>{
res.send("hello ");
}); 
app.get('/about',(req , res)=>{
    res.render("about.hbs" , {
        pageTitre :" about page" ,
        

    });
});
app.get('/bad',(req , res )=>{
    res.send({
        name: 'mariem' ,
        likes: [
            'sport',
            'musique'
        ]
    });
});
app.get('/home', (req , res)=>{
    res.render("home.hbs" , {
        pageTitre  : "home page " , 
        
        Message : "hello to my webService" 
      
    });
});
app.listen(3000, ()=>{
    console.log("server is up on port 3000");
}); 