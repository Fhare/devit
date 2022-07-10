import Carousel from 'react-elastic-carousel';

import "../styles/defaultCarousel.scss";

export function DefaultCarousel({ data }) {
  return (
    <div className="carousel-container">
      {
        data.type == "course" ? (
          <Carousel
            showArrows={false}
          >
            {data.map(item => (
              <div className="fc-card" key={item.id}>
                <img src={item.img} alt="Nome funcionário" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel
            showArrows={false}
          >
            {data.map(item => (
              <div className="fc-card" key={item.id}>
                <img src={item.img} alt="Nome funcionário" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </Carousel>
        )
      }
    </div>
  );
}