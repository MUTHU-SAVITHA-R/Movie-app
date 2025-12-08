var page = document.querySelector(".backpage");
var login = document.querySelector(".loginbackpage");
var frontPage=document.querySelector("#front-page");
var fav=document.querySelector(".fav");
var profile=document.querySelector(".profile");
var log=document.querySelector("#log");
var signin=document.querySelector("#sign-in");
var free=document.querySelector(".free");
function update() {
    page.style.display = "block";
    login.style.display="none";
    window.scrollTo(0,0);
    frontPage.style.display="none";
    

}

function updates() {
    login.style.display = "block";
    page.style.display="none";
    window.scrollTo(0,0);
    frontPage.style.display="none";
    

}
var changetologin = document.querySelector(".change-to-login");
changetologin.addEventListener("click",function(){
      page.style.display="none";
      login.style.display = "block";
      window.scrollTo(0,0);
})
var changetosignup = document.querySelector(".change-to-signup");
changetosignup.addEventListener("click",function(){
     login.style.display = "none";
      page.style.display="block";
      window.scrollTo(0,0);
})
 

var cancelpage = document.querySelector(".cancel-page");
cancelpage.addEventListener("click",function(){
      location.reload();
      
})
var cancellogin = document.querySelector(".cancel-login");
cancellogin.addEventListener("click",function(){
      location.reload();
      
})
var loginform = document.getElementById("log-in-form");
loginform.addEventListener("submit", function (e) {
    e.preventDefault();
    const email=document.getElementById("emailid").value.trim();
    const password=document.getElementById("pw").value;
    const users=JSON.parse(localStorage.getItem("users"))||[];
    
    const matcheduser=users.find(user=>user.email===email && user.password===password );
    if(matcheduser){
         
          localStorage.setItem("logged",JSON.stringify(matcheduser));
          alert("Login Successful!");
          location.reload();
          
    }
    else{
        alert("Invalid credentials");
    }
   
    
})
if(localStorage.getItem("logged")){
    fav.style.display="block";
    profile.style.display="block";
    log.style.display="none";
    signin.style.display="none";
    free.style.display="none";

}
   

var form = document.getElementById("sign-up-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value;
    const confirm=document.getElementById("confirmpassword").value;
    const newuser={name,email,password};
    const users=JSON.parse(localStorage.getItem("users"))||[];
    const exist=users.some(user=>user.email===email);
    if(exist){
        alert("Email already registered.");
        return;
    }
    if(password!==confirm){
        alert("Passwords do not match.");
        return;
    }
    users.push(newuser);
    localStorage.setItem("users",JSON.stringify(users));
    alert("Signup successful! Now login");
    location.reload();
});

class loop {

    static movie(movieName) {

        movieName.style.display = "flex";
        window.scrollTo(0,0);
        frontPage.style.display="none";

    }
}
var search = document.querySelector(".search-movies");
search.addEventListener("submit", function (event) {
    event.preventDefault();
    const loggedUser=JSON.parse(localStorage.getItem("logged"));
    if(!loggedUser){
        let count=parseInt(localStorage.getItem('count'))||0;
        count++;
        localStorage.setItem("count",count);
        if(count>3){
            alert("Please loggin to continue.");
            return;

        }
    }
    var input = document.querySelector(".ip");
    const movies = {
        "luca": "#luc",
        "the school for good and evil": "#school",
        "encanto": "#encanto",
        "nimona": "#nimona",
        "the incredibles": "#incredibles",
        "moana": "#moana",
        "ratatouille": "#rata",
        "zootopia": "#zoo",
        "inside out": "#insideout",
        "hotel transylvania": "#hotel",
        "tangled": "#tangled"
    };
    const movieclass = movies[input.value.toLowerCase()];
    if (movieclass) {

        loop.movie(document.querySelector(movieclass));


    }


    else {
        alert("Movie not found or give the correct name of the movie");
    }
    var ref = document.querySelectorAll(".refresh");
    for (var count = 0; count < ref.length; count++) {
    ref[count].addEventListener("click", function () {
        document.querySelector(movieclass).style.display="none";
        frontPage.style.display="block";
    });
}

});
var add=document.querySelectorAll(".add-to-whist");
for (var count = 0; count < add.length; count++){
    add[count].addEventListener("click",function(){
    
        alert("Movie added to whistlist");
});
}

const profileDropdown = document.getElementById('profile-dropdown');
const logoutBtn = document.getElementById('logout-btn');


profile.addEventListener('click', () => {
  profileDropdown.classList.toggle('hidden');
});


logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('logged');
  location.reload();
});


const loggedUser = JSON.parse(localStorage.getItem('logged'));
if (loggedUser) {
  document.getElementById('profile-name').textContent = loggedUser.name ;
  document.getElementById('profile-email').textContent = loggedUser.email || "";
}