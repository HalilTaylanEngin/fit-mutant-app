import React from "react";
import PackageCard from "../components/PackageCard";
import heroImg from "../assets/kiloverme.jpeg";
import kilovermeMini from "../assets/kilo-verme-mini-baslangic.jpg";
import kilovermeOrta from "../assets/kilo-verme-orta-baslangic.jpg";
import kilovermeTam from "../assets/kilo-verme-tam-baslangic.jpg";

const WeightLoss = () => {
  const themeColor = "var(--theme-magenta)";
  const phoneNumber = "905555555555";

  const packages = [
    {
      title: "Mini Başlangıç Paketi",
      price: 3100,
      originalPrice: 4030,
      image: kilovermeMini,
      features: [
        "2 Öğün Shake",
        "Detoks Çayı (50g)",
        "Shaker Hediye",
        "Ücretsiz Kargo",
        "Birebir Koçluk Takibi",
      ],
    },
    {
      title: "Orta Başlangıç Paketi",
      price: 4250,
      originalPrice: 5500,
      image: kilovermeOrta,
      features: [
        "2 Öğün Shake",
        "Detoks Çayı (50g)",
        "Aloe Vera Konsantre İçecek",
        "Shaker Hediye",
        "Ücretsiz Kargo",
        "Birebir Koçluk + Beslenme Planı",
      ],
    },
    {
      title: "Tam Başlangıç Paketi",
      price: 5400,
      originalPrice: 7000,
      image: kilovermeTam,
      features: [
        "2 Öğün Shake",
        "Detoks Çayı (100g)",
        "Aloe Vera",
        "Termo Complete (Yağ Yakıcı)",
        "Shaker Hediye",
        "VIP Koçluk Desteği",
      ],
    },
  ];

  const handleSelect = (pkg) => {
    const message = `Merhaba Arda Bey, Kilo Verme - ${pkg.title} hakkında bilgi almak ve başlamak istiyorum.`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Header Image/Banner */}
      <div
        style={{ height: "250px", position: "relative", marginBottom: "20px" }}
      >
        <img
          src={heroImg}
          alt="Kilo Verme"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.6",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", color: themeColor }}>KİLO VERME</h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-main)" }}>
            Hayalindeki vücuda kavuş.
          </p>
        </div>
      </div>

      {/* Discount Bar */}
      <div
        style={{
          backgroundColor: themeColor,
          color: "black",
          textAlign: "center",
          padding: "10px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        %30 İNDİRİM FIRSATINI KAÇIRMA!
      </div>

      {/* Packages Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "0 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            {...pkg}
            themeColor={themeColor}
            onSelect={() => handleSelect(pkg)}
          />
        ))}
      </div>
    </div>
  );
};

export default WeightLoss;
