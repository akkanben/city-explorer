import {Component} from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Container from 'react-bootstrap/Container'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      cityData: {},
      weather: [],
      restaurants: [],
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

  getYelpData = async (cityData) => {
    const cityNameFormatted = cityData.display_name.split(',')[0].toLowerCase()
    const yelpUrl = `${process.env.REACT_APP_SERVER_URL}/yelp?city=${cityNameFormatted}`;
    try {
      const yelpResponse = await axios.get(yelpUrl);
      this.setState({restaurants: yelpResponse.data})
    } catch (event) {
      this.setState({error: event})
    }
  }

  getMedia = (data) => {
    this.getWeatherData(data);
    this.getYelpData(data);
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
      this.setState({error: event});
    }
  }

  render() {
    return (
      <Container id="body-container" style={{display: "flex", flexDirection: "column", alignItems: "stretch", height: "100vh"}} fluid>
        <Header
          updateSearchValue={this.updateSearchValue}
          searchValue={this.state.searchValue}
          handleSubmit={this.handleSubmit}
        />
        <Main
          cityData={this.state.cityData}
          weather={this.state.weather}
          movies={this.state.movies}
          restaurants={this.state.restaurants}
          error={this.state.error}
          style={{flexGrow: "1"}}
        />
        <Footer />
      </Container>
    )
  }
}

export default App;
