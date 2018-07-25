import React from "react";
import {Carousel} from "react-responsive-carousel"
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.css'

export default class Banner extends React.Component {
 render() {
  return(
    <Carousel showArrows={false} autoPlay infiniteLoop showThumbs={false} showStatus={false}>
    <div>
      <img src={"https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23ff577c1374ba87e8361b6ceee0cac3&auto=format&fit=crop&w=1867&q=80"} />
      <p className="legend">This is the Legend 1</p>
    </div>
    <div>
      <img src={"https://images.unsplash.com/photo-1423666523292-b458da343f6a?ixlib=rb-0.3.5&s=50595a756bc8e923dc3a23b8f9115141&auto=format&fit=crop&w=1953&q=80"} />
      <p className="legend">This is the Legend 2</p>
    </div>
    <div>
      <img src={"https://images.unsplash.com/photo-1468254095679-bbcba94a7066?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a14706a39d7fc5e122b317d3fba4bd52&auto=format&fit=crop&w=1949&q=80"} />
      <p className="legend">This is the Legend 3</p>
    </div>
    </Carousel>
    )
  }
  }