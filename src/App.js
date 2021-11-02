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

  handleSubmit = async () => {
    this.setState({error: ''});
    const cityUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchValue}&format=json`;
    try {
      let cityResponse = await axios.get(cityUrl);
      cityResponse.data[0].mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${cityResponse.data[0].lat},${cityResponse.data[0].lon}&zoom=12`;
      this.setState({cityData: cityResponse.data[0]});
    } catch (e) {
      this.setState({error: e});
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
          error={this.state.error}
        />
      </>
    )
  }
}

export default App;

