import { Outlet, Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoImage from '../../imports/__________2026-06-09_202237-1.png';

export default function Root() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <ImageWithFallback
              src={logoImage}
              alt="YOICHI STORE"
              className="h-24 object-contain"
            />
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-500 transition">
              ホーム
            </Link>
            <Link to="/sns" className="text-gray-700 hover:text-blue-500 transition">
              SNS
            </Link>
            <a href="#about" className="text-gray-700 hover:text-blue-500 transition">
              会社概要
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-500 transition">
              サービス
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-500 transition">
              特徴
            </a>
            <a href="#contact" className="bg-gradient-to-r from-pink-500 to-blue-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
              お問い合わせ
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-2xl font-bold">YOICHI STORE</p>
              <p className="text-gray-400 mt-2">アイデア×デザイン×ショッピング</p>
            </div>
            <div className="flex gap-8">
              <Link to="/" className="text-gray-400 hover:text-white transition">
                ホーム
              </Link>
              <Link to="/sns" className="text-gray-400 hover:text-white transition">
                SNS
              </Link>
              <a href="#about" className="text-gray-400 hover:text-white transition">
                会社概要
              </a>
              <a href="#services" className="text-gray-400 hover:text-white transition">
                サービス
              </a>
              <a href="#features" className="text-gray-400 hover:text-white transition">
                特徴
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition">
                お問い合わせ
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 YOICHI STORE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
