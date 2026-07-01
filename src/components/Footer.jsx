import "../styles/Footer.css";

function Footer() {
  const año = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-bottom">
          <span>© {año} Terra Oblita — Guardianes del Alba</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
