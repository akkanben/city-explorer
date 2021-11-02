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
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchValue}&format=json`

    let response = await axios.get(url);
    this.setState({cityData: response.data[0]});
  }



  render() {
    return (
      <>
        <Main
          searchValue={this.state.searchValue}
          updateSearchValue={this.updateSearchValue}
          handleSubmit={this.handleSubmit}
          cityData={this.state.cityData} />
      </>
    )
  }
}

export default App;
