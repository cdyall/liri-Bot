// This line can read and set  an enviroment variable
require("dotenv").config();

//These import the files needed for the various functions.
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");

//variables that take in the command line arguments
var liriCom = process.argv[2];
var input = process.argv.slice(3).join(" ");

//divider to seperate logs in log.txt file.
var divider =
  "\n------------------------------------------------------------\n\n";

// Here I create liri comands concert-this, spotify-this-song, movie-this and do-what-it-says.
//  I will do this using the switch statment, this allows me to preform diffrent actions based on the conditions.
function command(liriCom, input){
  switch (liriCom){

    case "concert-this":
      conInfo(input);
      break;

    case "spotify-this-song":
      spotInfo(input);
      break;

     case "movie-this":
       movInfo(input);
       break;

     case "do-what-it-says":
       doThis();
       break;
  }
}


// function for "concert-this" command. 
function conInfo(input) {
  // query url
  var queryUrl =
    "https://rest.bandsintown.com/artists/" +input +"/events?app_id=codingbootcamp";

  // Print the query url.
  console.log(queryUrl);

  // Performing get request
  axios.get(queryUrl).then(function(response) {
    var bandInfo = response.data[0];

     // properties end up being the string containing the show data we will print to the console
    var eveInfo = [
      "Band:" + bandInfo.lineup,
      "Venue:" + bandInfo.venue.name,
      "City:" + bandInfo.venue.city,
      "Date:" + bandInfo.datetime
    ].join("\n\n");

     // Append properties and the divider to log.txt, print showData to the console
    fs.appendFile("log.txt", eveInfo + divider, function(err) {
      if (err) throw err;
      console.log(eveInfo);
    });
  });
}

// function for "spotify-this-song" command.
function spotInfo(songName) {
  var spotify = new Spotify(keys.spotify);

  //If no song is provided, use "The Sign" 
      if (!songName) {
          songName = "The Sign";
      };        

      console.log(songName);

      //Callback to spotify to search for song name
      spotify.search({ type: 'track', query: songName}, function(err, data) {
          if (err) {
              return console.log('Error occurred: ' + err);
          } 

           // properties end up being the string containing the show data we will print to the console
          var songInfo = [
            "Artist: " + data.tracks.items[0].artists[0].name,
            "Song name: " + data.tracks.items[0].name,
            "Album Name: " + data.tracks.items[0].album.name,
            "Preview Link: " + data.tracks.items[0].preview_url
           ] .join("\n\n");
               
          //Appends text to log.txt file
          fs.appendFile('log.txt', songInfo + divider, function (err) {
              if (err) throw err;
              console.log(songInfo);
            });    
      });
};


function movInfo(movieName) {

 //If no movie name is provided, use Mr.Nobody as default
 if (!movieName) {
  movieName = "mr nobody";
}

  // query url
  var queryUrl = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json&tomatoes=true&apikey=trilogy";

  // Print the query url.
  console.log(queryUrl);

  // Performing get request
  axios.get(queryUrl).then(function(response) {
    var movieResult = response.data;

     // properties end up being the string containing the show data we will print to the console
    var listing = [
      "Title:" + movieResult.Title,
      "Year:" + movieResult.Year,
      "IMDB Rating:" + movieResult.Ratings[0].Value,
      "Rotten Tomatoes Rating:" + movieResult.Ratings[1].Value,
      "Country:" + movieResult.Country,
      "Language:" + movieResult.Language,
      "Plot:" + movieResult.Plot,
      "Actors:" + movieResult.Actors
    ].join("\n\n");

     // Append properties and the divider to log.txt, print showData to the console
    fs.appendFile("log.txt", listing + divider, function(err) {
      if (err) throw err;
      console.log(listing);
    });
  });
}

//Function for Random
function doThis(){
  fs.readFile('random.txt', "utf8", function(error, data){
    if (error) {
      return console.log(error);
    }
   
    var info = data.split(',');
    // Sends song name back to spotify function.
    spotInfo(info[1]);
  });
}



command(liriCom,input);