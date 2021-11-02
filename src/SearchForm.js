import {Component} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

class SearchForm extends Component {

  handleChange = (event) => {
    this.props.updateSearchValue(event.target.value);
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.handleSubmit();
    console.log(this.props.cityData)
  };

  render() {
    return (
      <>
        <Container>
          <Form id="searchForm">
            <Row>
              <Col>
                <Form.Control type='text' placeholder="Enter City Name" value={this.props.searchValue} onChange={this.handleChange} />
              </Col>
              <Col>
                <Button variant="dark" type="submit" onClick={this.handleClick}>Explore!</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    )
  };
}

export default SearchForm
