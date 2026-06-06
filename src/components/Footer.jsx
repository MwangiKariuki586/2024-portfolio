import { about } from "../data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <span>&copy; {year} {about.brand}. All rights reserved.</span>
      <span>Building practical software for real-world workflows.</span>
    </footer>
  );
};

export default Footer;
