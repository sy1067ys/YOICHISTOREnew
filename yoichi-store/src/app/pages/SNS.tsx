import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Heart, MessageCircle, Share2, User, Instagram, Music } from 'lucide-react';

const mockPosts = [
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            SNSコミュニティ
          </h1>
          <p className="text-xl text-gray-700">
            ユーザー同士がつながり、面白い発見をシェアする場所
          </p>
        </div>
      </section>

      {/* Social Media Links */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl p-8 text-white hover:shadow-2xl transition group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <Instagram size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Instagram</h3>
                  <p className="text-white/80">@yoichistore</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                最新の商品写真やユーザーの投稿をチェック。毎日更新される面白いコンテンツをお楽しみください。
              </p>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-black via-gray-800 to-teal-500 rounded-2xl p-8 text-white hover:shadow-2xl transition group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <Music size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">TikTok</h3>
                  <p className="text-white/80">@yoichistore</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                商品紹介やハウツー動画、ユーザー投稿など、エンターテイメント性の高いコンテンツを配信中。
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Post Creation */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-400 rounded-full flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="面白い発見をシェアしましょう..."
                  className="w-full px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-gradient-to-r from-pink-500 to-blue-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                投稿する
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {mockPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                {/* Post Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <ImageWithFallback
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-800">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.time}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{post.content}</p>
                </div>

                {/* Post Image */}
                {post.image && (
                  <ImageWithFallback
                    src={post.image}
                    alt="投稿画像"
                    className="w-full h-96 object-cover"
                  />
                )}

                {/* Post Actions */}
                <div className="p-6 pt-4">
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition">
                      <Heart size={20} />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition">
                      <MessageCircle size={20} />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-purple-500 transition">
                      <Share2 size={20} />
                      <span>シェア</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="bg-white text-gray-700 px-8 py-3 rounded-full border-2 border-gray-200 hover:border-pink-500 hover:text-pink-500 transition">
              もっと見る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
