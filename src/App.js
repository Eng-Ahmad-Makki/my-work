import { Component } from "react";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const apiKey = "f2724348e12ed6798d8aaea1883d2e74";
class App extends Component {
  state = {
    temp: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };
  GetWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${apiKey}`
    );
    const data = await api.json();
    if (city && country) {
      this.setState({
        temp: (data.main.temp - 273).toFixed(2),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temp: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "please Enter data",
      });
    }
  };
  again = (e) => {
    e.preventDefault();
    this.setState({
      temp: "",
      city: "",
      country: "",
      humidity: "",
      description: "",
      error: "",
    });
  };
  render() {
    return (
      <div className="App">
        <div className="form_container">
          <h1>Weather App</h1>
          <Form
            GetWeather={this.GetWeather}
            again={this.again}
            currentCity={this.state.city}
          />
          <Weather
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
