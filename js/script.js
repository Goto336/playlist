/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sexyback", "High Life", "Raging of a Sunday"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imageLinks = ["https://image.slidesharecdn.com/how-20to-20make-20your-20charts-20sexy-20enough-20for-20jt-131004212308-phpapp02/95/how-to-make-your-charts-sexy-enough-for-justin-timberlake-34-638.jpg?cb=1380961785", "https://direct.rhapsody.com/imageserver/images/Alb.335732394/500x500.jpg", "https://www.google.com/search?safe=strict&rlz=1CANQDY_enUS815&biw=1366&bih=610&tbm=isch&sa=1&ei=wLtYXJiMBNKQsAXz1ISgAQ&q=raging+on+a+sunday&oq=Raging+on+a+&gs_l=img.3.0.0j0i24.72304.76497..77846...0.0..0.90.960.12......2....1..gws-wiz-img.....0..35i39j0i67j0i8i30.ptqfDkWlVhE#imgrc=B-uT-v6QxAOvgM:"];

var artists = ["Justin Timberlake", "Nick Tierre", "Bohnes"];

var songLengths = ["4:00", "3:30", "3:30"];

var songLinks = ["https://www.youtube.com/watch?v=FdSRfdu_dLU", "https://www.youtube.com/watch?v=_NhkMga2RZ8&list=LLjiNCV4fQfACeVJTUk9VxMg&index=9&t=0s", "https://www.youtube.com/watch?v=zrFhr2U0ytg"];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
       for(var i = 0; i < songs.length; i++) {
           $("#images").append("<img src='" + imageLinks[i] + "'>");
           $("#songs").append("<p>"+ songs[i] + "</p>");
           $("#artists").append("<p>"+ artists[i] + "</p>");
           $("#lengths").append("<p>"+ songLengths[i] + "</p>");
           $("#links").append("<a>"+ songLinks[i] + "</a>");
       }
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
