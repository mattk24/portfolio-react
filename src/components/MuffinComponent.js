import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Container, Row, Col } from 'reactstrap';

const items = [
  {
    src: '/assets/imgs/miranda.jpg',
    header: 'Me and Miranda at the beach',
    description: 'Me and her family went to the beach and had a great time up there.'
  },
  {
    src: '/assets/imgs/miranda2.jpg',
    header: 'Me and her family went to a restaurant.',
    description: 'We went to a fancy seafood restaurant and it was really good.'
  },
  {
    src: '/assets/imgs/miranda3.jpg',
    header: 'Me and Miranda went to the balcony of a restaurant',
    description: 'It was an amazing view to see at a restaurant especially during the sunset.'
  }
];



const Muffin = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src} className="carousel-item mt-5 mb-5"
      >
        <img src={item.src} alt={item.header}  height={600} width={100} className="d-block w-100"/>
        <CarouselCaption captionText={item.description} captionHeader={item.header} className="carousel-caption" />
      </CarouselItem>
    );
  });

    return (
      <div>
  {/* My Muffin */}
  <h3 className="mt-5" style={{color: 'gold'}}>My Beautiful and Amazing Girlfriend!</h3>
  <h2 className="mt-5" style={{color: 'gold'}}>Miranda Femia</h2>
   <Container htmlFor="div">
     <Row className="row row-content">
       <Col className="col-md-8 mx-auto">
       <Carousel className="carousel slide" activeIndex={activeIndex}
      next={next}
      previous={previous}>
<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
       </Col>
     </Row>
   </Container>
    </div>
    );
}

export default Muffin;