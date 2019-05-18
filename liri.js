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
var input = process.argv[3];

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




