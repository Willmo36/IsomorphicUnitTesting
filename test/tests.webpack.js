//http://qiita.com/kimagure/items/f2d8d53504e922fe3c5c

var context = require.context('./all', true, /\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);