import {Component} from "react";
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

class Main extends Component {
  render() {
    return (
      <>
        <SearchForm
          searchValue={this.props.searchValue}
          updateSearchValue={this.props.updateSearchValue}
          handleSubmit={this.props.handleSubmit} />
        <SearchResults
          results={this.props.results}
          cityData={this.props.cityData} />
      </>
    )
  }
}

export default Main
