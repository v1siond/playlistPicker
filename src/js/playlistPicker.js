(function( $ ) {
  //Default Options, documentation about each option can be read in Github
  let defaultOptions = {
    playOnClick: false,
    autoPlay: false,
    theme: '-default',
    playlistPickerContainer: 'ol',
    playlistItemContainer: 'li',
    itemImageContainer: 'figure',
    itemContentContainer: 'article',
    titles: 'h3',
    text: 'p',
    span: 'span',
    selectedItem: '-selected',
    nextItem: 'next-video',
    onPlay: 'now-playing',
    playlistContainer: 'playlist-container',
    playlistVideo: 'video-container',
    videoPlayer: 'playlist-video-player',
    playlistPicker: 'playlist-picker',
    playlistItems: 'playlist-item',
    thumbnailClass: 'thumbnail-container',
    itemContentClass: 'item-content',
    authorTopicContainerClass: 'topic-author'
  };

  //Define PlayListPicker with default options
  playListPicker = function(playlistVideos = {}, userOptions = {}, defaultO = defaultOptions) {

    //Load User Options
    let options = $.extend({}, defaultO, userOptions);

    //define DOM objects
    let playlistContainer = $('.' + options.playlistContainer),
        videoP = $('.' + options.videoPlayer)
        items = [];

    //define const objects, this will be created and appended to playlistContainer
    const playlist = document.createElement(options.playlistPickerContainer);
    playlist.classList.add(options.playlistPicker);
    playlist.classList.add(options.theme);

    let init = function() {
      //If there're no videos nor the container doesn't exist don't continue
      if (!playlistVideos.length) {
        console.log('No videos loaded');
        return false;
      }
      if (!playlistContainer.length) {
        console.log('You didnt define the playlist-container');
        return false;
      }

      if (options.autoPlay === true) {
        videoP.children('video').attr({
          'autoplay': 'true',
          'onended': 'playlistMethods.nextVideoAuto()'
        });
      }

      //append playlist
      playlistContainer.append(playlist);

      //iterate through the videos data to create the items
      $.each(playlistVideos, function(index, video) {

        //create the text variables and the arrays for the items
        let itemContent = [],
            contentText = [],
            contentFigure = [];
            titleText = document.createTextNode(video.title),
            descriptionText = document.createTextNode(video.description),
            durationText = document.createTextNode(video.duration),
            authorTopic = document.createElement(options.text);

        //Author and Topics are optional, so we check if they exist before create them
        if (video.author || video.topic) {
          topicauthorChilds = [];
          authorTopic.classList.add(options.authorTopicContainerClass);

          if (video.author) {
            author = document.createElement(options.span);
            author.classList.add('author');
            authorText = document.createTextNode(video.author);
            author.appendChild(authorText);
          }
          if(video.topic) {
            topic = document.createElement(options.span);
            topic.classList.add('topic');
            topicText = document.createTextNode(video.topic);
            topic.appendChild(topicText);
          }
          topicauthorChilds.push(author, topic);
          $.each(topicauthorChilds, function(index, text) {
            authorTopic.appendChild(text);
          });
        }
        //define the tags
        const item = document.createElement(options.playlistItemContainer),
              figure = document.createElement(options.itemImageContainer),
              img = document.createElement("i"),
              content = document.createElement(options.itemContentContainer),
              title = document.createElement(options.titles),
              description = document.createElement(options.text),
              duration = document.createElement(options.span);

        //define attributes for each item
        item.setAttribute('id', 'item-'+ video.id);
        item.setAttribute('src', video.sources[0].src);
        item.setAttribute('onClick', 'playlistMethods.changeVideo(this)');
        item.classList.add(options.playlistItems);
        if (index === 0) {
          item.classList.add('-selected');
        }else if(index === 1) {
          item.classList.add('next-video');
        }

        figure.setAttribute('class', options.thumbnailClass);
        figure.setAttribute('style', 'background: url('+ video.thumbnail[0].src +') center center no-repeat; background-size: cover;');
        figure.setAttribute('type', video.thumbnail[0].type);
        figure.setAttribute('src', video.thumbnail[0].src)
        img.setAttribute('class', 'fa fa-play');

        content.setAttribute('class', options.itemContentClass);
        title.setAttribute('class', 'title');
        title.appendChild(titleText);
        description.setAttribute('class', 'description');
        description.appendChild(descriptionText);
        duration.setAttribute('class', 'duration');
        duration.appendChild(durationText);


        //iterate trough content array to append text
        contentFigure.push(img, duration);
        $.each(contentFigure, function(index, figItem) {
          figure.appendChild(figItem);
        });

        if ($(authorTopic).children().length > 0) {
          contentText.push(title, description, authorTopic);
        }else {
          contentText.push(title, description);
        }

        $.each(contentText, function(index, text) {
          content.appendChild(text);
        });
        itemContent.push(figure, content);
        $.each(itemContent, function(index, content) {
          item.appendChild(content);
        });

        //save items in an array
        items.push(item);
      });

      //Append items in playlist
      $.each(items, function(index, item) {
        playlist.appendChild(item);
      });
    }

    //Methods
    playlistMethods = {
      changeVideo: function(el) {
        let itemsClass = $('.' + options.playlistItems),
            video = $('.' + options.videoPlayer),
            list = $('.' + options.playlistPicker),
            item = $(el),
            posterSrc = item.children('figure').attr('src'),
            videoSrc = item.attr('src');

        list.animate({scrollTop: item.index() * 154}, 500);
        itemsClass.removeClass('-selected');
        itemsClass.removeClass(options.nextItem);
        item.addClass('-selected');
        item.next().addClass(options.nextItem);
        video.children('video').attr('src', videoSrc);
        video.children('.vs-poster').attr('background', 'url('+ posterSrc +')')

        if (options.playOnClick === true) {
          video.children('video')[0].play();
        }
      },
      nextVideoAuto: function() {
        let nextVideo = $('.' + options.nextItem);
        playlistMethods.changeVideo(nextVideo);
      }
    }
    init();
  };

}( jQuery ));
