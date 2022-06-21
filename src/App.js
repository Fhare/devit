import { Header } from "./components/Header";
import { Hero } from "./components/Partials/Hero";
import { Courses } from "./components/Partials/Courses";

import "./styles/global.scss";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Courses />
    </>
  );
}