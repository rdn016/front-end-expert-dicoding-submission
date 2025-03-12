const Footer = () => {
  return (
    <footer id="footer">
      <div className="about">
        <h2 style={{ fontWeight: "bolder" }} className="judul">
          <span id="span">Owan</span> Culinary
        </h2>
        <p className="about-desc">
          Owan Culinary telah berdiri sejak 2024 lebih tepatnya kemaren.
          Daripada itu mending makan disini deh
        </p>
      </div>
      <div className="contact">
        <h2 className="contact-header">Contact Us</h2>
        <ul className="contact-list">
          <li>support@owanculinary.id</li>
          <li>
            Jl. Plemburan Gg. Mulia IV, Sedan, Sariharjo, Kec. Ngaglik,
            Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
