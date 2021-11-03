import {Component} from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

class Weather extends Component {

  render() {
    return (
      <Container>
        <h2>3-Day Weather</h2>
        {
          this.props.weather.map((element, index) => {
            return (
              <Col key={index}>
                <Card style={{maxWidth: '20rem'}}>
                  <Card.Body>
                    <Card.Title>{element.date}</Card.Title >
                    <Card.Text>{element.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Container>
    )
  }
}

export default Weather

