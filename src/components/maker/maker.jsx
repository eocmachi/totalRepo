import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "WooYoungWoo",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "wooyoungwoo@gmail.com",
      message: "woo to the young to the woo",
      fileName: "wooyoungwoo",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "WooYoungWo2",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "wooyoungwoo@gmail.com",
      message: "woo to the young to the woo",
      fileName: "wooyoungwoo",
      fileURL: "wooyoungwoo.png",
    },
    3: {
      id: "3",
      name: "WooYoungWo3",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "wooyoungwoo@gmail.com",
      message: "woo to the young to the woo",
      fileName: "wooyoungwoo",
      fileURL: null,
    },
  });

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
