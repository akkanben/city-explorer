import {Component} from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Movie from './Movie';

class Movies extends Component {

  render() {
    return (
      <>
        <h2>Related Movies</h2>
        <Container fluid id='movieContainer'>
          <Row>
            {
              this.props.movies.map((movie, index) => {
                return <Movie key={index} movie={movie} />
              })
            }
          </Row>
        </Container>
      </>
    )
  };
}

export default Movies;

