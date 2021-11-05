import {Component} from "react";
import SearchForm from './SearchForm';

class Header extends Component {
  render() {
    return (
      <>
        <SearchForm
          searchValue={this.props.searchValue}
          updateSearchValue={this.props.updateSearchValue}
          handleSubmit={this.props.handleSubmit} />
      </>
    )
  }
}

export default Header
