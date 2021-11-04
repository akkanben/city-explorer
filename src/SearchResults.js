import {Component} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Weather from './Weather';
import Movies from './Movies';

class SearchResults extends Component {
  render() {
    return (
      <>
        {
          this.props.cityData.display_name && this.props.weather && this.props.movies &&
          <>
            < Container >
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
              </Row>
            </Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Local Weather</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Related Movies</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col >
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Weather weather={this.props.weather} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Movies movies={this.props.movies} />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>
          </>
        }
      </>
    )
  }
}

export default SearchResults
