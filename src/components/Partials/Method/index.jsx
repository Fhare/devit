import { MethodBullet } from "../../MethodBullet";

import MethodIMG from "../../../assets/method.png";

import "./styles.scss";

export function Method() {
  return (
    <section className="method-container">
      <h1 className="method-title">Nossa metodologia</h1>

      <img src={MethodIMG} alt="Nossa metodologia" />

      <ul>
        <MethodBullet bulletColor="#00D6ED" title="Aprender" />
        <MethodBullet bulletColor="#00AAFF" title="Treinar" />
        <MethodBullet bulletColor="#0C70F1" title="Executar" />
        <MethodBullet bulletColor="#303030" title="Mentoria" />
      </ul>
    </section>
  );
}