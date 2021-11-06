import {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import WeatherDay from './WeatherDay';

class Weather extends Component {

  render() {
    return (
      <>
        <h2>5-Day Forecast</h2>
        {this.props.weather[0] && <p className="timestamp" style={{fontSize: "8px"}}> {new Date(this.props.weather[0].timestamp).toString()}</p>}
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

