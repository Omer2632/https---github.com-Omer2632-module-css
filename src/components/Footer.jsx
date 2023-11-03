import FooterStyle from "../scss/footer.module.scss";
const Footer = () => {
  return (
    <div>
      <footer className={FooterStyle["footer"]}>
        <p>Gökalp Frez Çeşitleri {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;
