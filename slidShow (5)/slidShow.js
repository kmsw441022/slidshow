const picArray = [
  {src: 'file:///Users/yoshikiiijima/Desktop/slidShow (5)/image/IMG_0394.JPG', title: '1'},
  {src: 'file:///Users/yoshikiiijima/Desktop/slidShow (5)/image/IMG_0396.JPG', title: '2'},
  {src: 'file:///Users/yoshikiiijima/Desktop/slidShow (5)/image/IMG_0535.jpg', title: '3'},
  {src: 'file:///Users/yoshikiiijima/Desktop/slidShow (5)/image/IMG_4949.JPG', title: '4'},
  ];
  
  let counter = 0;
  
  function changePicture() {
    if (counter < picArray.length) {
      document.getElementById('pics').src = picArray[counter].src;
      document.getElementById('pic-title').innerHTML = picArray[counter].title;
      counter++;
    } else {
      document.getElementById('pics').src = picArray[0].src;
      document.getElementById('pic-title').innerHTML = picArray[0].title;
      counter = 1;
    } 
  }
  
  let playingID = 0;
  
  function playSlidedeshow () {
    if (playingID == 0) {
      document.getElementById('playButton').innerHTML = 'STOP';
      playingID = setInterval(changePicture, 2000);
    } else {
      document.getElementById('playButton').innerHTML = 'START';
      clearInterval(playingID);
      playingID = 0;
    }
  }
 