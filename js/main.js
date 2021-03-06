let toggleNavStatus = false;
let toggleDarkModeStatus = false;

//Get Class
let getAllHeading = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
let getSidebar = document.querySelector(".nav-sidebar");
let getSidebarMenu = document.querySelector(".menu");
let getToggleDarkMode = document.querySelector(".toggle-darkmode-font-size");
let getNavMain = document.querySelector(".nav-main");
let getMOTHeader = document.querySelector(".mot-header");
let getSearchContainer = document.querySelector(".search-input-container");
let getBtnTglLanguage = document.querySelector(".btn-toggle-language");
let getMainContent = document.querySelector("main");
let getFooter = document.querySelector("footer");
let getFooterLinks = document.querySelectorAll("footer a");
let getBannerAnnouncement = document.querySelector(".banner-announcements");
let getBannerSliderCaption = document.querySelectorAll(".banner-announcement-caption");//kiv
let getQuickLinks = document.querySelector(".quick-links");
let getAllLinks = document.querySelectorAll("a");
let getFrontTopicLinks = document.querySelectorAll(".front-topic a");
let getSlickArrow = document.querySelector(".slick-arrow");




//ACTIVATE CHILD CLASS CODE
var li_elements = document.querySelectorAll(".nav-sidebar ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active-child-level2");
    });
    this.classList.add("active-child-level2");
  });
}

//Declaire variable for Screen Width
var pcwidth = $(window).width();



//TOGGLE NAVIGATION BAR CODE
function toggleNav(){
    if (toggleNavStatus === false) {
        getSidebar.style.width = "100%";
        getSidebarMenu.style.display = "block";
        getToggleDarkMode.style.display = "none";
        // getNavMain.style.backgroundColor =  "#193B6A"; 
        getMOTHeader.style.color =  "white"; 
        getSearchContainer.style.visible =  "hidden"; 
        getBtnTglLanguage.style.visible =  "hidden"; 
        getMainContent.style.display =  "none"; 
        getFooter.style.display =  "none"; 

        if (pcwidth <= 768){//search input for mobile
          getSearchContainer.style.display = "block";
          getSearchContainer.style.visible = "visible";
          getNavMain.style.height = "108px";
          getSidebar.style.top = "108px";
        }

        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {
        getSidebar.style.width = "0px";
        getSidebarMenu.style.display = "none";
        getToggleDarkMode.style.display = "block";
        // getNavMain.style.backgroundColor =  "white"; 
        getSearchContainer.style.visible =  "visible";
        getBtnTglLanguage.style.visible =  "visible";  
        getMOTHeader.style.color =  "#193B6A";
        getMainContent.style.display =  "block"; 
        getFooter.style.display =  "block"; 

        if (pcwidth <= 768){//search input for mobile
          getSearchContainer.style.display = "none";
          getSearchContainer.style.visible = "hidden";
          getNavMain.style.height = "68px";
          getSidebar.style.top = "68px";
        }

        toggleNavStatus = false;

        var li_elements = document.querySelectorAll(".nav-sidebar ul li");
        for (var i = 0; i < li_elements.length; i++) {
            li_elements.forEach(function(li) {
                li.classList.remove("active-child-level2");
              })
        }
    }

    //Change Button From Menu To Close
    
    if(pcwidth > 425){//Desktop Menu Button
      var x = document.getElementById("btn-toggle-nav");
      if (x.innerHTML === '<img src="assets/icon/menu-line-icon.svg"> MENU') {
        x.innerHTML = '<img src="assets/icon/close-menu-icon.svg"> CLOSE';
      } else {
        x.innerHTML = '<img src="assets/icon/menu-line-icon.svg"> MENU';
      }
    }
    else if (pcwidth<=425){//Mobile 
      var x = document.getElementById("btn-toggle-nav");
      if (x.innerHTML === '<img src="assets/icon/menu-line-icon.svg"> MENU') {
        x.innerHTML = '<img src="assets/icon/close-menu-icon.svg">';
      } else {
        x.innerHTML = '<img src="assets/icon/menu-line-icon.svg"> MENU';
      }
    }
}

//TOGGLE DARK MODE CODE
let darkMode = sessionStorage.getItem("darkMode");

  //check if dark mode is enabled
  //if it's enabled, turn it off
  //if it's disabled, turn it on

  //Code if DarkMode Enable
const enableDarkMode = () => {
  document.documentElement.style.setProperty('--white', '#222222');
  document.documentElement.style.setProperty('--black', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--primary-blue', 'white');
  document.documentElement.style.setProperty('--light-blue', '#7AC4FC');
  document.documentElement.style.setProperty('--dark-blue', 'white');
  document.documentElement.style.setProperty('--banner-quicklinks-footer-bg-color', '#101010');
  document.documentElement.style.setProperty('--white-toggle-darkmode-font-size', '#193B6A');
  document.documentElement.style.setProperty('--slick-arrow-color','rgb(255, 255, 255)');//slick-theme.css
  document.documentElement.style.setProperty('--slick-dots-color','rgb(255, 255, 255)');//slick-theme.css

  //Change Icon
  document.getElementById("dark-mode-icon").src = "assets/icon/dark-mode-light-icon.svg";
  document.getElementById("reset-font-size-icon").src = "assets/icon/reset-font-size-light-icon.svg";
  document.getElementById("increase-font-size-icon").src = "assets/icon/increase-font-size-light-icon.svg";
  document.getElementById("phone-icon").src = "assets/icon/phone-receiver-light-icon.svg";
  document.getElementById("printer-icon").src = "assets/icon/printer-light-icon.svg";
  document.getElementById("email-icon").src = "assets/icon/close-envelope-light-icon.svg";
  document.getElementById("facebook-icon").src = "assets/icon/facebook-light-icon.svg";
  document.getElementById("instagram-icon").src = "assets/icon/instagram-light-icon.svg";
  document.getElementById("twitter-icon").src = "assets/icon/twitter-light-icon.svg";
  document.getElementById("youtube-icon").src = "assets/icon/youtube-light-icon.svg";
  document.getElementById("rss-icon").src = "assets/icon/rss-light-icon.svg";


  sessionStorage.setItem("darkMode", "enabled");
  
}
  //Code if DarkMode Disabled
const disableDarkMode = () => {
  document.documentElement.style.setProperty('--white', 'rgb(255, 255, 255');
  document.documentElement.style.setProperty('--black', '#222222');
  document.documentElement.style.setProperty('--primary-blue', '#193B6A');
  document.documentElement.style.setProperty('--light-blue', '#2680EB ');
  document.documentElement.style.setProperty('--dark-blue', '#00122a');
  document.documentElement.style.setProperty('--banner-quicklinks-footer-bg-color', '#F1F3F6');
  document.documentElement.style.setProperty('--white-toggle-darkmode-font-size', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--slick-arrow-color','#222222');//slick-theme.css
  document.documentElement.style.setProperty('--slick-dots-color','#222222');//slick-theme.css

  //Change Icon
  document.getElementById("dark-mode-icon").src = "assets/icon/dark-mode-dark-icon.svg";
  document.getElementById("reset-font-size-icon").src = "assets/icon/reset-font-size-dark-icon.svg";
  document.getElementById("increase-font-size-icon").src = "assets/icon/increase-font-size-dark-icon.svg";
  document.getElementById("phone-icon").src = "assets/icon/phone-receiver-dark-icon.svg";
  document.getElementById("printer-icon").src = "assets/icon/printer-dark-icon.svg";
  document.getElementById("email-icon").src = "assets/icon/close-envelope-dark-icon.svg";
  document.getElementById("facebook-icon").src = "assets/icon/facebook-dark-icon.svg";
  document.getElementById("instagram-icon").src = "assets/icon/instagram-dark-icon.svg";
  document.getElementById("twitter-icon").src = "assets/icon/twitter-dark-icon.svg";
  document.getElementById("youtube-icon").src = "assets/icon/youtube-dark-icon.svg";
  document.getElementById("rss-icon").src = "assets/icon/rss-dark-icon.svg";

  sessionStorage.setItem("darkMode", null);
}
  //Check if the session already enabled the dark mode
if (darkMode === "enabled"){
  enableDarkMode();
}
  //Check and set the darkmode
function toggleDarkMode(){
  darkMode = sessionStorage.getItem("darkMode");
  if (darkMode !== "enabled"){
    enableDarkMode();
  }else{
    disableDarkMode();
  }
} 

// $("#toggleDarkMode").click(function(){
//   Cookies.set('darkMode','enabled');
// });



//TOGGLE INCREASE AND RESET FONT CODE
  //retrieving, and caching, the <body> element:
var body = document.body;
  //find the defaultFontSize and save it in session
let fontSize = parseInt(window.getComputedStyle(body, null).fontSize);
sessionStorage.setItem("defaultFontSize", fontSize);
let defaultFontSize = sessionStorage.getItem("defaultFontSize");

function increaseFontSize(){
  var max = 100;
    //finding the current computed fontSize of the <body> element, parsing it
    currentFontSize = parseInt(window.getComputedStyle(body, null).fontSize);

    //if the currentFontSize is less than the specified max:
  if (currentFontSize < max){
    //we set the fontSize of the <body> to the incremented fontSize,
    //increasing the current value by 1, and concatenating with the 'px' unit:
    body.style.fontSize = ++currentFontSize + 'px';
  }
}

function resetFontSize(){
    //finding the current computed fontSize of the <body> element, parsing it
  currentFontSize = parseInt(window.getComputedStyle(body, null).fontSize);

    //if the currenFontSize of the <body> is not equal to the defaultFontSize
  if (currentFontSize != defaultFontSize){
    //we set the currentFontSize to the defaultFontSize
    body.style.fontSize = defaultFontSize + 'px';
  }
  
}