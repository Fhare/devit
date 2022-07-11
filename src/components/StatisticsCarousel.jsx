import Carousel from "react-elastic-carousel";

import "../styles/defaultCarousel.scss";

export function StatisticsCarousel({ data }) {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={false}
      >
        {data.map(item => (
          <div className="carousel-card" key={item.id}>
            <p>{item.descriptions}</p>
            <img src={item.img} alt={item.name} className="statistics-img" />
            <h1 className="statistics-title">{item.name}</h1>
            <h3 className="statistics-job">{item.job}</h3>
          </div>
        ))}
      </Carousel>
    </div >
  );
}