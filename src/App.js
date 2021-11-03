import {Component} from 'react';
import './App.css';
import Main from './Main';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      cityData: {},
    };
  }

  updateSearchValue = (value) => this.setState({searchValue: value});

  getWeatherData = async (cityData) => {
    const cityFormated = {
      name: cityData.display_name.split(',')[0].toLowerCase(),
      lat: cityData.lat.slice(0, cityData.lat.indexOf('.') + 2),
      lon: cityData.lon.slice(0, cityData.lon.indexOf('.') + 2),
    }
    const weatherUrl = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${cityFormated.lat}&lon=${cityFormated.lon}&city_name=${cityFormated.name}`;
    try {
      let weatherResponse = await axios.get(weatherUrl);
      this.setState({weather: weatherResponse.data});
    } catch (event) {
      this.setState({error: event})
    }
  }

  handleSubmit = async () => {
    this.setState({error: ''});
    const cityUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchValue}&format=json`;
    try {
      let cityResponse = await axios.get(cityUrl);
      cityResponse.data[0].mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${cityResponse.data[0].lat},${cityResponse.data[0].lon}&zoom=12`;
      this.getWeatherData(cityResponse.data[0]);
      this.setState({cityData: cityResponse.data[0]});
    } catch (event) {
      console.log(event);
      console.log(event.response)
      this.setState({error: event});
    }
  }

  render() {
    return (
      <>
        <Main
          searchValue={this.state.searchValue}
          updateSearchValue={this.updateSearchValue}
          handleSubmit={this.handleSubmit}
          cityData={this.state.cityData}
          weather={this.state.weather}
          error={this.state.error}
        />
      </>
    )
  }
}

export default App;

