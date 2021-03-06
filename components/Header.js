// import Head from "next/head";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev_</span>News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date the latest web dev news.
      </p>
    </div>
  );
};

export default Header;
