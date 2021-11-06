import {Component} from "react";
import SearchResults from './SearchResults';
import ErrorResults from './ErrorResults';

class Main extends Component {
  render() {
    return (
      <>
        {this.props.error ? <ErrorResults error={this.props.error} />
          : <SearchResults
            cityData={this.props.cityData}
            weather={this.props.weather}
            movies={this.props.movies}
            restaurants={this.props.restaurants}
          />
        }
      </>
    )
  }
}

export default Main
