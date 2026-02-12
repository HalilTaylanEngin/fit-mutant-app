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
      borderRadius: "16px",
      padding: "40px 25px",
      textAlign: "center",
      color: color === "#b7ff05" ? "black" : "white", // Neon yeşilde yazı siyah, diğerlerinde beyaz olsun (okunabilirlik)
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      textDecoration: "none",
      boxShadow: `0 10px 20px ${color}30`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px)";
      e.currentTarget.style.boxShadow = `0 15px 30px ${color}60`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = `0 10px 20px ${color}30`;
    }}
  >
    <Icon size={45} style={{ marginBottom: "20px" }} />
    <h2
      style={{
        fontSize: "1.6rem",
        marginBottom: "12px",
        fontWeight: "800",
        textTransform: "uppercase",
      }}
    >
      {title}
    </h2>
    <p style={{ fontSize: "1rem", fontWeight: "500", opacity: 0.9 }}>
      {description}
    </p>
  </Link>
);

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-body, #ffffff)", // Light theme varsayılan
        color: "var(--text-main, #1a1a1a)",
        minHeight: "100vh",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          textAlign: "center",
          padding: "0 20px 60px 20px",
          overflow: "hidden",
          backgroundColor: "#000", // Hero her zaman dark kalmalı (mutant vibe)
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

        {/* Overlay - Gradyan yazıyı her temada okutur */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)",
            zIndex: 2,
          }}
        />

        <div style={{ position: "relative", zIndex: 3, maxWidth: "700px" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 10vw, 4.5rem)",
              fontWeight: "900",
              color: "white",
              textTransform: "uppercase",
              lineHeight: "0.9",
              letterSpacing: "-2px",
              marginBottom: "20px",
            }}
          >
            HAYALİNDEKİ VÜCUT <br />
            <span style={{ color: "#b7ff05" }}>MUTANT</span> MODUNDA
          </h1>
          <button
            onClick={() =>
              document
                .getElementById("categories")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "18px 45px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              backgroundColor: "#ff5757", // Kilo alma renginle uyumlu agresif buton
              color: "white",
              border: "none",
              borderRadius: "50px",
              boxShadow: "0 10px 25px rgba(255, 87, 87, 0.5)",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            PROGRAM SEÇİMİNİ YAP
          </button>
        </div>
      </section>

      {/* BEN KİMİM SECTION */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "900",
            marginBottom: "30px",
            textTransform: "uppercase",
          }}
        >
          BEN KİMİM?
        </h2>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            fontWeight: "400",
          }}
        >
          <p style={{ marginBottom: "20px" }}>
            Merhaba, ben{" "}
            <span
              style={{
                color: "#b7ff05",
                backgroundColor: "black",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              Arda Pekcan
            </span>
            .
          </p>
          <p>
            Wellness koçu ve sporcu beslenmesi uzmanıyım. Amacım sadece kilo
            verdirip aldırmak değil, hayat tarzını değiştirerek en iyi
            versiyonuna ulaşmanı sağlamak. "Fit Mutant" felsefesiyle yanındayım.
          </p>
        </div>
      </section>

      {/* KATEGORİLER SECTION */}
      <section id="categories" style={{ padding: "40px 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <CategoryButton
            to="/weight-loss"
            color="var(--theme-magenta)"
            title="KİLO VERME"
            icon={FaRunning}
            description="Yağ yakımı odaklı sıkılaşma ve form tutma programları."
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

      {/* SOSYAL MEDYA & ILETISIM */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,0.05)",
          marginTop: "80px",
          borderRadius: "40px 40px 0 0",
        }}
      >
        <h3
          style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "40px" }}
        >
          HEMEN İLETİŞİME GEÇ
        </h3>

        <button
          onClick={() => window.open("https://wa.me/905555555555", "_blank")}
          style={{
            padding: "20px 50px",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "50px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "50px",
            boxShadow: "0 10px 20px rgba(37, 211, 102, 0.3)",
          }}
        >
          WHATSAPP BİLGİ HATTI
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
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
              link: "mailto:iletisim@ardapekcan.com",
            },
            { icon: FaPhoneAlt, color: "#2c3e50", link: "tel:+905555555555" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.5rem",
                transition: "all 0.3s ease",
                textDecoration: "none",
                boxShadow: `0 5px 15px ${item.color}40`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2) rotate(8deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) rotate(0deg)";
              }}
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
