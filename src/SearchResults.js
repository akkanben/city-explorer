import {Component} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchResults extends Component {
  render() {
    let re = /^[^,]+/;
    return (
      <>{this.props.cityData.display_name &&
        <Row>
        <Col>
          <Card style={{width: '40rem'}}>
            <Card.Body>
              <Card.Title>{this.props.cityData.display_name.replace(re, '$&')}</Card.Title >
              <ListGroup className="list-group-flush">
                <ListGroupItem>Latitude: {this.props.cityData.lat}</ListGroupItem>
                <ListGroupItem>Logitude: {this.props.cityData.lon}</ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        </Row>
      }
      </>
    )
  }
}

export default SearchResults
