var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Cherry Lake", image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5399285.jpg"},
    {name: "Hell Hole", image: "http://anglingatlas.co.uk/wp-content/uploads/2009/10/hellholererv.jpg"},
    {name: "Folsom Lake", image: "http://media2.s-nbcnews.com/j/newscms/2014_09/211661/140226-folsom-lake-drought-before-720a_8292fdca661bb075a627a42c1e22fd69.nbcnews-ux-2880-1000.jpg"},
    {name: "Cherry Lake", image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5399285.jpg"},
    {name: "Hell Hole", image: "http://anglingatlas.co.uk/wp-content/uploads/2009/10/hellholererv.jpg"},
    {name: "Folsom Lake", image: "http://media2.s-nbcnews.com/j/newscms/2014_09/211661/140226-folsom-lake-drought-before-720a_8292fdca661bb075a627a42c1e22fd69.nbcnews-ux-2880-1000.jpg"},
    {name: "Cherry Lake", image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5399285.jpg"},
    {name: "Hell Hole", image: "http://anglingatlas.co.uk/wp-content/uploads/2009/10/hellholererv.jpg"},
    {name: "Folsom Lake", image: "http://media2.s-nbcnews.com/j/newscms/2014_09/211661/140226-folsom-lake-drought-before-720a_8292fdca661bb075a627a42c1e22fd69.nbcnews-ux-2880-1000.jpg"},
    {name: "Cherry Lake", image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5399285.jpg"},
    {name: "Hell Hole", image: "http://anglingatlas.co.uk/wp-content/uploads/2009/10/hellholererv.jpg"},
    {name: "Folsom Lake", image: "http://media2.s-nbcnews.com/j/newscms/2014_09/211661/140226-folsom-lake-drought-before-720a_8292fdca661bb075a627a42c1e22fd69.nbcnews-ux-2880-1000.jpg"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds"); 
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("YELP CAMP SERVER STARTED");
});