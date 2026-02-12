import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/kiloverme.jpeg";
import {
  FaRunning,
  FaDumbbell,
  FaBolt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

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
      color: "white", // Yazılar okunabilirlik için beyaz
      transition: "all 0.3s ease",
      textDecoration: "none",
      boxShadow: `0 4px 15px ${color}40`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.02)";
      e.currentTarget.style.boxShadow = `0 10px 25px ${color}60`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1.0)";
      e.currentTarget.style.boxShadow = `0 4px 15px ${color}40`;
    }}
  >
    <Icon size={40} style={{ marginBottom: "15px", color: "white" }} />
    <h2
      style={{ fontSize: "1.5rem", marginBottom: "10px", fontWeight: "bold" }}
    >
      {title}
    </h2>
    <p style={{ fontSize: "0.95rem", opacity: 0.9 }}>{description}</p>
  </Link>
);

const Home = () => {
  return (
    <div
      style={{
        paddingBottom: "40px",
        backgroundColor: "var(--bg-body, #f8f9fa)", // Light theme uyumlu arka plan
        color: "var(--text-main, #333)",
        minHeight: "100vh",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          textAlign: "center",
          padding: "0 20px 40px 20px",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "contain",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        {/* Gradyan: Light/Dark geçişinde yazıların okunmasını sağlar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)",
            zIndex: 2,
          }}
        />

        <div style={{ position: "relative", zIndex: 3, maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 8vw, 3.5rem)", // Responsive font
              fontWeight: "900",
              color: "white",
              textTransform: "uppercase",
              lineHeight: "1",
              marginBottom: "15px",
            }}
          >
            HAYALİNDEKİ VÜCUT <span style={{ color: "#2ecc71" }}>MUTANT</span>{" "}
            MODUNDA
          </h1>
          <button
            onClick={() =>
              document
                .getElementById("categories")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "15px 30px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              backgroundColor: "#e67e22",
              color: "white",
              border: "none",
              borderRadius: "50px",
              boxShadow: "0 4px 15px rgba(230, 126, 34, 0.4)",
              cursor: "pointer",
            }}
          >
            PROGRAM SEÇİMİ YAP
          </button>
        </div>
      </section>

      {/* BEN KİMİM SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>BEN KİMİM?</h2>
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            color: "inherit",
          }}
        >
          <p>
            Merhaba, ben{" "}
            <span style={{ color: "#2ecc71", fontWeight: "bold" }}>
              Arda Pekcan
            </span>
            . Wellness koçu ve sporcu beslenmesi uzmanıyım.
          </p>
        </div>
      </section>

      {/* KATEGORİLER SECTION */}
      <section id="categories" style={{ padding: "40px 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <CategoryButton
            to="/weight-loss"
            color="#d63384"
            title="KİLO VERME"
            icon={FaRunning}
            description="Yağ yakımı odaklı sıkılaşma programları."
          />
          <CategoryButton
            to="/weight-gain"
            color="#fd7e14"
            title="KİLO ALMA"
            icon={FaDumbbell}
            description="Kütle artışı ve hacim kazanma."
          />
          <CategoryButton
            to="/sports-nutrition"
            color="#198754"
            title="SPORCU BESLENMESİ"
            icon={FaBolt}
            description="Performans odaklı elit beslenme."
          />
        </div>
      </section>

      {/* SOSYAL MEDYA & ILETISIM */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,0.03)",
        }}
      >
        <h3 style={{ marginBottom: "30px" }}>BANA ULAŞIN</h3>

        <button
          onClick={() => window.open("https://wa.me/905555555555", "_blank")}
          style={{
            padding: "15px 40px",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "50px",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "40px",
          }}
        >
          WHATSAPP HATTI
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: FaInstagram, color: "#E1306C", link: "#" },
            { icon: FaFacebookF, color: "#4267B2", link: "#" },
            { icon: FaYoutube, color: "#FF0000", link: "#" },
            {
              icon: FaEnvelope,
              color: "#34495e",
              link: "mailto:test@test.com",
            },
            { icon: FaPhoneAlt, color: "#2c3e50", link: "tel:0555" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.2rem",
                transition: "transform 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <item.icon />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
