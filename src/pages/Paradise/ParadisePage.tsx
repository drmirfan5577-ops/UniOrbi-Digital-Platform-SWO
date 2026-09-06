import { useState } from "react";
import { ThemeConfig } from "@/types";
import { QURAN_SURAHS } from "@/constants";
import bgParadise from "@/assets/bg-paradise.jpg";

interface Props {
  theme: ThemeConfig;
  t: (key: string) => string;
}

type ParadiseTab = "quran" | "hadees" | "series";

export default function ParadisePage({ theme, t }: Props) {
  const [tab, setTab] = useState<ParadiseTab>("quran");
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const HADEES_LIST = [
    { id: 1, text: "إنما الأعمال بالنيات", urdu: "اعمال کا دارومدار نیتوں پر ہے", ref: "Bukhari 1, Muslim 1907" },
    { id: 2, text: "المسلم من سلم المسلمون من لسانه ويده", urdu: "مسلمان وہ ہے جس کی زبان اور ہاتھ سے مسلمان محفوظ رہیں", ref: "Bukhari 10" },
    { id: 3, text: "خير الناس أنفعهم للناس", urdu: "سب سے بہتر انسان وہ ہے جو لوگوں کو سب سے زیادہ نفع دے", ref: "Tabarani" },
    { id: 4, text: "طلب العلم فريضة على كل مسلم", urdu: "علم حاصل کرنا ہر مسلمان پر فرض ہے", ref: "Ibn Majah 224" },
  ];

  const SERIES_LIST = [
    { id: 1, title: "Aqeedah Series", titleUrdu: "عقیدہ سیریز", episodes: 24, icon: "📚" },
    { id: 2, title: "Seerah of Prophet ﷺ", titleUrdu: "سیرت النبی ﷺ", episodes: 48, icon: "🕌" },
    { id: 3, title: "Tafseer Al-Quran", titleUrdu: "تفسیر القرآن", episodes: 114, icon: "📖" },
    { id: 4, title: "Islamic Finance", titleUrdu: "اسلامی مالیات", episodes: 12, icon: "💰" },
    { id: 5, title: "Fiqh e Ibadat", titleUrdu: "فقہِ عبادات", episodes: 30, icon: "🤲" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Hero banner */}
      <div
        className="flex-shrink-0 relative overflow-hidden"
        style={{ height: "90px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgParadise})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
        <div className="relative z-10 flex items-center justify-between h-full px-4">
          <div>
            <h2 className="text-base font-black text-white drop-shadow">☪ Paradise</h2>
            <p className="text-[10px] text-white/70 font-urdu">قرآن · احادیث · اسلامی سیریز</p>
          </div>
          <div className="text-right">
            <p className="text-2xl text-white/80">بِسْمِ اللّٰہِ</p>
            <p className="text-[9px] text-white/50">الرَّحْمٰنِ الرَّحِیْمِ</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div
        className="flex px-3 pt-2 gap-1 flex-shrink-0"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        {[
          { id: "quran", label: t("quran"), icon: "📖" },
          { id: "hadees", label: t("hadees"), icon: "📜" },
          { id: "series", label: t("islamic"), icon: "🎬" },
        ].map((tb) => (
          <button
            key={tb.id}
            onClick={() => setTab(tb.id as ParadiseTab)}
            className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold transition-all rounded-t-xl"
            style={{
              color: tab === tb.id ? theme.accent : theme.subText,
              borderBottom: tab === tb.id ? `2.5px solid ${theme.accent}` : "2.5px solid transparent",
              background: tab === tb.id ? "rgba(255,255,255,0.3)" : "transparent",
            }}
          >
            {tb.icon} <span className="hidden sm:inline">{tb.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 screen-scroll px-3 py-3">
        {tab === "quran" && (
          <div className="flex flex-col gap-2">
            <div
              className="p-3 rounded-2xl mb-1"
              style={{ background: `${theme.accent}15`, border: `1px solid ${theme.border}` }}
            >
              <p className="text-xs font-semibold mb-1" style={{ color: theme.accent }}>
                📍 Continue Reading
              </p>
              <p className="text-sm font-bold font-arabic text-right" style={{ color: theme.text }}>
                سُوْرَةُ الْبَقَرَة
              </p>
              <p className="text-[10px] opacity-60" style={{ color: theme.subText }}>Ayah 255 (Ayat-ul-Kursi)</p>
            </div>

            {QURAN_SURAHS.map((surah) => (
              <button
                key={surah.number}
                onClick={() => setSelected(selected === surah.number ? null : surah.number)}
                className="flex items-center gap-3 p-3 rounded-2xl text-left transition-all"
                style={{
                  background: selected === surah.number ? `${theme.accent}18` : "rgba(255,255,255,0.45)",
                  border: `1px solid ${selected === surah.number ? theme.accent : theme.border}`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})` }}
                >
                  {surah.number}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold" style={{ color: theme.text }}>{surah.name}</p>
                  <p className="text-[10px] opacity-60" style={{ color: theme.subText }}>
                    {surah.verses} Ayahs
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-base font-arabic" style={{ color: theme.accent }}>{surah.nameAr}</p>
                  <p className="text-[9px] font-urdu" style={{ color: theme.subText }}>{surah.nameUrdu}</p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setPlayingId(playingId === surah.number ? null : surah.number); }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{
                    background: playingId === surah.number ? "#ef4444" : theme.accent,
                    boxShadow: playingId === surah.number ? "0 0 12px #ef444466" : theme.glow,
                  }}
                >
                  {playingId === surah.number ? "⏸" : "▶"}
                </button>
              </button>
            ))}
          </div>
        )}

        {tab === "hadees" && (
          <div className="flex flex-col gap-3">
            {HADEES_LIST.map((hadees) => (
              <div
                key={hadees.id}
                className="p-4 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  border: `1px solid ${theme.border}`,
                }}
              >
                <p className="text-base font-arabic text-right leading-relaxed mb-2" style={{ color: theme.text }}>
                  {hadees.text}
                </p>
                <p className="text-sm font-urdu text-right leading-loose opacity-80" style={{ color: theme.subText }}>
                  {hadees.urdu}
                </p>
                <div className="flex justify-between items-center mt-2 pt-2" style={{ borderTop: `1px solid ${theme.border}` }}>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: `${theme.accent}22`, color: theme.accent }}
                  >
                    {hadees.ref}
                  </span>
                  <button className="text-lg" style={{ color: theme.accent }}>🔖</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "series" && (
          <div className="flex flex-col gap-3">
            {SERIES_LIST.map((series) => (
              <div
                key={series.id}
                className="flex items-center gap-3 p-3 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  border: `1px solid ${theme.border}`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent}22, ${theme.accent}11)`,
                    border: `1px solid ${theme.border}`,
                  }}
                >
                  {series.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold" style={{ color: theme.text }}>{series.title}</p>
                  <p className="text-[11px] font-urdu" style={{ color: theme.subText }}>{series.titleUrdu}</p>
                  <p className="text-[10px] mt-0.5 opacity-60" style={{ color: theme.subText }}>
                    {series.episodes} Episodes
                  </p>
                </div>
                <button
                  className="text-sm font-bold px-3 py-1.5 rounded-full text-white"
                  style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})` }}
                >
                  ▶ Play
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
