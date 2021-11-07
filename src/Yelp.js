import {Component} from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Restaurant from './Restaurant';

class Yelp extends Component {

  render() {
    return (
      <>
        <h2>Local Restaurants</h2>
        {this.props.restaurants.length > 0 ?
          <>
            <p className="timestamp" style={{fontSize: "8px"}}> {new Date(this.props.restaurants[0].timestamp).toString()}</p>
            <Container fluid id='restaurant-container'>
              <Row>
                {
                  this.props.restaurants.map((restaurant, index) => {
                    return <Restaurant key={index} restaurant={restaurant} />
                  })
                }
              </Row>
            </Container>
          </>
          : <p>No Results</p>}
      </>
    )
  };
}

export default Yelp;

