<html>
      <div id="navbar" class="notScrolled">
            <a class="active" href="https://natalie-k.github.io/">Home</a>
            <a href="https://natalie-k.github.io/shop">Shop</a>
            <a class="margin" href="https://natalie-k.github.io/about-us">About Us</a>
      </div>
      <script>
          window.onscroll = function() {myFunction()};
          var navbar = document.getElementById("navbar");
          var sticky = navbar.offsetTop;
          function myFunction() {
            if (window.pageYOffset >= sticky) {
              navbar.classList.remove("notScrolled");
              navbar.classList.add("scrolled");
            } else {
              navbar.classList.remove("scrolled");
              navbar.classList.add("notScrolled");
            }
          }
      </script>
<html>
