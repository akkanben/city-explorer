import {Component} from "react";
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

class Main extends Component {
  render() {
    return (
      <>
        <h1>Search</h1>
        <SearchForm searchValue={this.props.searchValue} updateSearchValue={this.props.updateSearchValue} handleSubmit={this.props.handleSubmit} />
        <SearchResults results={this.props.results} />
      </>
    )
  }
}

export default Main
