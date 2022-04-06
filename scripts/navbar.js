// Navbar template - html
const template = document.createElement('template');

template.innerHTML = `
<nav class="nav">
    <input type="checkbox" id="nav-check">
    <div class="nav-header">
        <div class="nav-title">
            <img src="./images/logo_org.png" alt="logo">
        </div>
    </div>
    <div class="nav-btn">
        <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
        </label>
    </div>
    <div class="nav-links">
        <a class="active"  href="./home.html">Home</a>
        <a href="./about_me.html" >About</a>
        <a href="./porfolio.html" >Portfolio</a>
        <a href="./shop.html" >Shopping</a>
        <a href="./events.html" >Events</a>
        <a href="./artist_test.html" >Artist Test</a>
        <a href="./visit_us.html" >Visit Us</a>
        <a href="./contact_us.html" >Contact Us</a>
    </div>
</nav>
`;

document.body.appendChild(template.content);

// Navbar template - css
const style = document.createElement('style');

style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Montserrat;
}

body {
    margin: 0px;
    font-family: 'segoe ui';
}

.nav {
    padding: 5px 30px; 
    width: 100%;
    background-color: #ffecec;
    position: relative;
}
.nav > .nav-header {
    display: inline;
}
.nav > .nav-header > .nav-title {
    display: inline-block;
}
.nav > .nav-header > .nav-title > img {
    width: 10rem;
}
.nav > .nav-btn {
    display: none;
}  
.nav > .nav-links {
    display: inline;
    float: right;
    font-size: 1.1rem;
}
.nav > .nav-links > a {
    display: inline-block;
    margin-top: 0.4rem;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #000000;
}
.nav > .nav-links > a:hover {
    background-color:  #ff5757;
    color: #ffecec;
}
.nav .active {
    background-color:  #ff5757;
    color: #ffecec !important;
}
.nav > #nav-check {
    display: none;
}

@media only screen and (max-width: 1024px) {
}

@media only screen and (max-width: 768px) {
}
  
@media (max-width:576px) {
    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
    }
    .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
      background-color: #ffecec;
      border-color: #ff5757;
    }
    .nav-btn span {
        color: #ff5757;
    }
    .nav > .nav-links > a {
        color: #ffecec;
    }
    .nav > .nav-btn > label > span {
        display: block;
        width: 25px;
        height: 10px;
        border-top: 2px solid #ff5757;
    }
    .nav > .nav-links {
        z-index: 2;
        position: absolute;
        display: block;
        width: 100%;
        background-color: #ff5757;
        height: 0px;
        transition: all 0.3s ease-in;
        overflow-y: hidden;
        top: 50px;
        left: 0px;
        text-align: center;  
    }
    .nav > .nav-links > a {
        display: block;
        width: 100%;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
        height: 0px;
    }
    .nav > #nav-check:checked ~ .nav-links {
        padding: 4rem 0;
        height: calc(100vh - 50px);
        overflow-y: auto;
    }
}
`;

document.head.appendChild(style);

// Navbar template - script
var sc = document.createElement("script");
sc.setAttribute("src", "https://kit.fontawesome.com/c331e0ecf1.js");
sc.setAttribute("type", "text/javascript");
sc.setAttribute("crossorigin", "anonymous");
document.head.appendChild(sc);
