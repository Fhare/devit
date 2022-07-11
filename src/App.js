import { Header } from "./components/Header";
import { HeroContainer } from "./components/Partials/HeroContainer";
import { CourseContainer } from "./components/Partials/CourseContainer";
import { FreeCourseContainer } from "./components/Partials/FreeCourseContainer";
import { MethodContainer } from "./components/Partials/MethodContainer";
import { StatisticsContainer } from "./components/Partials/StatisticsContainer";
import { PlatformContainer } from "./components/Partials/PlatformContainer";
import { BrandContainer } from "./components/Partials/BrandContainer";
import { Footer } from "./components/Footer";

import "./styles/global.scss";

export function App() {
  return (
    <>
      <Header />
      <HeroContainer />
      <CourseContainer />
      <FreeCourseContainer />
      <MethodContainer />
      <StatisticsContainer />
      <PlatformContainer />
      <BrandContainer />
      <Footer />
    </>
  );
}