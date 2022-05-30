const searchValue = document.getElementById("searchTerm");
const submitButton = document.getElementById("submit");
const deleteButton = document.getElementById("delete");
const gifZone = document.getElementById("gifZone")

submitButton.addEventListener("click", async function(){
    event.preventDefault();
    const term = document.getElementById("searchTerm").value;
    const retrievedGifs = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            q: term,
            api_key: "g3zqNeFJvRvo9VCP8YILyUN8RKB2Ieyi"
        }
    });
    addGif(retrievedGifs);
    document.getElementById("searchTerm").value = "";
});

deleteButton.addEventListener("click", function(){
    event.preventDefault();
    while (gifZone.firstChild){
        gifZone.removeChild(gifZone.firstChild);
    }
});

function addGif(results){
    let newImg = document.createElement("img")
    newImg.setAttribute("src", results.data.data[Math.floor(Math.random() * results.data.data.length)].images.original.url) 
    gifZone.append(newImg);
};

