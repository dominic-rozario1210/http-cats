# HTTP Cats

A responsive web application that displays cat images based on HTTP status codes. The project is built using HTML, CSS, and JavaScript and uses the HTTP Cats image service.

## 🚀 Features

* Search for HTTP status codes
* Display a cat image based on the entered status code
* Default HTTP 200 cat image
* Handles empty input
* Handles invalid status codes
* Uses asynchronous JavaScript
* Error handling with `try...catch`
* Responsive design for desktop and mobile devices
* No frameworks or external JavaScript libraries

## 🔗 API Used

**HTTP Cats**

Base URL:

`https://http.cat/`

Examples:

* `https://http.cat/200`
* `https://http.cat/404`
* `https://http.cat/500`

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Async/Await
* HTTP Cats

## 📂 Project Structure

```text
http-cats/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

1. Enter an HTTP status code in the input field.
2. Click the **Search** button.
3. JavaScript creates the corresponding HTTP Cats URL.
4. The image URL is checked asynchronously.
5. The corresponding cat image is displayed on the webpage.
6. An error message is displayed if the status code is invalid.

## 📱 Responsive Design

The application is responsive and works across desktop, tablet, and mobile screen sizes.

