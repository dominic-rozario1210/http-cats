const apiUrl = "https://http.cat/";

const input = document.getElementById("statusInput");
const button = document.getElementById("statusBtn");
const catImage = document.getElementById("catImage");
const message = document.getElementById("message");


async function fetchCat() {

    const statusCode = input.value.trim();

    if (!statusCode) {
        message.textContent = "Please enter a status code.";
        return;
    }

    try {

        message.textContent = "Loading...";

        const imageUrl = `${apiUrl}${statusCode}`;

        await checkImage(imageUrl);

        displayCat(imageUrl, statusCode);

        message.textContent = "";

    } catch (error) {

        console.error("Error:", error);

        message.textContent = "Invalid status code. Try 200, 404, 500, etc.";

    }
}


function checkImage(imageUrl) {

    return new Promise((resolve, reject) => {

        const testImage = new Image();

        testImage.onload = () => {
            resolve();
        };

        testImage.onerror = () => {
            reject(new Error("Image not found"));
        };

        testImage.src = imageUrl;
    });
}


function displayCat(imageUrl, statusCode) {

    catImage.src = imageUrl;

    catImage.alt = `HTTP ${statusCode} status cat`;
}


button.addEventListener("click", fetchCat);