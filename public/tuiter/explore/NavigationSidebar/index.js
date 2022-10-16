const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <a href="https://en.wikipedia.org/wiki/Dune_(novel)"
           class="list-group-item list-group-item-action wd-background-color pb-3">
          <i class="fa-solid fa-house float-start pt-1 pe-1 wd-color-gray"></i>
          <span class="d-none d-xl-block wd-color-gray">Home</span>
        </a>
        <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
           class="list-group-item list-group-item-action wd-background-color pb-3 active">
          <i class="fa-solid fa-hashtag float-start pt-1 pe-1 wd-color-white"></i>
          <span class="d-none d-xl-block wd-color-white">Explore</span>
        </a>
        <a href="https://en.wikipedia.org/wiki/The_Forever_War"
           class="list-group-item list-group-item-action wd-background-color pb-3">
          <i class="fa-solid fa-bell float-start pt-1 pe-1 wd-color-gray"></i>
          <span class="d-none d-xl-block wd-color-gray">Notifications</span>
        </a>
        <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
           class="list-group-item list-group-item-action wd-background-color pb-3">
          <i class="fa-solid fa-message float-start pt-1 pe-1 wd-color-gray"></i>
          <span class="d-none d-xl-block wd-color-gray">Messages</span>
        </a>
        <a href="https://en.wikipedia.org/wiki/Ender%27s_Game"
           class="list-group-item list-group-item-action wd-background-color pb-3">
          <i class="fa-solid fa-bookmark float-start pt-1 pe-1 wd-color-gray"></i>
          <span class="d-none d-xl-block wd-color-gray">Bookmarks</span>
        </a>
        <a href="https://en.wikipedia.org/wiki/Ender%27s_Game"
           class="list-group-item list-group-item-action wd-background-color pb-3">
          <i class="fa-solid fa-list float-start pt-1 pe-1 wd-color-gray"></i>
          <span class="d-none d-xl-block wd-color-gray">Lists</span>
        </a>
        <a href="https://en.wikipedia.org/wiki/Ender%27s_Game"
           class="list-group-item list-group-item-action wd-background-color pb-3">
          <i class="fa-solid fa-user float-start pt-1 pe-1 wd-color-gray"></i>
          <span class="d-none d-xl-block wd-color-gray">Profile</span>
        </a>
        <a href="https://en.wikipedia.org/wiki/Ender%27s_Game"
           class="list-group-item list-group-item-action wd-background-color pb-3">
          <i class="fa-solid fa-circle-info float-start pt-1 pe-1 wd-color-gray"></i>
          <span class="d-none d-xl-block wd-color-gray">More</span>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;