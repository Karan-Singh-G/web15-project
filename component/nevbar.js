    //  <div></div>  id=""
        function navbar(email,name){
        
    return ` 
    <div id="upper_navbar">
    <div id="upper_navbar_insidecontainer">
        <div id="kindmeal_picture_div">
            <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="">
        </div>
        <div id="logos_container">
            <div id="logo1">
                <img src="https://www.kindmeal.my/images/follow_blog_grey.png" alt="">
            </div>
            <div id="logo2">
                <img src="https://www.kindmeal.my/images/follow_facebook_grey.png" alt="">
            </div>
            <div id="logo3">
                <img src="https://www.kindmeal.my/images/follow_twitter_grey.png" alt="">
            </div>
           
        </div>
        <div id="login_div_container">
            <div id="writtenlogin">Login</div>
            <div id="facebookbtn">
                <button>${email}</button>
            </div>
            <div id="emailbtn">
                <button>Email</button>
            </div>
            <div id="line">|</div>
            <div id="writtensignup">
                <a  id="signuphref"   href="signup.html">${name}</a></div>
        </div>
    </div>
</div>
     <div id="header_bar">
    <div id="header_bar_main_container">
        <div><a class="header_bar_container_href"href="home.html">Home</a></div>
        <div><a class="header_bar_container_href"href="mealsdeal.html">Meal Deals</a></div>
        <div><a  class="header_bar_container_href"href="">Kind Moment</a></div>
        <div><a class="header_bar_container_href" href="">Hot Picks</a></div>
        <div><a class="header_bar_container_href" href="recipes.html">Recipes</a></div>
        <div><a class="header_bar_container_href" href="">Directory</a></div>
        
      
        <div><a class="header_bar_container_href" href="">Articles</a></div>
        <div><a class="header_bar_container_href" href="">Help</a></div>
       
    </div>
</div> `
}
       
       





export default navbar ;