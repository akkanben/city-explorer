import {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import WeatherDay from './WeatherDay';

class Weather extends Component {

  render() {
    return (
      <>
        <h2>7-Day Forecast</h2>
        <Container>
          <Row>
            {
              this.props.weather.map((element, index) => {
                return <WeatherDay key={index} weather={element} />
              })
            }
          </Row>
        </Container>
      </>
    )
  }
}

export default Weather

