import React from "react";
import PackageCard from "../components/PackageCard";
import heroImg from "../assets/sporcubeslenmesi.jpg";
import sporcuBesMini from "../assets/sporcu-beslenmesi-mini-baslangic.jpg";
import sporcuBesOrta from "../assets/sporcu-beslenmesi-orta-baslangic.jpg";
import sporcuBesTam from "../assets/sporcu-beslenmesi-tam-baslangic.jpg";

const SportsNutrition = () => {
  const themeColor = "var(--theme-green)";
  const phoneNumber = "905555555555";

  const packages = [
    {
      title: "Performans Paketi",
      price: 3500,
      originalPrice: 4500,
      image: sporcuBesMini,
      features: [
        "CR7 Drive (Elektrolit)",
        "Rebuild Strength",
        "Shaker Hediye",
        "Ücretsiz Kargo",
        "Maç/Antrenman Koçluğu",
      ],
    },
    {
      title: "Elit Sporcu Paketi",
      price: 5000,
      originalPrice: 6500,
      image: sporcuBesOrta,
      features: [
        "CR7 Drive",
        "Rebuild Strength",
        "Rebuild Endurance",
        "Shaker Hediye",
        "Ücretsiz Kargo",
        "Profesyonel Beslenme Koçluğu",
      ],
    },
    {
      title: "Şampiyon Paketi",
      price: 7500,
      originalPrice: 9000,
      image: sporcuBesTam,
      features: [
        "Tam Performans Serisi (H24)",
        "Özel Takviyeler",
        "Kişiye Özel Antrenman Programı",
        "7/24 VIP Koçluk",
        "Hediye Ekipmanlar",
      ],
    },
  ];

  const handleSelect = (pkg) => {
    const message = `Merhaba Arda Bey, Sporcu Beslenmesi - ${pkg.title} hakkında bilgi almak ve başlamak istiyorum.`;
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
          alt="Sporcu Beslenmesi"
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
          <h1 style={{ fontSize: "2.5rem", color: themeColor }}>
            SPORCU BESLENMESİ
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-main)" }}>
            Maksimum performans, hızlı toparlanma.
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

export default SportsNutrition;
