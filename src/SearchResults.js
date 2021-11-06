import {Component} from "react";
import Col from 'react-bootstrap/Col';
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Weather from './Weather';
import Movies from './Movies';
import Yelp from './Yelp';
import Location from './Location';
import SlideShow from './SlideShow';

class SearchResults extends Component {
  render() {
    return (
      <>
        {
          this.props.cityData.display_name && this.props.weather && this.props.movies && this.props.restaurants ?
            <>
              <Location cityData={this.props.cityData} />
              <Tab.Container defaultActiveKey="first">
                <Col>
                  <Nav variant="pills" className="flex-row">
                    <Nav.Item>
                      <Nav.Link className="pointer" eventKey="first">Local Weather</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="pointer" eventKey="second">Related Movies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="pointer" eventKey="third">Local Restaurants</Nav.Link>
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
                    <Tab.Pane eventKey="third">
                      <Yelp restaurants={this.props.restaurants} />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Tab.Container>
            </>
            : <SlideShow />
        }
      </>
    )
  }
}

export default SearchResults
