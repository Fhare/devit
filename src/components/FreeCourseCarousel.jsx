import Carousel from 'react-elastic-carousel';

import "../styles/defaultCarousel.scss";

export function FreeCourseCarousel({ data }) {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={false}
      >
        {data.map(item => (
          <div className="carousel-card" key={item.id}>
            <img src={item.img} alt="Nome funcionário" className="fc-img" />
            <h2 className="fc-title">{item.title}</h2>
            <p className="fc-description">{item.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}