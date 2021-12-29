// const express = require("express");
// const https = require("https");

// const app = express();

// app.get("/api", (req, res) => {
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=London&appid=bf813a06a860edb0229f4ad60a685866&units=metric";
//   https.get(url, function (response) {
//     console.log(response.statusCode);
//     response.on("data", (data) => {
//       // console.log(data);
//       const weatherData = JSON.parse(data);
//       // console.log(weatherData);
//       // const object = {
//       //   name: "Sujan ",
//       //   favouriteGame: "Football",
//       // };
//       // console.log(JSON.stringify(object));
//       const temp = weatherData.main.temp;
//       console.log(temp);
//       const weatherDescription = weatherData.weather[0].description;
//       console.log(weatherDescription);

//       const icon = weatherData.weather[0].icon;
//       const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
//       console.log(icon);
//       // res.send(
//       //   `<h1>The temperature in London is " + temp + " degree Celcius</h1><br><h1>The weather is currently ${weatherDescription}</h1>`
//       // );
//       res.write("<p>The weather is currently " + weatherDescription + "</p>");
//       res.write(
//         "<h1>The temperature in London is " + temp + " degrees Celcius.</h1>"
//       );
//       res.write("<img src=" + imageUrl + ">");
//       res.send();
//     });
//   });
//   // res.send("Server is up and running");
// });

// app.listen(3000, function () {
//   console.log("Server is running on port 3000.");
// });

// const express = require("express");
// const res = require("express/lib/response");
// const https = require("https");

// const app = express();

// app.get("/api", (req, res) => {
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=bf813a06a860edb0229f4ad60a685866&units=metric";
//   https.get(url, (response) => {
//     console.log(response.statusCode);
//     response.on("data", (d) => {
//       console.log(d);
//       const weatherData = JSON.parse(d);
//       console.log(weatherData);
//       const temp = weatherData.main.temp;
//       console.log(temp);
//       const weatherDescription = weatherData.weather[0].description;
//       console.log(weatherDescription);
//       const icon = weatherData.weather[0].icon;
//       console.log(icon);
//       const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

//       res.write(
//         `<p>The weather condition in Kathmadu is ${weatherDescription}`
//       );
//       res.write(
//         `<h1>The temperature of Kathmandu is ${temp} degree celsius</h1>`
//       );
//       res.write("<img src=" + imageUrl + ">");
//       res.send();
//     });
//   });
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is connected at port ${port}`);
// });

const express = require("express");
const res = require("express/lib/response");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const apiKey = "bf813a06a860edb0229f4ad60a685866";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit +
    "";
  // console.log("Post received");
  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on("data", (d) => {
      console.log(d);
      const weatherData = JSON.parse(d);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      const weatherDescription = weatherData.weather[0].description;
      console.log(weatherDescription);
      const icon = weatherData.weather[0].icon;
      console.log(icon);
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write(
        `<p>The weather condition in ${query} is ${weatherDescription}`
      );
      res.write(
        `<h1>The temperature of ${query} is ${temp} degree celsius</h1>`
      );
      res.write("<img src=" + imageUrl + ">");
      res.send();
    });
  });
});

// const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=bf813a06a860edb0229f4ad60a685866&units=metric";
//   https.get(url, (response) => {
//     console.log(response.statusCode);
//     response.on("data", (d) => {
//       console.log(d);
//       const weatherData = JSON.parse(d);
//       console.log(weatherData);
//       const temp = weatherData.main.temp;
//       console.log(temp);
//       const weatherDescription = weatherData.weather[0].description;
//       console.log(weatherDescription);
//       const icon = weatherData.weather[0].icon;
//       console.log(icon);
//       const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

//       res.write(
//         `<p>The weather condition in Kathmadu is ${weatherDescription}`
//       );
//       res.write(
//         `<h1>The temperature of Kathmandu is ${temp} degree celsius</h1>`
//       );
//       res.write("<img src=" + imageUrl + ">");
//       res.send();
//     });
//   });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is connected at port ${port}`);
});
