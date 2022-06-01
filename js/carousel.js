const url = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts?per_page=6&_embed";
const output = document.querySelector(".thumbnail");

fetch(url)
 .then(response => response.json())
 .then(posts => {
     listData(posts);
     console.log(posts)
     enableCarousel();
 })
 .catch(error => console.error("Error: " + error))
 .finally(document.getElementById("loading").style.display = "none");


function listData(posts) {
    output.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
    
        let date = new Date(posts[i].date);
        let localDate = date.toLocaleString("default", {day: "numeric", month: "short", year: "numeric"});
        // console.log(localDate);

        const featuredImage = posts[i]._embedded['wp:featuredmedia']['0'];
        const featuredImageMedium = featuredImage.media_details.sizes.medium;

        console.log(featuredImageMedium);

        output.innerHTML += `
        <div class="carousel__card">
            <a href="./blogpost.html?id=${posts[i].id}">
                <img src="${featuredImageMedium.source_url}" alt="${featuredImageMedium.alt_text}" class="image-style">
                <p>${localDate}</p>
                <h2>${posts[i].title.rendered}</h2>
            </a>
        </div>` 
    }
}

const mediaQuery = window.matchMedia("(min-width: 700px)");

let enableCarousel = () => {
    let rightBtn = document.querySelector(".carousel-button__right");
    let leftBtn = document.querySelector(".carousel-button__left");
    let cards = document.querySelectorAll(".carousel__card");
    let nextCardIndex = 1;

    function changeCard(i) {
        carousel(nextCardIndex += i);
        // console.log(nextCardIndex);
    }

    rightBtn.addEventListener("click", () => changeCard(1))
    leftBtn.addEventListener("click", () => changeCard(-1))
    
    carousel(nextCardIndex);

    function carousel() {
        let maxCards = 5;

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "none";
        }

        cards[nextCardIndex].style.display = "block";
        cards[nextCardIndex - 1].style.display = "block";

        if (mediaQuery.matches) {
            cards[nextCardIndex + 1].style.display = "block";
            maxCards = 4;
        } 
        

        if (nextCardIndex === maxCards) {
            rightBtn.style.display = "none";
        } else if (nextCardIndex === 1) {
            leftBtn.style.display = "none";
        } else {
            rightBtn.style.display = "block";
            leftBtn.style.display = "block";
        }
    }
}


mediaQuery.addEventListener("change", enableCarousel);