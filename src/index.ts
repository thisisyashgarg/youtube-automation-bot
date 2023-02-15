import fetch from "node-fetch";
import ffmpeg from "fluent-ffmpeg";
import dotenv from "dotenv";
dotenv.config();

// Function to fetch the lyrics for a song
const getLyrics = async () => {
  try {
    console.log("get lyrics  called");
    const data = await fetch("https://lyrist.vercel.app/api/yellow/coldplay");
    // const response = await fetch(lyricsEndpoint);
    console.log(await data.json());
    // return response;
  } catch (err) {
    console.log(`Error fetching lyrics for song ${err}`);
  }
};

//get top songs
const getTopSongs = async () => {
  try {
    console.log("get top songs called");
    const data = await fetch(
      "https://api.spotify.com/v1/browse/new-releases?limit=10&offset=5",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.SPOTIFY_API_KEY}`,
        },
      }
    );
    // const response = await fetch(lyricsEndpoint);
    const json = await data.json();
    // const albums = await json.albums;
    console.log(json);

    // return response;
  } catch (err) {
    console.log(`Error fetching top songs ${err}`);
  }
};

getLyrics();

// Function to create a lyrical video for a song
// const createLyricalVideo = async (songId) => {
//   try {
//     console.log("create lyrical video called");

//     const lyrics = await getLyrics(songId);
//     const mp3 = await getMP3(songId);

//     // Write the MP3 file to disk
//     writeFileSync(`${songId}.mp3`, mp3);

//     // Create the lyrical video
//     ffmpeg()
//       .input(`${songId}.mp3`)
//       .input(`lyrics.txt`)
//       .output(`${songId}.mp4`)
//       .outputOption(`-c:v libx264`)
//       .outputOption(`-c:a aac`)
//       .outputOption(`-strict experimental`)
//       .outputOption(`-b:a 192k`)
//       .outputOption(`-pix_fmt yuv420p`)
//       .outputOption(`-shortest`)
//       .outputOption(`-filter_complex "[0:a][1:v] overlay=0:0"`)
//       .on("end", () => {
//         console.log(`Lyrical video for ${songId} created successfully!`);
//       })
//       .on("error", (err) => {
//         console.log(`Error creating lyrical video for ${songId}: ${err}`);
//       })
//       .run();
//   } catch (err) {
//     console.log(`Error creating lyrical video for ${songId}: ${err}`);
//   }
// };
