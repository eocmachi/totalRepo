import "./Preview.scss";
import { motion } from "framer-motion";

const RD = [
  {
    id: 0,
    title: "Gentle Monster",
    description:
      "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해서 사용자가 google 과 github를 통해 로그인 할수있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다.",
    tools: " react / react-router-dom / scss ",
    url: "https://delicate-longma-d20402.netlify.app/",
  },
  {
    id: 1,
    title: "2022 BIFF",
    description:
      "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해 사용자가 google 과 github를 통해 로그인 할 수 있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다.",
    tools: " react / react-router-dom / scss ",
    url: "https://classy-madeleine-f766d7.netlify.app/",
  },
  {
    id: 2,
    title: "Youtube Clone",
    description:
      "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해서 사용자가 google 과 github를 통해 로그인 할수있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다. 또한 cloudinary를 이용하여 사용자의 이미지를 저장을 할 수 있도록 구현하였습니다.",
    tools: " react / react-router-dom / scss ",
    url: "https://zoseeee.github.io/YouTube/",
  },
  {
    id: 3,
    title: "Metaverse Card Maker",
    description:
      "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해서 사용자가 google 과 github를 통해 로그인 할수있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다. 또한 cloudinary를 이용하여 사용자의 이미지를 저장을 할 수 있도록 구현하였습니다.",
    tools: " react / react-router-dom / scss ",
    url: "https://rococo-lamington-8b84b3.netlify.app/",
  },
  {
    id: 4,
    title: "2023 Portfolio",
    description:
      "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해서 사용자가 google 과 github를 통해 로그인 할수있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다. 또한 cloudinary를 이용하여 사용자의 이미지를 저장을 할 수 있도록 구현하였습니다.",
    tools: " react / react-router-dom / scss ",
    url: "https://zoseeee.github.io/portfolio/",
  },
];
const DB = [
  {
    id: 0,
    title: "hince",
    url: "https://zoseeee.github.io/hince/",
  },
  {
    id: 1,
    title: "haagen-dazs",
    url: "https://zoseeee.github.io/haagendazs/",
  },
  {
    id: 2,
    title: "hanwha",
    url: "https://zoseeee.github.io/hanwha/",
  },

  {
    id: 3,
    title: "kidZania",
    url: "https://zoseeee.github.io/kidZania/",
  },
  {
    id: 4,
    title: "gopizza",
    url: "https://zoseeee.github.io/GOPIZZA/",
  },
  {
    id: 5,
    title: "jakomo",
    url: "https://zoseeee.github.io/jakomo/",
  },
  {
    id: 6,
    title: "jasaeng",
    url: "https://zoseeee.github.io/jaseng/",
  },
];

const Preview = ({ setPreviewOpen }) => {
  const variants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
  };

  return (
    <motion.div
      className="preview"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <div className="react-img">
        {RD.map((item) => (
          <div
            key={item.id}
            className="item"
            onClick={() => window.open(`${item.url}`, "_blank")}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/react_0" +
                (item.id + 1) +
                ".png"
              }
              alt=""
            />
            <span className="img-title">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="design-img">
        {DB.map((item) => (
          <div
            key={item.id}
            className="item"
            onClick={() => window.open(`${item.url}`, "_blank")}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/item__0" +
                (item.id + 1) +
                ".png"
              }
              alt=""
            />
            <span className="img-title">{item.title}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Preview;
