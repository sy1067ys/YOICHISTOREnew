import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const products = [
  {
    name: '遊び心ステーショナリー',
    price: '¥1,600〜',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    sticker: 'NEW',
    rotate: '-rotate-3',
    color: '#EC4899',
  },
  {
    name: 'デザイナーズトート',
    price: '¥4,200',
    image:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    sticker: '限定',
    rotate: 'rotate-2',
    color: '#3B82F6',
  },
  {
    name: 'インテリア雑貨コラボ',
    price: '¥2,800〜',
    image:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    sticker: '人気',
    rotate: '-rotate-2',
    color: '#A855F7',
  },
  {
    name: 'リミテッドグッズ',
    price: '¥3,400',
    image:
      'https://images.unsplash.com/photo-1607083206968-13611e3d76db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    sticker: 'あと僅か',
    rotate: 'rotate-3',
    color: '#EC4899',
  },
];

export default function YoichiOriginal() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif' }}
    >
      {/* Hero — diagonal split color block */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(115deg, #FDE7F3 0%, #FDE7F3 46%, #E4EEFD 54%, #E4EEFD 100%)',
          }}
        />
        <div className="relative container mx-auto px-6 text-center">
          <p
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-6 text-white"
            style={{ background: 'linear-gradient(90deg, #EC4899, #3B82F6)' }}
          >
            YOICHI STORE ORIGINALS
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-800">
            見つけるたびに、
            <br />
            ちょっと面白い。
          </h1>
          <p className="max-w-xl mx-auto text-gray-600 leading-relaxed">
            YOICHI STOREが自信を持って届ける、自社オリジナルのプロダクトライン。
            アイデア出しから設計、パッケージまで、私たちのチームが手がけています。
          </p>
        </div>
      </section>

      {/* Moodboard-style product grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-14 text-gray-800">ORIGINAL PRODUCTS</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {products.map((p) => (
              <div key={p.name} className={`relative ${p.rotate} hover:rotate-0 transition duration-300`}>
                {/* sticker tag */}
                <div
                  className="absolute -top-3 -right-3 z-10 w-16 h-16 rounded-full flex items-center justify-center text-white text-[11px] font-bold shadow-lg text-center leading-tight rotate-6"
                  style={{ backgroundColor: p.color }}
                >
                  {p.sticker}
                </div>
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                  <ImageWithFallback src={p.image} alt={p.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <p className="font-bold text-gray-800 mb-1">{p.name}</p>
                    <p className="text-sm text-gray-500">{p.price}</p>
                  </div>
                </div>
                {/* washi-tape effect */}
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-5 opacity-70 -rotate-2"
                  style={{ backgroundColor: p.color, filter: 'saturate(0.6)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Idea x Design x Shopping band */}
      <section
        className="py-16 text-white text-center"
        style={{ background: 'linear-gradient(90deg, #EC4899, #3B82F6)' }}
      >
        <div className="container mx-auto px-6">
          <p className="text-2xl md:text-3xl font-bold mb-3">アイデア × デザイン × ショッピング</p>
          <p className="text-white/90 max-w-md mx-auto">
            私たちが本当に欲しいと思うものだけを、自分たちの手で形にしています。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-gray-900 text-gray-400">
        <p className="text-white font-bold mb-1">YOICHI STORE ORIGINALS</p>
        <p className="text-xs">&copy; 2026 YOICHI STORE. All rights reserved.</p>
      </footer>
    </div>
  );
}
