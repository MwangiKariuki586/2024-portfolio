import { about, navigation } from "../data";
import { FiZap } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="site-footer">
      <a className="brand" href="#home">
        <span className="brand__mark">
          <FiZap aria-hidden="true" />
        </span>
        <span>{about.brand}</span>
      </a>
      <nav aria-label="Footer navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <p>Copyright &#169; 2026 {about.full_name}. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
