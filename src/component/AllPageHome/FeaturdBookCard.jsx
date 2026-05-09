import Image from 'next/image';
import Link from 'next/link';

const FeaturdBookCard = ({ book }) => {
  const { title, image_url, author, category, rating, _id } = book;

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1">
      {/* Book Image Container */}
      <div className="relative w-full h-[280px] overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={image_url}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
          {category}
        </span>
      </div>

      {/* Book Content */}
      <div className="mt-5 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500 font-medium">
            <span>★</span>
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 font-medium">by {author}</p>

        {/* Action Button */}
        <div className="pt-4">
          <Link href={`/books/${_id}`}>
            <button className="w-full py-3 px-4 bg-gray-900 text-white text-sm font-semibold rounded-xl transition-all hover:bg-blue-600 active:scale-95">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturdBookCard;