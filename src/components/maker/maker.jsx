import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
