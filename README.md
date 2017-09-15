# playlistPicker.js - A simple plugin to render playlists
![alt text](https://github.com/v1siond/playlistPicker/blob/master/src/images/playlist-complete-default.gif?raw=true)

# Playlist Plugin Docs

## Table of Contents

## Playlist Item Object

A playlist is an array of playlist items. A playlist item is an object with the following properties:

| Property      | Type     | Optional  | Description                                         |
| ------------- | -------- | --------- | --------------------------------------------------- |
| `id`          | int      |           | Play video when clicking one of the playlist items. |
| `topic`       | String   | Yes       | Jump to next video an play automatically.           |
| `author`      | String   | Yes       | Theme class                                         |
| `title`       | String   |           | Playlist tag selector.                              |
| `description` | String   |           | Item tag selector.                                  |
| `duration`    | String   |           | thumbnail tag selector.                             |
| `sources`     | array    |           | Item content tag selector.                          |
| `thumbnail`   | array    |           | Item title tag selector.                            |

## Example

```javascript

    var list = [
      {
        id: '1',
        topic: 'some topic',
        author: 'some author',
        title: 'some title',
        description: 'some description',
        duration: '0:35',
        sources: [
          { src: 'https://www.youtube.com/watch?v=VTV02xGBUUA', type: 'video/mp4' }
        ],
        thumbnail: [
          {
            src: 'http://www.gettyimages.es/gi-resources/images/Embed/new/embed2.jpg',
            type: 'image/jpeg'
          }
        ]
      }
    ];
```


## Playlist Options

| Property                    | Type     | Default value          | Description                                         |
| --------------------------- | -------- | ---------------------- | --------------------------------------------------- |
| `playOnClick`               | Boolean  | false                  | Play video when clicking one of the playlist items. |
| `autoPlay`                  | Boolean  | false                  | Jump to next video an play automatically.           |
| `theme`                     | String   | '-default'/-black      | Theme class                                         |
| `playlistPickerContainer`   | String   | 'ol'                   | Playlist tag selector.                              |
| `playlistItemContainer`     | String   | 'li'                   | Item tag selector.                                  |
| `itemImageContainer`        | String   | 'figure'               | thumbnail tag selector.                             |
| `itemContentContainer`      | String   | 'article'              | Item content tag selector.                          |
| `titles`                    | String   | 'h3'                   | Item title tag selector.                            |
| `text`                      | String   | 'p'                    | Item description tag selector.                      |
| `span`                      | String   | 'span'                 | Generic, used to show video duration.               |
| `selectedItem`              | String   | '-selected'            | Class for selected/now-playing video.               |
| `nextItem`                  | String   | 'next-video'           | Class for next video on list.                       |
| `playlistContainer`         | String   | 'playlist-container'   | Class for playlist container.                       |
| `videoPlayer`               | String   | 'playlist-video-player'| Class for playlist videos.                          |
| `playlistPicker`            | String   | 'playlist-picker'      | Class for playlist picker.                          |
| `playlistItems`             | String   | 'playlist-item'        | Class for playlist items.                           |
| `thumbnailClass`            | String   | 'thumbnail-container'  | Class for playlist item thumbnail.                  |
| `itemContentClass`          | String   | 'item-content'         | Class for item content container.                   |
| `authorTopicContainerClass` | String   | 'topic-author'         | Class for topic/author container                    |

## Usage

playlistPicker it's easy to use, you just need to add the file `playlistPicker.js` to your project and run the command

```javascript
playListPicker(JSON, {option: value} );
```
If you want the default styles, add the scss files to your project


## Example

The structure is like this:

```html 
<section class="playlist-background">
    <div class="playlist-container">
      <div class="video">
        <div tabindex="-1" data-setup="{}" poster="MY_VIDEO_POSTER.jpg" preload="auto" class="video-js vjs-paused my-video-dimensions vjs-workinghover vjs-v6 vjs-error vjs-controls-disabled vjs-user-inactive" id="my-video" lang="es-419" role="region" aria-label="Video Player"><video id="my-video_html5_api" class="vjs-tech" preload="auto" poster="MY_VIDEO_POSTER.jpg" data-setup="{}" tabindex="-1" src="MY_VIDEO.mp4">
          <source src="MY_VIDEO.mp4" type="video/mp4">
          <source src="MY_VIDEO.webm" type="video/webm">
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a web browser that
            <a href="http://videojs.com/html5-video-support/" target="_blank" class="vjs-hidden" hidden="hidden">supports HTML5 video</a>
          </p>
        </video>
      </div>
  </div>
</section>
```

Lets asume we have the following list and we have everything already setup

```javascript

    var list = [
      {
        id: '1',
        topic: 'some topic',
        author: 'some author',
        title: 'some title',
        description: 'some description',
        duration: '0:35',
        sources: [
          { src: 'https://www.youtube.com/watch?v=VTV02xGBUUA', type: 'video/mp4' }
        ],
        thumbnail: [
          {
            src: 'http://www.gettyimages.es/gi-resources/images/Embed/new/embed2.jpg',
            type: 'image/jpeg'
          }
        ]
      }
    ];
    playListPicker(list, {playOnClick: true, theme: '-black'});
```

## Result

And the result is like this:

```html 
<section class="playlist-background">
  
    //playlistContainer
    <div class="playlist-container">
      <div class="video">
  
        //videoPlayer
        <div tabindex="-1" data-setup="{}" poster="MY_VIDEO_POSTER.jpg" preload="auto" class="video-js vjs-paused my-video-dimensions vjs-workinghover vjs-v6 vjs-error vjs-controls-disabled vjs-user-inactive" id="my-video" lang="es-419" role="region" aria-label="Video Player"><video id="my-video_html5_api" class="vjs-tech" preload="auto" poster="MY_VIDEO_POSTER.jpg" data-setup="{}" tabindex="-1" src="MY_VIDEO.mp4">
          <source src="MY_VIDEO.mp4" type="video/mp4">
          <source src="MY_VIDEO.webm" type="video/webm">
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a web browser that
            <a href="http://videojs.com/html5-video-support/" target="_blank" class="vjs-hidden" hidden="hidden">supports HTML5 video</a>
          </p>
        </video>
      </div>
    //playlistPickerContainer + playlistPicker + theme
    <ol class="playlist-picker -black">
  
  //playlistItemContainer + playlistItems + selectedItem
      <li id="item-1" src="https://www.youtube.com/watch?v=VTV02xGBUUA" onclick="playlistMethods.changeVideo(this)" class="playlist-item -selected">
  
        //itemImageContainer + thumbnailClass
        <figure class="thumbnail-container" style="background: url(http://www.gettyimages.es/gi-resources/images/Embed/new/embed2.jpg) center center no-repeat; background-size: cover;" type="image/jpeg" src="http://www.gettyimages.es/gi-resources/images/Embed/new/embed2.jpg">
          <i class="fa fa-play"></i>
          <span class="duration">0:35</span>
        </figure>
  
        //itemContentContainer + itemContentClass
        <article class="item-content">
  
          //titles
          <h3 class="title">some title</h3>
  
          
          //text
          <p class="description">some description</p>

          //authorTopicContainerClass
  
          <p class="topic-author">
  
            //span
            <span class="author">some author</span>
            <span class="topic">some topic</span>
          </p>
        </article>
      </li>
   </ol>
  </div>
</section>

You can find a working example     
    
Developer: Alexander Pulido
