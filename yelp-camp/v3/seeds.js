var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
    {
        name: "Clouds Rest", 
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg",
        description: "nice place with good food"
    },
    {
        name: "Soft Lake", 
        image: "http://images.dailyhive.com/20160630114533/Sasamat-Lake-PeteFlickr.jpg",
        description: "nice place with good swimming"
    },
    {
        name: "Bass Lake", 
        image: "http://mthikes.com/wp-content/uploads/2015/07/Silver-Lake.jpg",
        description: "nice place with good fishing"
    }
]
function seedDB(){
    // Remove all campgrounds 
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
        // add a few campgrounds 
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    // create a comment 
                    Comment.create(
                        {
                            text: "This place is great but I wish there was WIFI",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
    // add a few comments
}

module.exports = seedDB;
