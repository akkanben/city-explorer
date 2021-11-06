import {Component} from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class WeatherDay extends Component {

  render() {
    return (
      <Col>
        <Card style={{maxWidth: '12rem'}}>
          <Card.Body>
            <Card.Img variant="left" src={this.props.weather.icon} />
            <Card.Title>{this.props.weather.date}</Card.Title >
            <Card.Text>{this.props.weather.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col >
    )
  }
}

export default WeatherDay

