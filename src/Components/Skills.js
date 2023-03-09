import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col} from 'react-bootstrap';
import meter1 from './Image/meter1.svg';
import meter2 from './Image/meter2.svg';
import meter3 from './Image/meter3.svg';
import colorSharp from './Image/color-sharp.png'


const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>lorem ipsum is simply dummy text of the printing and typesetting industry, lorem Ipsum been the insdusty's handand dummy text ever since the 1500s, when on unknown printer took a gallery of and scrambled it to make a type specimen book.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <img src={meter1} alt='Image' />
                                    <h5>Web Developpement</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt='Image' />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt='Image' />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt='Image' />
                                    <h5>Web Developpement</h5>
                                </div>
                            </Carousel>
                        </div>
                   </Col>
                </Row>
            </Container>
            {/* <img className="bacground-image-left" src={colorSharp} /> */}
        </section>
    )
}
export default Skills;