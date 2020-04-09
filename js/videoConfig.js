/**
 * Created by litblc on 2017/11/9.
 */

$(document).ready(function() {
    var currentItem = Math.floor(Math.random() * 5);
    var videoArr = [
        // 'static/Trio.mp4',
        // 'static/Wildog.mp4',
        // 'static/Workout.mp4',
        // 'static/Riverside.mp4',
        // 'static/Thirst.mp4',

        'http://img.litblc.com/Trio.mp4',
        'http://img.litblc.com/Wildog.mp4',
        'http://img.litblc.com/Workout.mp4',
        'http://img.litblc.com/Riverside.mp4',
        'http://img.litblc.com/Thirst.mp4'

        // 'https://video.fmock.com/hls/2020/04/b5f0d7a0a63c522234def6c1428c47c4.m3u8',
        // 'https://video.fmock.com/hls/2020/04/caab31f8a45751d17b244ab63fe2046a.m3u8',
        // 'https://video.fmock.com/hls/2020/04/f460f40056ba6f16b4f9f04903105b33.m3u8',
        // 'https://video.fmock.com/hls/2020/04/f5233b8094eab263484d6c6b598e571f.m3u8',
        // 'https://video.fmock.com/hls/2020/04/f7969fac2dd55a073b8363d8561fb13c.m3u8'
    ];
    $("#selector-div--video").attr('src', videoArr[currentItem])
});
