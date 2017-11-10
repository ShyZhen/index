/**
 * Created by litblc on 2017/11/9.
 */

$(document).ready(function() {
    var currentItem = Math.floor(Math.random() * 5);
    var videoArr = [
        'static/Trio.mp4',
        'static/Wildog.mp4',
        'static/Workout.mp4',
        'static/Riverside.mp4',
        'static/Thirst.mp4'
    ];
    $(".selector-div--video").attr('src', videoArr[currentItem])
});
