let weather = {
    apikey: "6faadd1ba633a977a39ab51e3d086152",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            +city
            + "&units=metric&appid="
            + this.apikey
            )
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
    },
      displayWeather: function(data){
           const {name} =data;
           const {icon,description} =data.weather[0];
           const {temp, humidity} =data.main;
           const {speed} = data.wind;
           console.log(name,icon,description,temp,humidity,speed)
           document.querySelector(".city").innerText ="Weather in " + name;
           document.querySelector(".icon").src =
           "https://openweathermap.org/img/wn/" + icon + ".png"
           document.querySelector(".description").innerText = description;
           document.querySelector(".temp").innerText = temp + "°C";
           document.querySelector(".humidity").innerText =" Humidity: " + humidity + "%";
           document.querySelector(".wind").innerText =" Wind speed " + speed + " km/h";
      }
};

document.querySelector(".search button").addEventListener("click",)