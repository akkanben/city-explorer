import {Component} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";

class Movies extends Component {

  render() {
    return (
      <>
        <h2>Related Movies</h2>
        <Container fluid id='movieContainer'>
          <Row>
            {
              this.props.movies.map((movie, index) => {
                return (
                  <Col key={index}>
                    <Card style={{width: '20rem'}}>
                      <Card.Img variant="top" src={movie.posterPath} />
                      <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>{movie.overview}</Card.Text>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem>Release: {movie.releaseDate}</ListGroupItem>
                          <ListGroupItem>Popularity: {movie.popularity}</ListGroupItem>
                          <ListGroupItem>Average Score: {movie.voteAverage}</ListGroupItem>
                          <ListGroupItem>Total Reviews: {movie.voteCount}</ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </>
    )
  };
}

export default Movies;

