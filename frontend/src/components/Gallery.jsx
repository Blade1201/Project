import React from 'react';
import GalleryItem from "./GalleryItem";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Detail_1 from "../images/details/detail-1.jpg";
import Detail_2 from "../images/details/detail-2.jpg";
import Detail_3 from "../images/details/detail-3.jpg";
import Detail_4 from "../images/details/detail-4.png";
import Detail_5 from "../images/details/detail-5.png";
import Detail_6 from "../images/details/detail-6.png";
import Detail_7 from "../images/details/detail-7.png";

const Galery = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1800 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1800, min: 1200 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1200, min: 900 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 900, min: 0 },
          items: 1
        }
      };
      
      
    return (
                <div className="gallery">
                    <Carousel responsive={responsive} autoPlay={true} arrows={false} autoPlaySpeed={2000}  infinite={true}   >
                        
                            <GalleryItem url={Detail_1} />
                        
                            <GalleryItem url={Detail_2} />
                        
                            <GalleryItem url={Detail_3} />
                        
                            <GalleryItem url={Detail_4} />
                        
                            <GalleryItem url={Detail_5} />
                        
                            <GalleryItem url={Detail_6} />
                        
                            <GalleryItem url={Detail_7} />
                        
                    </Carousel>
                </div>
    )
}

export default Galery;