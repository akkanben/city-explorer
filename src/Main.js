import {Component} from "react";
import SearchResults from './SearchResults';
import ErrorResults from './ErrorResults';

class Main extends Component {
  render() {
    return (
      <>
        {this.props.error ? <ErrorResults error={this.props.error} />
          : <SearchResults
            results={this.props.results}
            cityData={this.props.cityData}
            weather={this.props.weather}
            movies={this.props.movies}
          />
        }
      </>
    )
  }
}

export default Main
