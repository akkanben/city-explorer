import {Component} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Col from 'react-bootstrap/Col';
import yelpLogo from './images/yelp_logo.png';

class Restaurant extends Component {

  render() {
    return (
      <>
        <Col>
          <Card style={{maxWidth: '35rem', minWidth: '20rem'}}>
            <Card.Img variant="top" src={this.props.restaurant.image} />
            <Card.Body>
              <Card.Title>{this.props.restaurant.name}</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Price: {this.props.restaurant.price}</ListGroupItem>
                <ListGroupItem>Rating: {this.props.restaurant.rating}</ListGroupItem>
                <ListGroupItem><a href={this.props.restaurant.url}><img id="yelp" alt="yelp logo" src={yelpLogo} /> </a></ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  };
}

export default Restaurant;

