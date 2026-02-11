import React from "react";
import SectionHeader from "../components/SectionHeader";
import BottomNavigation from "../components/BottomNavigation";
import TransformationCard from "../components/TransformationCard";
import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { MdChevronRight, MdArrowForward } from "react-icons/md";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden selection:bg-primary selection:text-background-dark min-h-screen pb-24 transition-colors">
      <div className="min-h-screen relative flex flex-col">
        {/* iOS Status Bar Placeholder */}
        <div className="ios-status-bar flex justify-between items-center px-8 pt-4">
          {/* Status bar content omitted for simplicity/React context */}
        </div>

        <Header
          showBrand={true}
          showNotifications={true}
          showBack={false}
          className="border-none bg-transparent dark:bg-transparent backdrop-blur-none sticky-none relative "
        />
        <header className="px-6 ">
          <div className="relative overflow-hidden rounded-xl p-6 bg-zinc-900 mutant-card-shadow border border-primary/10">
            <div className="absolute inset-0 opacity-20">
              <img
                className="w-full h-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWVdDAUO0SB-8x071tqHmFgPQIqpiqaOuHOAAW-ZKfhJQ8zOnkxvUyCfHLv0-zl2_F37pTLstAmaRXp0W-oEbvnmG4TlostcE-6PPhGwcyQNNH0cqzeYWYf7wX-E6jk-jcnf20WK3eEyYkkLSvADDxXbRrZmGXDZwbO5L4YggTODzB5S0vDkLZh5yZJgYgQ0cTbTP63dzHT1SyzBy7A7GcU4Z8V7BkAv0MsEnfXBU9dPX5oP9fc1TzBfLvvUx4WKf8mE4FB57KL_j2"
                alt="Intense athlete working out in dark gym"
              />
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl font-black leading-tight italic uppercase mutant-glow text-white">
                Sıradan Olmayı Reddet, Potansiyelini{" "}
                <span className="text-primary">Fit Mutant</span> ile Keşfet!
              </h1>
              <p className="mt-3 text-sm text-slate-300 max-w-[280px]">
                Kişiselleştirilmiş antrenman ve radikal beslenme planlarıyla
                sınırlarını aş.
              </p>
            </div>
          </div>
        </header>

        <section className="px-6 py-4">
          <SectionHeader title="Hedefini Seç" />
          <div className="space-y-4">
            <div
              onClick={() => navigate("/muscle-gain")}
              className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md dark:shadow-none"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1G5NM5n_rPuNp1BnOHLf4fajySwI-Yn1P3wIXhsE0PAv5nqLEWuMkZj_DrhaCCE8BCr2WOipaEewdy593IEOgf0eGsATMQVjSludRvIKg5YxpF9ra60fsUF40WS2CtFnUkk234-9BfNtA6qjgc9r4-4q6Zmhv7pSyzA-_Xx1-H962rhvzKR-p5wShemu7yOmDeyU315Y_JjjJX8vy6oKa-Cr5wjmAbBuTnjP7XBjN1znXeOaGEW4K4Puj1Bicw6B0uwGgjYaBSBMM"
                alt="Cardio"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent dark:from-background-dark dark:via-background-dark/60 dark:to-transparent"></div>
              <div className="relative h-full flex flex-col justify-center px-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                  Yağ Yakımı
                </span>
                <h3 className="text-xl font-bold italic uppercase text-white">
                  Kilo Verme
                </h3>
                <div className="mt-2 w-8 h-1 bg-primary rounded-full"></div>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <MdChevronRight className="text-primary text-3xl" />
              </div>
            </div>

            <div
              onClick={() => navigate("/muscle-gain")}
              className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md dark:shadow-none"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKwH2px7-LljMliv2pILtkGBMlcPGam5-oFQM12RvjknNqBwRciGyNRNmuEjU5MgUq0IEHZvSgpnZB74HnnGxffcJc8wJa2mj-uwtWiRxyx_xvZ54nUya8FDBfygDgclHtoXV7TumH9Zoypy4W3-e51BPVw70x6QBWb9LfZ0O0hU5yRnTNYilGJsRCQHW0uXi6wRECmQ9oAuf2s5aNzoHzuD-DhaAkZNRoiFU_FdA2CGhhS7U_BwBEVWgfnxEkEAT01rnxfTg2O2qj"
                alt="Bodybuilder"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent dark:from-background-dark dark:via-background-dark/60 dark:to-transparent"></div>
              <div className="relative h-full flex flex-col justify-center px-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                  Kas Kütlesi
                </span>
                <h3 className="text-xl font-bold italic uppercase text-white">
                  Kilo Alma
                </h3>
                <div className="mt-2 w-8 h-1 bg-primary rounded-full"></div>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <MdChevronRight className="text-primary text-3xl" />
              </div>
            </div>

            <div
              onClick={() => navigate("/nutrition")}
              className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md dark:shadow-none"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCCwAPp1pxHz3uulS31k2ycmwveeFtyJvmhzLdJpXvSJZ0KTptiPiikc3D_DU2Vt0bqFR6KXTE0FkHrI8B5aEM_-JWCzng9UIxjkUve12AwcGKHoLDwuwT4hMT8KOBNneVmg-8NU-BC_nDiZixWsmGF67ah5SEAIPO-R7DQoY8YS_HrrtF8hu9bDiDqCNA6-pT016NvQ82ADxB4SCEfQ-SnaFe17s4mbZwXt1OXMxcz26-BIWkCRY8-s5s5io4mte9mSa5eu-TJ8NQ"
                alt="Meal prep"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent dark:from-background-dark dark:via-background-dark/60 dark:to-transparent"></div>
              <div className="relative h-full flex flex-col justify-center px-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                  Performans
                </span>
                <h3 className="text-xl font-bold italic uppercase text-white">
                  Sporcu Beslenmesi
                </h3>
                <div className="mt-2 w-8 h-1 bg-primary rounded-full"></div>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <MdChevronRight className="text-primary text-3xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-6">
          <div className="flex justify-between items-end mb-6">
            <div>
              <SectionHeader title="Değişim Hikayeleri" className="mb-0" />
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Gerçek mutantlar, gerçek sonuçlar
              </p>
            </div>
            <button className="text-primary text-xs font-bold uppercase tracking-tighter">
              Tümünü Gör
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            <TransformationCard
              beforeImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBVrLzG7ZWSEkZJBKD2nIYbURXOgb4vV5pD6XWMZcKlQxYKsBifYBjVSi5aaNf0WY4LgnZEGFv2-34NxfvucfR3UBp0OV9r7bO0nQd23kBy0tU9OFMC_ANCBNyil959XXO9a9MGFDAFCs17w0d4-QMbNWnQmVQw7DnJ0uuX7oAJI5rBFks-f-xuAbCsGtV6zXXFkATsvMV-cXndNHbD5JiXQkkjK2e1B8CWRScRea4leUYb5CTQ9O0B0qHcd6IpOSkwxP5UcgQzxo2H"
              afterImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCvhfXi9pl6XIM6UXgC5Z2f0cxg_CCauuHzi5MB3NN5dGHUlM4Wkd0dRCx7oC-eYPDRIdB8JZkRLsO7l7TKwbZ3qfnSY-XURSzd5yP7dxtwJiIP1or24x58sOlTZxsFNWZVEsShbvPuQd0bcIMZPbbFxES5eiIqLkMuY-hmD7O3r_ItbId-8mD-wBuDVrNGL2OGPGZZKp7dzMwSwYUJm6GdVri09gXogfMePXbnKPIYIO6eZ2HeskvgNhIAARL2swipOYUQeugGrdeX"
              name="Kerem T."
              duration="12 Haftalık Değişim"
              result="-14.5 KG"
              resultLabel="Yağ Kaybı"
            />
            <TransformationCard
              beforeImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDHAHYac-DEm28Jov8zytINgRh_7nzYaCcOEhPbR-8h6g13DGlD0zZJ65gbUmRht5SfjNGmabP2DbfZQI1wLBJJNEJ5TIwnqvDY7-QB4JZgBMFEThBBPH_qdVFYUYjNWko09IilSTcGpx1xdov8aRbEYQZXwl9f3Jw4bYNZUUpL9TKPebqRiYpxltTWfq-zt_NYqIGhR28q5cmTegcinMg0n_yc_2n1B4DOfb3OATD7xeJeNyftf4veQGpbyljqNK2PKP6TLxfNu3-r"
              afterImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCzBbKb_rEbJTLK0-m0RhP_38A9HNY_HM0N8b8Jk41VE5oVT_Yc5RdT5wp4vZghNaA6tyAsnoZiBLYfTqjWBBg_iwsHKZ7ljpSiRTiCXddMY-KvNO05xcFLBFIiWYQ2dmqk6fN3CCV6pOa86gDvQVNvg90XRTuYH1dblGozuhQoIv4niOgHU7-VIX_ZE7Fa8s5v7elVf30iHDPbcHoN6eeaS9QR7fhOD2PmcepVU-_9Hh_KEWOPt3SAVlNP80APHXxRM-ync05HLZnF"
              name="Selin A."
              duration="8 Haftalık Değişim"
              result="+6.2 KG"
              resultLabel="Kas Kazanımı"
            />
          </div>
        </section>

        <section className="px-6 py-4">
          <PrimaryButton
            text="Hemen Ücretsiz Danışma Al"
            icon={<MdArrowForward />}
            onClick={() => navigate("/apply")}
          />
        </section>

        <BottomNavigation />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 dark:bg-white/20 rounded-full mb-2"></div>
      </div>
    </div>
  );
};

export default Home;
