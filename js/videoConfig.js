/**
 * Created by litblc on 2017/11/9.
 */

$(document).ready(function(){
    var currentItem = Math.floor(Math.random()*3);
    var videoArr = ['static/Trio.mp4', 'static/Wildog.mp4', 'yellow.jpg'];
    $(".selector-div--video").attr('src', videoArr[currentItem])
});
