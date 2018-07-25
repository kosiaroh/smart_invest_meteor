import React from "react";
import {Carousel} from "react-responsive-carousel"
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.css'

import image1 from "./images/image1.JPG"

export default class Banner extends React.Component {
 render() {
  return(
    <Carousel showArrows={true}>
    <div>
      <img src={image1} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={"./images/IMG_20171019_121531[7326].jpg"} />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src={"./images/me and my suit2.png"} />
      <p className="legend">Legend 3</p>
    </div>
    </Carousel>
    )
  }
  }