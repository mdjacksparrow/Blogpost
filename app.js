const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();



// Set view engine and static folder to serve the static files
app.set('view engine','ejs');
app.set(express.static('public'));

// Serve some of constant to home page 
const aboutPageContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi fugiat perferendis consequatur tempore rem commodi maxime saepe eius ipsa est vel sapiente dolor nulla, animi, repudiandae qui a nisi!";

const initialHomeContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi fugiat perferendis consequatur tempore rem commodi maxime saepe eius ipsa est vel sapiente dolor nulla, animi, repudiandae qui a nisi!Quod modi fugiat perferendis consequatur tempore rem commodi maxime saepe eius ipsa est vel sapiente dolor nulla, animi, repudiandae qui a nisi!";

const contactPageContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi fugiat perferendis consequatur tempore rem commodi maxime saepe eius ipsa est vel sapiente dolor nulla, animi, repudiandae qui a nisi!Quod modi fugiat perferendis consequatur tempore rem commodi maxime saepe eius ipsa est vel sapiente dolor nulla, animi, repudiandae qui a nisi!";

// Home Route 
app.get('/',(req,res) => {
  res.render('home', {
    someStaticContent : initialHomeContent
  });
});

// About Route 
app.get('/about',(req,res) => {
  res.render('about', {
    someStaticContent : aboutPageContent
  });
});

// Contact Route 
app.get('/contact',(req,res) => {
  res.render('contact', {
    someStaticContent : contactPageContent
  });
});

// Compose Route 
app.get('/compose',(req,res) => {
  res.render('compose');
});



app.listen(4000, () => {
 console.log('Server Running on port localhost:4000');
});
