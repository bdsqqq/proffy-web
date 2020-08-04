import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/37847523?s=460&u=0838e57ca793e64ff01449bde34eabf155642434&v=4"
          alt="Igor Bedesqui"
        />
        <div>
          <strong>Igor Bedesqui</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia
        iusto architecto quasi vel vitae suscipit temporibus sunt voluptatem
        fugit pariatur minus deleniti aut possimus delectus, tenetur, ex et
        illum.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 37,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
