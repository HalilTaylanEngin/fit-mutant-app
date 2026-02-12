import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/kiloverme.jpeg"; // Example hero image
// Using placeholders for icons
import { FaRunning, FaDumbbell, FaBolt } from "react-icons/fa";

const CategoryButton = ({ to, color, title, icon: Icon, description }) => (
  <Link
    to={to}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color,
      border: `2px solid ${color}`,
      borderRadius: "12px",
      padding: "30px 20px",
      textAlign: "center",
      color: "black",
      transition: "all 0.3s ease",
      textDecoration: "none",
      boxShadow: `0 4px 15px ${color}40`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = `0 10px 25px ${color}60`;
      // e.currentTarget.style.backgroundColor = color; // Already set
      // e.currentTarget.style.color = "black"; // Already set
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1.0)";
      e.currentTarget.style.boxShadow = `0 4px 15px ${color}40`;
      e.currentTarget.style.backgroundColor = color;
      e.currentTarget.style.color = "black";
    }}
  >
    <Icon size={50} style={{ marginBottom: "15px", color: "black" }} />
    <h2 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>{title}</h2>
    <p style={{ opacity: 0.9 }}>{description}</p>
  </Link>
);

const Home = () => {
  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* HERO SECTION */}
      <section
        style={{
          paddingTop: "550px", // Adjusted for balance
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 30%, transparent 100%), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            marginBottom: "20px",
            textTransform: "uppercase",
            lineHeight: "1.1",
            textShadow: "2px 2px 8px rgba(0,0,0,0.9)", // Strong shadow for readability
            color: "white", // Always white on image
          }}
        >
          HAYALİNDEKİ VÜCUT{" "}
          <span style={{ color: "var(--theme-green)" }}>MUTANT</span> MODUNDA
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            marginBottom: "40px",
            color: "white", // Always white on image
            textShadow: "1px 1px 4px rgba(0,0,0,1)",
            fontWeight: "500",
          }}
        >
          Hedef kilona ulaşmaya hazır mısın? Arda Pekcan koçluğu ile şimdi başla
          ve sınırlarını zorla!
        </p>

        <button
          onClick={() =>
            document
              .getElementById("categories")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            backgroundColor: "var(--theme-orange)",
            color: "white",
            borderRadius: "50px",
            boxShadow: "0 0 20px var(--theme-orange)",
            textShadow: "none",
          }}
        >
          PROGRAM SEÇİNİ YAP
        </button>
      </section>

      {/* BEN KİMİM / ABOUT SECTION */}
      <section
        style={{
          padding: "60px 20px",
          backgroundColor: "var(--bg-card)",
          textAlign: "center",
        }}
      >
        <h2
          style={{ fontSize: "2.5rem", marginBottom: "20px", color: "white" }}
        >
          BEN KİMİM?
        </h2>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.1rem",
            color: "var(--text-muted)",
            lineHeight: "1.8",
          }}
        >
          <p style={{ marginBottom: "20px" }}>
            Merhaba, ben{" "}
            <span style={{ color: "var(--theme-green)", fontWeight: "bold" }}>
              Arda Pekcan
            </span>
            . Wellness koçu ve sporcu beslenmesi uzmanıyım. Amacım sadece kilo
            verdirip aldırmak değil, hayat tarzını değiştirerek en iyi
            versiyonuna ulaşmanı sağlamak.
          </p>
          <p>
            "Fit Mutant" felsefesiyle, sıradanlığa meydan okuyoruz. Bilimsel
            beslenme yöntemleri ve disiplinli koçluk sistemimle hedeflerine
            ulaşman için yanındayım.
          </p>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="categories" style={{ padding: "60px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
          }}
        >
          HEDEFİNİ SEÇ
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <CategoryButton
            to="/weight-loss"
            color="var(--theme-magenta)"
            title="KİLO VERME"
            icon={FaRunning}
            description="Yağ yakımı odaklı, sıkılaşma ve form tutma programları."
          />
          <CategoryButton
            to="/weight-gain"
            color="var(--theme-orange)"
            title="KİLO ALMA"
            icon={FaDumbbell}
            description="Kütle artışı ve hacim kazanmaya yönelik özel programlar."
          />
          <CategoryButton
            to="/sports-nutrition"
            color="var(--theme-green)"
            title="SPORCU BESLENMESİ"
            icon={FaBolt}
            description="Performans artışı ve toparlanma için elit beslenme."
          />
        </div>
      </section>

      {/* ABOUT / FOOTER CTA */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "var(--bg-card)",
        }}
      >
        <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          BİLGİ ALMAK İSTER MİSİN?
        </h3>
        <p style={{ marginBottom: "30px", color: "var(--text-muted)" }}>
          Hangi paketin sana uygun olduğuna karar veremedin mi?
        </p>
        <button
          onClick={() => window.open("https://wa.me/905555555555", "_blank")}
          style={{
            padding: "15px 40px",
            border: "none",
            backgroundColor: "var(--theme-green)",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "50px",
            boxShadow: "0 0 15px var(--theme-green)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 25px var(--theme-green)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 15px var(--theme-green)";
          }}
        >
          WHATSAPP'TAN ULAŞ
        </button>
      </section>
    </div>
  );
};

export default Home;
