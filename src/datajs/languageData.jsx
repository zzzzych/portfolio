import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiJquery,
  SiCss3,
  SiHtml5,
  SiSass,
} from "react-icons/si";
let html5 = <SiHtml5 style={{ color: "#e34f26" }} />;
let css3 = <SiCss3 style={{ color: "#1572b6" }} />;
let jQuery = <SiJquery style={{ color: "#0769ad" }} />;
let javascript = <SiJavascript style={{ color: "#f7df1e" }} />;
let bootstarp = <SiBootstrap style={{ color: "#7952b3" }} />;
let sass = <SiSass style={{ color: "#cc6699" }} />;
let react = <SiReact style={{ color: "#61dafb" }} />;
let languageData = [
  {
    language: html5,
    text: "HTML5",
    color: "#e34f26",
  },
  {
    language: css3,
    text: "CSS3",
    color: "#1572b6",
  },
  {
    language: jQuery,
    text: "jQuery",
    color: "#0769ad",
  },
  {
    language: javascript,
    text: "Javascript",
    color: "#f7df1e",
  },
  {
    language: sass,
    text: "SASS",
    color: "#cc6699",
  },
  {
    language: bootstarp,
    text: "Bootstrap",
    color: "#7952b3",
  },
  {
    language: react,
    text: "React",
    color: "#61dafb",
  },
];

export default languageData;
