// 1. JS LOOP
// Fix this loop so that it enumerates all of the key/value pairs:
// var a = { one: 1, two: 2, three: 3, four: 4, five: 5 };
// for (var i = 0, len = a.length; i < len; i++ ){
//   console.log(i, a[i]);
// }

var a = { one: 1, two: 2, three: 3, four: 4, five: 5 };
Object.keys(a).forEach(function(key) {
    console.log(key, a[key]);
});




// 2. Often, we get very large and uncomfortable JSON objects (basically, JavaScript hashes/objects) back from an API. Let’s practice working with one such object.
// You’re going to want this file: https://gist.github.com/seansellek/fae4a5e6f09612cfe9c5

var i = 0


while (i < videos.results.length){
  console.log(videos.results[i].trackName)
  i++;
}
