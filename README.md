# liri-node-app

**Creator**: `Chris Dyall`

**Created on**: `May 19 2019`

## LIRI Bot for Week #10 Homework

### About

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. Utilizing the followinig commands:

    * `concert-this`

    * `spotify-this-song`

    * `movie-this`

    * `do-what-it-says`

------------------------------------------------------------------------------------------------------------------------------------------------
## TECHNOLOGIES USED
    * Javascript
    * Nodejs
    * Node packages:
        * Node-Spotify-API
        * DotEnv
        * Axios
        * Moment
    * APIs used:
        * Bands in Town
        * OMDB
    * Git
    * GitHub
-------------------------------------------------------------------------------------------------------------------------------------------------
## What it does

#### Bands in Town Artist Events API
 `node liri.js concert-this <artist/band name here>`

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

    * Name of the venue
    * Venue location
    * Date of the Event (use moment to format this as "MM/DD/YYYY")


#### Spotify
`node liri.js spotify-this-song <insert song title>`

This will show the following information about the song in your terminal/bash window

    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base

#### Movies
`node liri.js movie-this <insert movie title>`

This will output the following information to your terminal/bash window:

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
    * Rotten Tomatoes Rating.
    * Rotten Tomatoes URL.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

#### Do What It Says
`node liri.js do-what-it-says`

Using the `fs` Node package, LIRI will take the text from random.txt file and then use it to call one of LIRI's commands.

Right now it will run `spotify-this-song` for "I Want it That Way,".

As of right now it will only work with spotitfy. I am will continue to work towards the other functions working here as well.

## HOW TO USE LIRI

### **Step by Step instructions**

1. Open your terminal application.
2. Navigate to the folder that contains the `liri.js` file. 
3. Depending on the command you run, the output will vary. 

    **Example 1**: Run the `concert-this` command
    
        node liri.js concert-this <name of artist or band>
    
    Output: The system will display a list of all events and locations where the artist or band will perform. The system will also log all the results in the log.txt file. See screen-shot below:

    ![Results](/screenshot/concert-this.png)

    **Example 2**: Run the `spotify-this-song` command
    
        node liri.js spotify-this-song <name of song>
    
    Output: The system will display a list of information associated with the song. The system will also log all the results in the log.txt file. See screen-shot below:

    ![Results](/screenshot/spotify-this-song.png)

    **Example 3**: Run the `movie-this` command
    
        node liri.js movie-this <name of movie>
    
    Output: The system will display information associated with the movie. The system will also log all the results in the log.txt file. See screen-shot below:

    ![Results](/screenshot/movie-this.png)

    **Example 4**: Run the `do-what-it-says` command
        
        node liri.js do-what-it-says
        
    Output: The system will read the text in the random.txt file, and perform the comman listed in the random.txt file. 
    
    ![Results](/screenshot/do-what-it-says.png)


