import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Heart, MessageCircle, Instagram, Music, ArrowUpRight } from 'lucide-react';

const serif = { fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif' };

const channels = [
  {
    name: 'Instagram',
    handle: '@yoichistore',
    href: 'https://www.instagram.com',
    body: '新商品の写真や、ユーザーの投稿をチェックできます。',
    Icon: Instagram,
  },
  {
    name: 'TikTok',
    handle: '@yoichistore',
    href: 'https://www.tiktok.com',
    body: '商品紹介やハウツー動画を配信しています。',
    Icon: Music,
  },
];

const posts = [
  {
    id: 1,
    author: '山田太郎',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    time: '2時間前',
    content: 'YOICHI STOREで見つけた新商品が素晴らしい！デザインが本当にユニークで気に入りました。',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    likes: 42,
    comments: 8,
  },
  {
    id: 2,
    author: '佐藤花子',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    time: '5時間前',
    content: '今日のおすすめアイテムをシェア！このカラフルな商品は見ているだけで元気が出ます。',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    likes: 67,
    comments: 15,
  },
  {
    id: 3,
    author: '鈴木一郎',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    time: '1日前',
    content: 'アイデアとデザインが融合した商品を発見。こういう面白いものを探すのが楽しい！',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    likes: 89,
    comments: 22,
  },
];

export default function SNS() {
  return (
    <>
      {/* Title */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <h1 className="text-[2.25rem] leading-[1.3] md:text-5xl font-medium tracking-tight" style={serif}>
            SNSコミュニティ
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-[#4b5365]">
            ユーザー同士がつながり、面白い発見をシェアする場所です。
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <ul className="grid gap-4 md:grid-cols-2">
            {channels.map(({ name, handle, href, body, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 border border-[#e0e3ea] p-6 transition-colors hover:border-[#1c2230] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4a86e8]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f6f7f9] text-[#1c2230]">
                    <Icon size={22} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-medium">
                      {name} <span className="ml-1 text-sm font-normal text-[#7b8294]">{handle}</span>
                    </span>
                    <span className="mt-1 block text-sm leading-7 text-[#5d6577]">{body}</span>
                  </span>
                  <ArrowUpRight size={20} className="shrink-0 text-[#7b8294] group-hover:text-[#1c2230] transition-colors" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-[#f6f7f9] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-3xl font-medium" style={serif}>
            みんなの投稿
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <li key={post.id} className="flex flex-col bg-white">
                <ImageWithFallback src={post.image} alt="投稿された写真" className="w-full aspect-[4/3] object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[15px] leading-8 text-[#2f3748]">{post.content}</p>
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#eef0f4]">
                    <ImageWithFallback
                      src={post.avatar}
                      alt={post.author}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{post.author}</p>
                      <p className="text-xs text-[#7b8294]">{post.time}</p>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-[#5d6577]">
                      <Heart size={14} aria-hidden="true" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#5d6577]">
                      <MessageCircle size={14} aria-hidden="true" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
