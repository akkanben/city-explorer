import {Component} from "react";
import Carousel from 'react-bootstrap/Carousel'
import castle from './images/castle.jpg'
import street from './images/street.jpg'
import stop from './images/stop.jpg'
import chicago from './images/chicago.jpg'

class SlideShow extends Component {
  render() {
    return (
      <>
        <Carousel fade slide indicators={false} controls={false} >

          <Carousel.Item>
            <img
              className="w-100"
              src={castle}
              alt="Okayama, Japan"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={street}
              alt="Seattle Street At Night"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={stop}
              alt="Seattle Street At Night"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={chicago}
              alt="Seattle Street At Night"
            />
          </Carousel.Item>
        </Carousel>
      </>
    )
  }
}

export default SlideShow
