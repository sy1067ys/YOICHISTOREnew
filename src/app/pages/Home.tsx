import { useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const serif = { fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif' };

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`;

const categories = ['すべて', 'バッグ・財布', 'アクセサリー', '雑貨', '文具'] as const;
type Category = (typeof categories)[number];

const products: { name: string; price: string; category: Exclude<Category, 'すべて'>; tag?: string; image: string }[] = [
  { name: '手縫いレザートート', price: '¥98,000〜', category: 'バッグ・財布', tag: '人気', image: unsplash('photo-1584917865442-de89df76afd3') },
  { name: 'ゴールドチェーンネックレス', price: '¥64,000〜', category: 'アクセサリー', image: unsplash('photo-1599643478518-a784e5dc4c8f') },
  { name: 'スエード内装の長財布', price: '¥52,000〜', category: 'バッグ・財布', image: unsplash('photo-1627123424574-724758594e93') },
  { name: 'シルクグラデーションスカーフ', price: '¥38,000〜', category: 'アクセサリー', image: unsplash('photo-1601924994987-69e26d50dc26') },
  { name: 'うさ耳ヘアクリップ', price: '¥1,800', category: 'アクセサリー', tag: 'NEW', image: unsplash('photo-1620656798579-1984d9e87df7') },
  { name: 'パールリボンチャーム', price: '¥2,400', category: 'アクセサリー', tag: '人気', image: unsplash('photo-1611085583191-a3b181a88401') },
  { name: 'もこもこぬいぐるみポーチ', price: '¥3,200', category: 'バッグ・財布', image: unsplash('photo-1584589167171-541ce45f1eea') },
  { name: '遊び心ステーショナリー', price: '¥1,600〜', category: '文具', tag: 'NEW', image: unsplash('photo-1519389950473-47ba0277781c') },
  { name: 'デザイナーズトート', price: '¥4,200', category: 'バッグ・財布', tag: '限定', image: unsplash('photo-1544816155-12df9643f363') },
  { name: 'インテリア雑貨コラボ', price: '¥2,800〜', category: '雑貨', image: unsplash('photo-1493663284031-b7e3aefcae8e') },
  { name: 'リミテッドグッズ', price: '¥3,400', category: '雑貨', tag: '限定', image: unsplash('photo-1607083206968-13611e3d76db') },
  { name: 'リボンレターセット', price: '¥1,200', category: '文具', image: unsplash('photo-1519791883288-dc8bd696e667') },
];

const services = [
  {
    title: 'アイデア',
    body: '常識にとらわれない発想で、お客様のビジネスに新しい価値を届けます。',
  },
  {
    title: 'デザイン',
    body: '美しさと使いやすさを両立し、見た人の心に残る体験をつくります。',
  },
  {
    title: 'ショッピング',
    body: '楽しく、便利で、ちょっと驚く。そんな買い物の時間を提供します。',
  },
];

const features = [
  {
    title: '厳選されたアイテム',
    body: 'デザイナーとバイヤーが選んだ商品だけを掲載しています。',
  },
  {
    title: 'あなたに合う提案',
    body: '好みに合わせて、AIが商品をおすすめします。',
  },
  {
    title: 'つながるコミュニティ',
    body: 'ユーザー同士がインスピレーションを共有できます。',
  },
];

export default function Home() {
  const [category, setCategory] = useState<Category>('すべて');
  const visible = category === 'すべて' ? products : products.filter((p) => p.category === category);

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h1
              className="text-[2.5rem] leading-[1.25] md:text-[4rem] tracking-tight font-medium"
              style={serif}
            >
              面白いを、
              <br />
              見つけよう。
            </h1>
            <p className="mt-8 max-w-lg text-base leading-8 text-[#4b5365] [text-wrap:balance]">
              アイデア × デザイン × ショッピング。
              <br />
              毎日の暮らしに、ちょっとした驚きを添える商品を集めました。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/#products"
                className="rounded-full bg-[#1c2230] px-8 py-3.5 text-white hover:bg-[#2f3748] transition-colors"
              >
                商品を見る
              </Link>
              <Link
                to="/#contact"
                className="rounded-full border border-[#c9cdd8] px-8 py-3.5 text-[#1c2230] hover:border-[#1c2230] transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-5 gap-4 items-end">
            <ImageWithFallback
              src={products[0].image}
              alt={products[0].name}
              className="col-span-3 w-full aspect-[3/4] object-cover"
            />
            <div className="col-span-2 grid gap-4">
              <ImageWithFallback
                src={products[5].image}
                alt={products[5].name}
                className="w-full aspect-square object-cover"
              />
              <ImageWithFallback
                src={products[7].image}
                alt={products[7].name}
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-20 bg-[#f6f7f9] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl md:text-4xl font-medium" style={serif}>
              ピックアップ商品
            </h2>
            <div className="flex flex-wrap gap-2" role="group" aria-label="カテゴリで絞り込む">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={`rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4a86e8] ${
                    category === c
                      ? 'bg-[#1c2230] text-white'
                      : 'bg-white text-[#4b5365] border border-[#e0e3ea] hover:border-[#1c2230]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {visible.map((p) => (
              <li key={p.name}>
                <div className="relative overflow-hidden bg-white">
                  <ImageWithFallback src={p.image} alt={p.name} className="w-full aspect-square object-cover" />
                  {p.tag && (
                    <span className="absolute left-3 top-3 bg-white px-2.5 py-1 text-xs text-[#d8587f]">{p.tag}</span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-[#1c2230]">{p.name}</p>
                <p className="mt-1 text-sm text-[#5d6577]">{p.price}</p>
              </li>
            ))}
          </ul>

          <p className="mt-14 text-sm text-[#5d6577]">
            ご購入やご相談は、
            <Link to="/#contact" className="text-[#1c2230] underline underline-offset-4 hover:text-[#4a86e8]">
              お問い合わせ
            </Link>
            からお気軽にどうぞ。
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-medium" style={serif}>
            3つの要素で、新しい価値を。
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
            {services.map((s) => (
              <div key={s.title} className="border-t border-[#1c2230] pt-6">
                <h3 className="text-xl font-medium" style={serif}>
                  {s.title}
                </h3>
                <p className="mt-4 max-w-xs text-[15px] leading-8 text-[#4b5365]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-20 bg-[#f6f7f9] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="クリエイティブなショッピング体験"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <h2 className="text-3xl md:text-4xl font-medium" style={serif}>
              毎日、新しい発見がある。
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[#4b5365]">
              単なるショッピングの場ではなく、ユニークな商品や斬新なアイデアとの出会いを届けるお店です。
            </p>
            <ul className="mt-8 divide-y divide-[#e0e3ea] border-y border-[#e0e3ea]">
              {features.map((f) => (
                <li key={f.title} className="py-5">
                  <p className="font-medium">{f.title}</p>
                  <p className="mt-1 text-sm leading-7 text-[#5d6577]">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-12">
          <h2 className="md:col-span-4 text-3xl md:text-4xl font-medium" style={serif}>
            会社概要
          </h2>
          <div className="md:col-span-7 space-y-6 text-[15px] leading-8 text-[#4b5365]">
            <p>
              YOICHI STOREは、「面白い」を追求し続けるお店です。アイデア、デザイン、ショッピングの3つを掛け合わせ、これまでにない価値を生み出しています。
            </p>
            <p>
              お客様一人ひとりに寄り添い、日常に驚きと喜びを届けることが私たちの役目です。テクノロジーとクリエイティビティの力で、未来のショッピング体験をつくっていきます。
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-[#1c2230] text-white">
        <div className="h-[3px] bg-gradient-to-r from-[#d8587f] to-[#4a86e8]" />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-medium" style={serif}>
            お問い合わせ
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-8 text-white/75 [text-wrap:balance]">
            ご質問やご相談は、SNSのメッセージからお気軽にご連絡ください。
          </p>
          <Link
            to="/sns"
            className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-[#1c2230] hover:bg-[#eef0f4] transition-colors"
          >
            SNSから連絡する
          </Link>
        </div>
      </section>
    </>
  );
}
