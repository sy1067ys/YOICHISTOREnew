import { Link } from 'react-router';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import myuuiLogo from '../../assets/myuui-logo.png';

const items = [
  {
    name: 'うさ耳ヘアクリップ',
    price: '¥1,800',
    image:
      'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tag: 'NEW',
  },
  {
    name: 'パールリボンチャーム',
    price: '¥2,400',
    image:
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tag: '人気',
  },
  {
    name: 'もこもこぬいぐるみポーチ',
    price: '¥3,200',
    image:
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tag: null,
  },
  {
    name: 'リボンレターセット',
    price: '¥1,200',
    image:
      'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tag: null,
  },
];

const commitments = [
  { title: '肌にやさしい素材', body: '毎日身につけるものだから、低刺激な素材だけを選んでいます。' },
  { title: '一つひとつ丁寧に', body: 'リボン結びも刺繍も、すべて職人の手作業で仕上げています。' },
  { title: '贈り物にぴったり', body: 'ラッピングにもこだわり、渡す瞬間まで可愛いを届けます。' },
];

function ScallopDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 240 20"
      preserveAspectRatio="none"
      className={`w-full h-5 ${flip ? 'rotate-180' : ''}`}
      style={{ display: 'block' }}
    >
      <path
        d="M0,20 L0,10 Q10,0 20,10 Q30,20 40,10 Q50,0 60,10 Q70,20 80,10 Q90,0 100,10 Q110,20 120,10 Q130,0 140,10 Q150,20 160,10 Q170,0 180,10 Q190,20 200,10 Q210,0 220,10 Q230,20 240,10 L240,20 Z"
        fill="#FFF6F8"
      />
    </svg>
  );
}

export default function Myuui() {
  return (
    <div
      style={{
        fontFamily:
          '"Hiragino Maru Gothic ProN", "Rounded Mplus 1c", "Yu Gothic", sans-serif',
        backgroundColor: '#FFF6F8',
        color: '#6B6560',
      }}
      className="min-h-screen"
    >
      {/* Hero */}
      <section
        className="relative pt-20 pb-16 text-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #FBDDE7 0%, #FFF6F8 100%)' }}
      >
        {/* floating hearts */}
        <span className="absolute text-3xl opacity-60 select-none" style={{ top: '18%', left: '8%' }}>
          💗
        </span>
        <span className="absolute text-2xl opacity-50 select-none" style={{ top: '30%', right: '10%' }}>
          🎀
        </span>
        <span className="absolute text-xl opacity-40 select-none" style={{ bottom: '10%', left: '18%' }}>
          🤍
        </span>

        <div className="relative container mx-auto px-6">
          <Link
            to="/"
            className="absolute top-0 left-6 text-xs hover:opacity-70 transition"
            style={{ color: '#B76E8E' }}
          >
            ← YOICHI STORE
          </Link>
          <img src={myuuiLogo} alt="Myuui" className="h-28 md:h-36 object-contain mx-auto mb-6" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#8B7F8F' }}>
            うさぎと過ごす、やさしい時間。
          </h1>
          <p className="max-w-md mx-auto text-sm leading-loose mb-8" style={{ color: '#8B8680' }}>
            Myuuiは、リボンと真珠をモチーフにした、毎日をちょっと可愛くするための
            雑貨・アクセサリーブランドです。
          </p>
          <button
            className="px-8 py-3 rounded-full text-white shadow-md hover:shadow-lg transition"
            style={{ background: 'linear-gradient(90deg, #F5A8C0, #F7C1D4)' }}
          >
            アイテムを見る
          </button>
        </div>
      </section>
      <ScallopDivider />

      {/* Commitments */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-xl font-bold mb-10" style={{ color: '#8B7F8F' }}>
            Myuuiのこだわり
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="rounded-[28px] p-6 text-center bg-white"
                style={{ boxShadow: '0 10px 30px -12px rgba(245,168,192,0.5)' }}
              >
                <p className="text-3xl mb-3">🐰</p>
                <h3 className="font-bold mb-2" style={{ color: '#B76E8E' }}>
                  {c.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: '#8B8680' }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16" style={{ backgroundColor: '#FDEDF1' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-center text-xl font-bold mb-10" style={{ color: '#8B7F8F' }}>
            Myuui Items
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {items.map((item) => (
              <div
                key={item.name}
                className="relative rounded-[28px] overflow-hidden bg-white hover:-translate-y-1 transition duration-300"
                style={{ boxShadow: '0 12px 28px -14px rgba(183,110,142,0.45)' }}
              >
                {item.tag && (
                  <span
                    className="absolute top-3 left-3 z-10 text-[10px] px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: '#F5A8C0' }}
                  >
                    {item.tag}
                  </span>
                )}
                <ImageWithFallback src={item.image} alt={item.name} className="w-full h-44 object-cover" />
                <div className="p-4 text-center">
                  <p className="text-sm font-bold mb-1" style={{ color: '#6B6560' }}>
                    {item.name}
                  </p>
                  <p className="text-sm" style={{ color: '#B76E8E' }}>
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ScallopDivider flip />

      {/* Footer */}
      <footer className="py-10 text-center" style={{ backgroundColor: '#FBDDE7' }}>
        <p className="font-bold mb-1" style={{ color: '#8B7F8F' }}>
          Myuui
        </p>
        <p className="text-xs" style={{ color: '#9E8F96' }}>
          YOICHI STORE Original Brand — &copy; 2026 Myuui. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
