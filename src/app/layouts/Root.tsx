import { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoImage from '../../imports/__________2026-06-09_202237-1.png';

const navItems = [
  { label: '商品', to: '/#products' },
  { label: 'サービス', to: '/#services' },
  { label: '特徴', to: '/#features' },
  { label: '会社概要', to: '/#about' },
  { label: 'SNS', to: '/sns' },
];

export default function Root() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // ページ移動・見出し(#)移動のあとにスクロール位置を合わせる
  useEffect(() => {
    setOpen(false);
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return (
    <div
      className="min-h-screen bg-white text-[#1c2230]"
      style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif' }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#e6e8ee]">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" aria-label="YOICHI STORE ホーム">
            <ImageWithFallback src={logoImage} alt="YOICHI STORE" className="h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="メインメニュー">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="text-[#4b5365] hover:text-[#1c2230] transition-colors">
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="rounded-full bg-[#1c2230] px-5 py-2 text-white hover:bg-[#2f3748] transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-[#1c2230] rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4a86e8]"
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-[#e6e8ee] bg-white" aria-label="モバイルメニュー">
            <div className="mx-auto max-w-6xl px-6 py-2 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="py-4 border-b border-[#eef0f4] text-[#1c2230]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                className="my-4 rounded-full bg-[#1c2230] px-5 py-3 text-center text-white"
                onClick={() => setOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e6e8ee] bg-[#f6f7f9]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <p
                className="text-xl tracking-wide"
                style={{ fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif' }}
              >
                YOICHI STORE
              </p>
              <p className="mt-3 text-sm text-[#5d6577]">アイデア × デザイン × ショッピング</p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#4b5365]" aria-label="フッターメニュー">
              {navItems.map((item) => (
                <Link key={item.label} to={item.to} className="hover:text-[#1c2230] transition-colors">
                  {item.label}
                </Link>
              ))}
              <Link to="/#contact" className="hover:text-[#1c2230] transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>
          <p className="mt-12 text-xs text-[#7b8294]">&copy; 2026 YOICHI STORE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
