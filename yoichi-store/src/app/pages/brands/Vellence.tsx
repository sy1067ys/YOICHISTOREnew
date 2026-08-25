import { Link } from 'react-router';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import vellenceLogo from '../../assets/vellence-logo.png';

const collection = [
  {
    name: 'Noir',
    type: 'レザートートバッグ',
    price: '¥98,000〜',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    note: '一枚革を手縫いで仕立てた、経年変化を愉しむための定番。',
  },
  {
    name: 'Aurum',
    type: 'ゴールドチェーンネックレス',
    price: '¥64,000〜',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    note: '18金仕上げのチェーンを、職人が一連ずつ手作業で連結。',
  },
  {
    name: 'Heritage',
    type: '長財布',
    price: '¥52,000〜',
    image:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    note: '内装には別注のスエードを使用し、使うほどに手に馴染む。',
  },
  {
    name: 'Ombre',
    type: 'シルクスカーフ',
    price: '¥38,000〜',
    image:
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    note: '京都の織元と共同開発した、グラデーションが美しい一枚。',
  },
];

export default function Vellence() {
  return (
    <div
      style={{
        // Vellence design tokens
        // --v-bg: near-black stage · --v-panel: deep charcoal panel
        // --v-gold: foil gold (matches logo) · --v-gold-light: highlight gold
        // --v-ivory: warm off-white text · --v-line: hairline gold divider
        ['--v-bg' as string]: '#0b0b0c',
        ['--v-panel' as string]: '#151513',
        ['--v-gold' as string]: '#c9a544',
        ['--v-gold-light' as string]: '#e9d08a',
        ['--v-ivory' as string]: '#f3eee3',
        ['--v-line' as string]: 'rgba(201,165,68,0.28)',
        backgroundColor: 'var(--v-bg)',
        color: 'var(--v-ivory)',
        fontFamily:
          '"Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif',
      }}
      className="min-h-screen"
    >
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(115deg, var(--v-gold) 0px, var(--v-gold) 1px, transparent 1px, transparent 120px)',
          }}
        />
        <div className="relative container mx-auto px-6 pt-24 pb-28 flex flex-col items-center text-center">
          <Link
            to="/"
            className="absolute top-6 left-6 text-xs hover:opacity-70 transition"
            style={{ color: 'var(--v-gold)', letterSpacing: '0.1em' }}
          >
            ← YOICHI STORE
          </Link>
          <img src={vellenceLogo} alt="VELLENCE" className="h-24 md:h-32 object-contain mb-10" />
          <p
            className="text-xs md:text-sm mb-6"
            style={{ color: 'var(--v-gold)', letterSpacing: '0.45em' }}
          >
            LEATHER &amp; JEWELRY ATELIER
          </p>
          <h1
            className="max-w-2xl mb-8 leading-[1.6]"
            style={{
              fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 500,
            }}
          >
            削ぎ落とした美しさに、
            <br />
            確かな仕立てを。
          </h1>
          <p className="max-w-md text-sm leading-loose" style={{ color: 'rgba(243,238,227,0.7)' }}>
            VELLENCEは、流行に左右されない佇まいを求める人のための、
            レザーとジュエリーのアトリエブランドです。一点ずつ、職人の手で。
          </p>
        </div>

        {/* Diagonal seam — echoes the logo's cut blade */}
        <div
          className="h-24 md:h-32"
          style={{
            background: 'var(--v-panel)',
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
          }}
        />
      </section>

      {/* Philosophy — vertical gold spine */}
      <section className="relative" style={{ backgroundColor: 'var(--v-panel)' }}>
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-px h-40" style={{ backgroundColor: 'var(--v-line)' }} />
              <p
                className="mt-4 text-[10px]"
                style={{
                  writingMode: 'vertical-rl',
                  color: 'var(--v-gold)',
                  letterSpacing: '0.3em',
                }}
              >
                PHILOSOPHY
              </p>
            </div>
            <div>
              <p
                className="mb-6 leading-[1.9]"
                style={{
                  fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", serif',
                  fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                  color: 'var(--v-gold-light)',
                }}
              >
                「本物だけを、少しだけ。」
              </p>
              <p className="max-w-xl text-sm leading-loose" style={{ color: 'rgba(243,238,227,0.75)' }}>
                大量生産では出せない質感を守るため、VELLENCEはひとつのアイテムを
                年間で決まった数しか仕立てません。素材選びから縫製、金具の磨きまで、
                すべての工程に職人の判断が入ります。何十年経っても手放したくならない
                ものだけを、私たちは世に出しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12 border-b pb-6" style={{ borderColor: 'var(--v-line)' }}>
          <h2
            style={{
              fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", serif',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            }}
          >
            The Collection
          </h2>
          <p className="text-xs" style={{ color: 'var(--v-gold)', letterSpacing: '0.2em' }}>
            SELECTED PIECES
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--v-line)' }}>
          {collection.map((item) => (
            <div key={item.name} className="group p-6 transition-colors" style={{ backgroundColor: 'var(--v-bg)' }}>
              <div className="overflow-hidden mb-5">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition duration-700"
                />
              </div>
              <p className="text-[11px] mb-1" style={{ color: 'var(--v-gold)', letterSpacing: '0.15em' }}>
                {item.type}
              </p>
              <h3
                className="mb-2"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '1.05rem',
                  letterSpacing: '0.06em',
                }}
              >
                {item.name}
              </h3>
              <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(243,238,227,0.6)' }}>
                {item.note}
              </p>
              <p className="text-sm" style={{ color: 'var(--v-gold-light)' }}>
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: 'var(--v-line)' }}>
        <div className="container mx-auto px-6 flex flex-col items-center gap-2 text-center">
          <p style={{ color: 'var(--v-gold)', letterSpacing: '0.3em', fontSize: '0.9rem' }}>VELLENCE</p>
          <p className="text-xs" style={{ color: 'rgba(243,238,227,0.45)' }}>
            YOICHI STORE Original Brand — &copy; 2026 VELLENCE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
