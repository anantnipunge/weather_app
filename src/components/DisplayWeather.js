import React from "react";
import "./DisplayWeather.css";

function DisplayWeather(props) {
  const { data } = props;
  let compassSector = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ];
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";

  return (
      
    <div className="displayweather">
        
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name}, {data.sys.country}.weather
            </span>
            <span className="cardsubtitle">
              Time: {new Date().toLocaleTimeString()}
            </span>
            <h1>
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </h1>
            <span className="weather-main">{data.weather[0].main}</span>
            <img src={iconurl} className="weather-icon" alt="" />
            <span className="weather-description">
              {data.weather[0].description}
            </span>
          </div>

          <div className="weatherdetails">
            <div className="sectional">
              <table>
                <tr>
                  <td>
                    <h4>Hight/Low</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)} /{" "}
                      {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup>C
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Humidity</h4>
                  </td>
                  <td>
                    <span>{data.main.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Pressure</h4>
                  </td>
                  <td>
                    <span>{data.main.pressure} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Visibility</h4>
                  </td>
                  <td>
                    <span>{Math.floor(data.visibility / 1000)} Km</span>
                  </td>
                </tr>
              </table>
            </div>
            <div className="sectional">
              <table>
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} Km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Wind Direct</h4>
                  </td>
                  <td>
                    <span>
                      {compassSector[(data.wind.deg / 22.5).toFixed(0)]}{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunrise</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunset</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
