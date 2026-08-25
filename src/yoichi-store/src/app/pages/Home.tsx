import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, Lightbulb, Palette, ShoppingBag, Star, Users } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              アイデア×デザイン×ショッピング
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              面白いを見つけよう!!
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              YOICHI STOREは、革新的なアイデアと洗練されたデザイン、そして新しいショッピング体験を融合させた、まったく新しいプラットフォームです。
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-blue-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition flex items-center gap-2 group">
              今すぐ始める
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">YOICHI STOREのサービス</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">3つの要素で新しい価値を創造します</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">アイデア</h3>
              <p className="text-gray-700 leading-relaxed">
                常識にとらわれない斬新なアイデアで、お客様のビジネスに新しい価値を提供します。イノベーションを起こすための発想力が私たちの強みです。
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center mb-6">
                <Palette className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">デザイン</h3>
              <p className="text-gray-700 leading-relaxed">
                美しさと機能性を兼ね備えたデザインで、ユーザー体験を最大化します。視覚的な魅力と使いやすさの両立を追求しています。
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">ショッピング</h3>
              <p className="text-gray-700 leading-relaxed">
                次世代のショッピング体験を提供します。楽しく、便利で、驚きに満ちた購買プロセスで、お客様の満足度を高めます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">YOICHI STOREの特徴</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNyZWF0aXZlJTIwZGVzaWdufGVufDF8fHx8MTc4MTAwNDcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="クリエイティブなショッピング体験"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">面白い発見がある</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                私たちは単なるショッピングプラットフォームではありません。毎日新しい「面白い」を発見できる場所です。ユニークな商品、斬新なアイデア、クリエイティブなデザインとの出会いを提供します。
              </p>
              <div className="flex items-start gap-3 mb-4">
                <Star className="text-pink-500 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">厳選されたアイテム</h4>
                  <p className="text-gray-600">デザイナーとバイヤーが厳選した商品のみを掲載</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="text-blue-500 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">パーソナライズド体験</h4>
                  <p className="text-gray-600">あなたの好みに合わせた商品をAIがレコメンド</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-4">革新的なアプローチ</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                テクノロジーとクリエイティビティを組み合わせ、これまでにないショッピング体験を創造します。AR試着、AIコンシェルジュ、インタラクティブな商品紹介など、最新技術を活用しています。
              </p>
              <div className="flex items-start gap-3 mb-4">
                <Users className="text-purple-500 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">コミュニティ主導</h4>
                  <p className="text-gray-600">ユーザー同士が繋がり、インスピレーションを共有</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aXZlJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3ODA5ODcwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="革新的なワークスペース"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">会社概要</h2>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-10 rounded-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMG9mZmljZSUyMHRlYW18ZW58MXx8fHwxNzgwODIzNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="チーム"
                className="w-full h-64 object-cover rounded-xl mb-8"
              />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                YOICHI STOREは、「面白い」を追求し続ける企業です。私たちは、アイデア、デザイン、ショッピングという3つの要素を掛け合わせることで、まったく新しい価値を生み出しています。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                お客様一人ひとりに寄り添い、日常に驚きと喜びをもたらすことが私たちのミッションです。テクノロジーとクリエイティビティの力で、未来のショッピング体験を創造していきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-pink-500 to-blue-400 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>
          <button className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition">
            お問い合わせフォームへ
          </button>
        </div>
      </section>
    </>
  );
}
