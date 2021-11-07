import {Component} from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Movie from './Movie';

class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <>
        <h2>Related Movies</h2>
        {this.props.movies.length > 0 ?
          <>
            <p className="timestamp" style={{fontSize: "8px"}}> {new Date(this.props.movies[0].timestamp).toString()}</p>
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
          : <p>No Results</p>}
      </>
    )
  };
}

export default Movies;

