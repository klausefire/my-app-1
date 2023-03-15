<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>To-Do List App</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="background-container">
      
      <div class="background-image" style="background-image: url('pexels-ian-beckley-2440021.jpg')"></div>
      <div class="background-image" style="background-image: url('pexels-evgeny-tchebotarev-4101555.jpg')"></div>
      <div class="background-image" style="background-image: url('pexels-stein-egil-liland-1933316.jpg')"></div>
      <div class="background-image" style="background-image: url('pexels-tyler-lastovich-633198.jpg')"></div>
      
    </div>
    <header>
      <h1 id="greeting-text"></h1>
      <div class="credit-text">porfolilo of james_labdesign @Fiverr.com</div>
      <div id="current-time"></div>
    </header>
    <main>
      <!-- To-Do List content here -->
      <ul id="todo-list">
      <!-- to-do items will be added dynamically here -->
      </ul>
    </main>
    <footer>
      <input type="text" id="new-todo" placeholder="Add something you plan to do today...">
      <button id="add-todo">Add</button>
    </footer>
    <div class="photo-credit">
      Photo by Ian Beckley: https://www.pexels.com/photo/lake-with-mountain-view-2440021/
    </div>
    
    <script src="app.js"></script>

    <script>
      const greetingText = document.querySelector('#greeting-text');
      const currentTime = document.querySelector('#current-time');

      function updateGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let greeting = '';

        if (hour < 12) {
          greeting = 'Good morning';
        } else if (hour < 18) {
          greeting = 'Good afternoon';
        } else {
          greeting = 'Good evening';
        }

        //const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const formattedDate = now.toDateString();

        greetingText.textContent = `${greeting}! Today is ${formattedDate}`;
      }

      function updateTime() {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        currentTime.textContent = `Current time: ${formattedTime}`;
      }

      // Call updateGreeting function when the page loads and every minute
      updateGreeting();
      setInterval(updateGreeting, 60000);

      // Call updateTime function every second
      updateTime();
      setInterval(updateTime, 1000);

      // Background random
      const backgrounds = [
        {
          url: 'pexels-ian-beckley-2440021.jpg',
          owner: 'Photo by Ian Beckley: https://www.pexels.com/photo/lake-with-mountain-view-2440021/'
        },
        {
          url: 'pexels-evgeny-tchebotarev-4101555.jpg',
          owner: 'Photo by Evgeny Tchebotarev: https://www.pexels.com/photo/photo-of-mountain-under-cloudy-sky-4101555/'
        },
        {
          url: 'pexels-stein-egil-liland-1933316.jpg',
          owner: 'Photo by stein egil liland: https://www.pexels.com/photo/time-lapse-photo-of-northern-lights-1933316/'
        },
        {
          url: 'pexels-tyler-lastovich-633198.jpg',
          owner: 'Photo by Tyler Lastovich: https://www.pexels.com/photo/brown-and-white-mountain-633198/'
        },
        // add more background photos and owners as needed
      ];
      const backgroundImages = document.querySelectorAll('.background-image');
      let currentIndex = 0;

      function changeBackground() {
        // increment the current index and wrap around if necessary
        currentIndex = (currentIndex + 1) % backgrounds.length;

        // set the background image and photo credit
        const currentBackground = backgrounds[currentIndex];
        for (let i = 0; i < backgroundImages.length; i++) {
          backgroundImages[i].style.backgroundImage = `url(${currentBackground.url})`;
        }
        document.querySelector('.photo-credit').textContent = currentBackground.owner;
      }

      // call the changeBackground function every 10 seconds
      setInterval(changeBackground, 10000);
    </script>
  </body>
</html>
