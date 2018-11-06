const express = require('express'); 
const hbs = require('hbs');
var app = express() ; 
app.use(express.static(__dirname+'/public'))
hbs.registerPartials(__dirname+'/views/partials');
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