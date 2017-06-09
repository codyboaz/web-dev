var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
    {
        name: "Clouds Rest", 
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum tristique maximus. Praesent eleifend viverra faucibus. Vestibulum dictum tempor diam, sed vulputate metus condimentum a. Nam vel sollicitudin velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam imperdiet lorem ex, ut sodales leo suscipit quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam et purus porttitor eros volutpat semper et sit amet erat. Pellentesque pulvinar ante in est feugiat, a tincidunt odio malesuada. Aenean viverra sit amet metus pharetra volutpat. Mauris eu augue eget augue consectetur ullamcorper. Aenean varius efficitur est, ac egestas ex. Donec rhoncus, massa nec consectetur egestas, leo felis hendrerit ex, at auctor augue enim ut ipsum Fusce maximus non velit et ullamcorper. Cras non ligula ut nunc facilisis faucibus. Nulla imperdiet est eu orci iaculis auctor. Pellentesque euismod pellentesque mi. Nam at risus eget metus ullamcorper facilisis. Nulla varius est quis nulla egestas, id condimentum eros consectetur. Cras id vehicula nulla, et hendrerit lectus. Nullam at nunc eget nisi semper ullamcorper quis non nunc."
    },
    {
        name: "Soft Lake", 
        image: "http://images.dailyhive.com/20160630114533/Sasamat-Lake-PeteFlickr.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum tristique maximus. Praesent eleifend viverra faucibus. Vestibulum dictum tempor diam, sed vulputate metus condimentum a. Nam vel sollicitudin velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam imperdiet lorem ex, ut sodales leo suscipit quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam et purus porttitor eros volutpat semper et sit amet erat. Pellentesque pulvinar ante in est feugiat, a tincidunt odio malesuada. Aenean viverra sit amet metus pharetra volutpat. Mauris eu augue eget augue consectetur ullamcorper. Aenean varius efficitur est, ac egestas ex. Donec rhoncus, massa nec consectetur egestas, leo felis hendrerit ex, at auctor augue enim ut ipsum Fusce maximus non velit et ullamcorper. Cras non ligula ut nunc facilisis faucibus. Nulla imperdiet est eu orci iaculis auctor. Pellentesque euismod pellentesque mi. Nam at risus eget metus ullamcorper facilisis. Nulla varius est quis nulla egestas, id condimentum eros consectetur. Cras id vehicula nulla, et hendrerit lectus. Nullam at nunc eget nisi semper ullamcorper quis non nunc."
    },
    {
        name: "Bass Lake", 
        image: "http://mthikes.com/wp-content/uploads/2015/07/Silver-Lake.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum tristique maximus. Praesent eleifend viverra faucibus. Vestibulum dictum tempor diam, sed vulputate metus condimentum a. Nam vel sollicitudin velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam imperdiet lorem ex, ut sodales leo suscipit quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam et purus porttitor eros volutpat semper et sit amet erat. Pellentesque pulvinar ante in est feugiat, a tincidunt odio malesuada. Aenean viverra sit amet metus pharetra volutpat. Mauris eu augue eget augue consectetur ullamcorper. Aenean varius efficitur est, ac egestas ex. Donec rhoncus, massa nec consectetur egestas, leo felis hendrerit ex, at auctor augue enim ut ipsum Fusce maximus non velit et ullamcorper. Cras non ligula ut nunc facilisis faucibus. Nulla imperdiet est eu orci iaculis auctor. Pellentesque euismod pellentesque mi. Nam at risus eget metus ullamcorper facilisis. Nulla varius est quis nulla egestas, id condimentum eros consectetur. Cras id vehicula nulla, et hendrerit lectus. Nullam at nunc eget nisi semper ullamcorper quis non nunc."
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
