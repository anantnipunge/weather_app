import React, { useState } from "react";
import "./Weather.css";
import DisplayWeather from "./DisplayWeather";

export default function Weather() {
  const APIKEY = "e01e69fe19e178e02d27a01bee23202c";

  const [form, setform] = useState({
    city: "",
    country: "",
  });

  const [weather, setweather] = useState([]);

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add Values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setweather({
        data: data,
      });
    }
  }
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setform({ ...form, city: value });
    }
    if (name === "country") {
      setform({ ...form, country: value });
    }
  };
  return (
    <div className="weather">
      <span className="title">Todays Forecast </span>
      <br />

      <form>
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <input
          type="text"
          name="country"
          placeholder="Enter Country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Search
        </button>
      </form>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}
