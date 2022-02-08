// object destructuring:

const song  = {
    album:"tum he ho",
    singer:"arjit singh",
    year:2019,
    remix:2022
};
const album = song.album;
const year = song.year;
console.log(album);
console.log(year);
console.log(song);

//using object  destructuring:

const {album, singer} = song;
console.log(album, singer);

// if we wish to change the variable name we can also do so :
const {album:var1, singer:var2} = song;
console.log(var1, var2);

// if we wish to store rest of the properties in another variable.

const {album, singer, ...respro} = song;
console.log(album,singer, respro);

