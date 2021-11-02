import {Component} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchForm extends Component {

  handleChange = (event) => {
    console.log(event.target.value)
    this.props.updateSearchValue(event.target.value);
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.handleSubmit();
  };

  render() {
    return (
      <>
        <Form>
          <Row>
            <Col>
              <Form.Control type='text' placeholder="Enter City Name" value={this.props.searchValue} onChange={this.handleChange} />
            </Col>
            <Col>
              <Button variant="dark" type="submit" onClick={this.handleClick}>Explore!</Button>
            </Col>
          </Row>
        </Form>

      </>
    )
  };
}

export default SearchForm
