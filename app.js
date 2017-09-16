var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


var campgrounds = [
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
})


app.get("/campgrounds", function(req, res){
    // var campgrounds = [
    //     {name: "Salmon Creek", image: "https://st.depositphotos.com/1400069/2216/i/950/depositphotos_22163033-stock-photo-old-tent-in-the-autumn.jpg"},
    //     {name: "Camp Monster", image: "https://static7.depositphotos.com/1022150/723/i/450/depositphotos_7233796-stock-photo-camping-tent-in-forest-and.jpg"},
    //     {name: "Mountain God", image: "https://st2.depositphotos.com/1005145/6762/i/450/depositphotos_67628111-stock-photo-tourist-tent-in-the-mountains.jpg"}
    // ]

    res.render("campgrounds", {campgrounds:campgrounds});
});


app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
   res.render("new.ejs"); 
});

app.listen(3000, function(){
    console.log("I see you");
})