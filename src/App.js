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
      weather: [],
      movies: [],
    };
  }

  updateSearchValue = (value) => this.setState({searchValue: value});

  getWeatherData = async (cityData) => {
    const weatherUrl = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${cityData.lat}&lon=${cityData.lon}`;
    try {
      const weatherResponse = await axios.get(weatherUrl);
      this.setState({weather: weatherResponse.data});
    } catch (event) {
      this.setState({error: event})
    }
  }

  getMovieData = async (cityData) => {
    const cityNameFormatted = cityData.display_name.split(',')[0].toLowerCase()
    const movieUrl = `${process.env.REACT_APP_SERVER_URL}/movies?city=${cityNameFormatted}`;
    try {
      const movieResponse = await axios.get(movieUrl);
      this.setState({movies: movieResponse.data})
    } catch (event) {
      this.setState({error: event})
    }

  }

  getMedia = (data) => {
    this.getWeatherData(data);
    this.getMovieData(data);
  }

  handleSubmit = async () => {
    this.setState({error: ''});
    const cityUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchValue}&format=json`;
    try {
      const cityResponse = await axios.get(cityUrl);
      cityResponse.data[0].mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${cityResponse.data[0].lat},${cityResponse.data[0].lon}&zoom=12`;
      this.setState({cityData: cityResponse.data[0]}, () => this.getMedia(cityResponse.data[0]));
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
          movies={this.state.movies}
          error={this.state.error}
        />
      </>
    )
  }
}

export default App;
