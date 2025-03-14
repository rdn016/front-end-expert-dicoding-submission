import logo from '../../assets/logo/logo.png';

const About = () => {
  return (
    <div className="about-section" id="about-us">
      <div className="about-text-section">
        <h1 id="judul" style={{ margin: 0 }}>
          Tentang Owan <span>Culinary</span>
        </h1>
        <p className="about-text-desc">
          Owan Culinary adalah sebuah website yang memberikan berbagai restoran
          kuliner top markotop yang ada di Jogja. Owan Culinary adalah salah
          satu website yang bisa kalian gunakan untuk mencari info kuliner atau
          tempat makan enak di Jogja, apalagi jika kalian adalah orang yang
          sedang berlibur di Jogja wajib sekali menikmati salah satu dari list
          restoran yang sudah kami kunjungi.
        </p>
        <br />
        <p>
          Kami sudah ada sejak 2024, dan sudah banyak restoran-restoran yang
          bisa kami rekomendasikan melalui website ini.
        </p>
      </div>
      <div className="about-image-section">
        <img
          src={logo}
          alt="Logo representing Owan Culinary"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default About;
