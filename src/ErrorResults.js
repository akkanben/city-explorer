import {Component} from 'react';
import Alert from 'react-bootstrap/Alert'

class ErrorResults extends Component {

  render() {
    return (
      <Alert variant="danger" >
        <Alert.Heading>{this.props.error.toString()}</Alert.Heading>
        <p>Please try again.</p>
      </Alert>
    )
  };
}

export default ErrorResults
