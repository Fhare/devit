import { Bullet } from "../Bullet";

import MethodIMG from "../../assets/method.png";

import "../../styles/container.method.scss";


export function MethodContainer() {
  return (
    <section className="method-container">
      <h1 className="method-title">Nossa metodologia</h1>

      <img src={MethodIMG} alt="Nossa metodologia" className="method-img" />

      <ul>
        <Bullet bulletColor="#00D6ED" title="Aprender" />
        <Bullet bulletColor="#00AAFF" title="Treinar" />
        <Bullet bulletColor="#0C70F1" title="Executar" />
        <Bullet bulletColor="#303030" title="Mentoria" />
      </ul>
    </section>
  );
}