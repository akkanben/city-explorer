import {Component} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class SearchForm extends Component {

  handleChange = (event) => {
    this.props.updateSearchValue(event.target.value);
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.handleSubmit();
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand >City Explorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{maxHeight: '100px'}}
              navbarScroll
            />
            <Form className="d-flex">
              <Form.Control type='text' className="me-2" placeholder="Enter City Name" value={this.props.searchValue} onChange={this.handleChange} />
              <Button id="explor" variant="dark" type="submit" onClick={this.handleClick}>Explore!</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  };
}

export default SearchForm
