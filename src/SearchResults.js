import {Component} from "react";
import Col from 'react-bootstrap/Col';
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Weather from './Weather';
import Movies from './Movies';
import Location from './Location';

class SearchResults extends Component {
  render() {
    return (
      <>
        {
          this.props.cityData.display_name && this.props.weather && this.props.movies &&
          <>
            <Location cityData={this.props.cityData} />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col>
                <Nav variant="pills" className="flex-row">
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
