// Footer template - html
const template = document.createElement('template');

template.innerHTML = `
<footer>
    <div class="footerContent">
        <div>
            <img src="./images/logo_dark.png" alt="logo" width="150px">
            <p>Vincent Van-Dog, the most talented artist in the universe! Enjoy the protfolio and thank you for liking me. Woof Woof!</p>
        </div>
        <div>
            <h4>SOCIALS</h4>
            <div class="quickLinks">
                <p><a href="./home.html"><i class="fa-brands fa-facebook-square"></i> &nbsp;FaceBook</a></p>
                <p><a href="./home.html"><i class="fa-brands fa-instagram-square"></i> &nbsp;Instagram</a></p>  
                <p><a href="./home.html"><i class="fa-brands fa-twitter-square"></i> &nbsp;Twitter</a></p>
                <p><a href="./home.html"><i class="fa-brands fa-linkedin"></i> &nbsp;LinkedIn</a></p>  
            </div>
        </div>
        <div>
            <h4>QUICK LINKS</h4>
            <div class="quickLinks">
                <p><a href="./home.html">HOME</a></p>
                <p><a href="./about_me.html">ABOUT</a></p>
                <p><a href="./events.html">EVENTS</a></p>
                <p><a href="./artist_test.html">ARTIST TEST</a></p>
                <p><a href="./contact_us.html">CONTANCT US</a></p>
            </div>
        </div>
        <div>
            <h4>ADDRESS</h4>
            <p>1730 dexter st, Etobicoke</p>
            <p>M2F C49, ONTARIO</p>
            <P><em>ph: 938 837 124</em></P>
            <br>
            <p>636 kitkat st, Mississauga</p>
            <p>M7H 2G5, ONTARIO</p>
            <P><em>ph: 998 837 124</em></P>
            <br>
            <p>And your heart &#129293;</p>
        </div>
    </div>
    <hr>
    <div class="copyRight">
        <p><em>&copy; 2022 Vincent-Van-Dog. All rights reserved.</em></p>
    </div>
</footer>
`;

document.body.appendChild(template.content);

// Footer template - css
const style = document.createElement('style');

style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Montserrat;
}

footer {
    background-color: #ff5757;
}
footer img {
    margin-bottom: 1rem;
}
.footerContent h4 {
    margin-bottom: 1.5rem;
}
.footerContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 85%;
    text-align: left;
}
.footerContent > div {
    color: #eee;
    margin: 2rem 1rem;
    width: 20%;
}
.footerContent a {
    text-decoration: none;
    color: #ffecec;
}
.quickLinks {
    height: 20vh;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
}
.footerContent p {
    font-size: 1rem;
    color: #ffecec;
}
footer hr {
    border: none;
    height: .3px;
    margin: 0 2rem;
    background-color: #ffecec;
}
.copyRight {
    text-align: center;
    color: #ffecec;
    font-size: 0.9rem;
    padding: 0.8rem;
}
i {
    font-size: 2rem;
}

@media only screen and (max-width: 1024px) { 
}

@media only screen and (max-width: 786px) { 
    main .content {
        margin:2rem;
    }
    p {
        font-size: 1.3rem;
    }
    main table {
        margin: 2rem ;
        font-size: 1.5rem;
    }
    main th, main td {
        padding: 1rem 0.5rem;
    }
    h4 {
        font-size:1rem;
    }
    .footerContent > div {
        width:30%;
    }
    .footerContent > div:first-of-type {
        width: 90%;
    }
    .footerContent > div:last-of-type {
        width: 90%;
    }
    .content2 > div {
        margin: 2rem 0 ;
        font-size: 1.3rem;
    }
    main table {
        margin: 2rem 0;
    }
}

@media only screen and (max-width: 576px) {
    * {
        font-size: 12px;
    }
}
`;

document.head.appendChild(style);

// Footer template - script
var sc = document.createElement("script");
sc.setAttribute("src", "https://kit.fontawesome.com/c331e0ecf1.js");
sc.setAttribute("type", "text/javascript");
sc.setAttribute("crossorigin", "anonymous");
document.head.appendChild(sc);
