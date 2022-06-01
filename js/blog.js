let url = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts?_embed";
const output = document.querySelector(".thumbnail");

function fetchData () {
    fetch(url)
    .then(response => response.json())
    .then(posts => {
        listData(posts);
        console.log(posts)
    })
    .catch(error => console.error("Error: " + error))
    .finally(document.getElementById("loading").style.display = "none");
}

fetchData()

function listData(posts) {

    for (let i = 0; i < posts.length; i++) {

        let date = new Date(posts[i].date);
        let localDate = date.toLocaleString("default", {day: "numeric", month: "short", year: "numeric"});
        // console.log(localDate);

        let featuredImage = posts[i]._embedded['wp:featuredmedia']['0'];
        const featuredImageMedium = featuredImage.media_details.sizes.large;

        output.innerHTML += `
        <div class="blog__card">
            <a href="./blogpost.html?id=${posts[i].id}">
                <img src="${featuredImageMedium.source_url}" alt="${featuredImageMedium.alt_text}" class="image-style">
                <p>${localDate}</p>
                <h2>${posts[i].title.rendered ? posts[i].title.rendered : "'Title not found'"}</h2>
            </a>
        </div>` 

    }

    if (posts.length < 10) {
        loadMoreBtn.style.display = "none";
    }
}

let loadMoreBtn = document.querySelector(".load-more__btn");

pageNumber = 1;

loadMoreBtn.addEventListener("click", () => {
    pageNumber++;
    url = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts?page=" + pageNumber + "&_embed";
    fetchData()
})