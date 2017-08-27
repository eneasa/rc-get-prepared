<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ratchet template page</title>

    <!-- Sets initial viewport load and disables zooming  -->
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">

    <!-- Makes your prototype chrome-less once bookmarked to your phone's home screen -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!-- Include the compiled Ratchet CSS -->
    <link href="css\ratchet.min.css" rel="stylesheet">

  </head>
  <body>

    <!-- Make sure all your bars are the first things in your <body> -->
    <header class="bar bar-nav">
      <h1 class="title">Home View</h1>
    </header>

    <!-- Wrap all non-bar HTML in the .content div (this is actually what scrolls) -->
    <div class="content">
      <ul class="table-view">
        <li class="table-view-cell media">
          <a class="navigate-right" href="get-prepared.html" >
            <img class="media-object pull-left" src="http://placehold.it/42x42">
            <div class="media-body">
              Get Prepated
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>
            </div>
          </a>
        </li>
        <li class="table-view-cell media">
          <a class="navigate-right">
            <img class="media-object pull-left" src="http://placehold.it/42x42">
            <div class="media-body">
              Plan
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>
            </div>
          </a>
        </li>
        <li class="table-view-cell media">
          <a class="navigate-right">
            <img class="media-object pull-left" src="http://placehold.it/42x42">
            <div class="media-body">
              Key 3 
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>
            </div>
          </a>
        </li>
      </ul>      
    </div>
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
  </body>
</html>