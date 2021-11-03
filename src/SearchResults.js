import {Component} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Weather from './Weather';

class SearchResults extends Component {
  render() {
    return (
      <>
        {
          this.props.cityData.display_name && this.props.weather &&
          <Container>
            <Row>
              <Col>
                <Card style={{maxWidth: '40rem'}}>
                  <Card.Img variant="top" src={this.props.cityData.mapUrl} />
                  <Card.Body>
                    <Card.Title>{this.props.cityData.display_name}</Card.Title >
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Latitude: {this.props.cityData.lat}</ListGroupItem>
                      <ListGroupItem>Logitude: {this.props.cityData.lon}</ListGroupItem>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Weather weather={this.props.weather} />
              </Col>
            </Row>
          </Container>
        }
      </>
    )
  }
}

export default SearchResults
