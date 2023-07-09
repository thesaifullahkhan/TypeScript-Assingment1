function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
// Call make_album() with different album details
console.log(make_album("Taylor Swift", "Fearless"));
console.log(make_album("Ed Sheeran", "Divide", 16));
console.log(make_album("Adele", "21", 12));
