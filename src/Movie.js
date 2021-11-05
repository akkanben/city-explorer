import {Component} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Col from 'react-bootstrap/Col';

class Movie extends Component {

  render() {
    return (
      <>
        <Col>
          <Card style={{width: '20rem'}}>
            <Card.Img variant="top" src={this.props.movie.posterPath} />
            <Card.Body>
              <Card.Title>{this.props.movie.title}</Card.Title>
              <Card.Text>{this.props.movie.overview}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Release: {this.props.movie.releaseDate}</ListGroupItem>
                <ListGroupItem>Popularity: {this.props.movie.popularity}</ListGroupItem>
                <ListGroupItem>Average Score: {this.props.movie.voteAverage}</ListGroupItem>
                <ListGroupItem>Total Reviews: {this.props.movie.voteCount}</ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  };
}

export default Movie;

