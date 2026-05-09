import Image from 'next/image';

const TopReaders = () => {
  const readers = [
    { id: 1, name: "Arif Ahmed", books: 45, image: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Sumaiya Khan", books: 38, image: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Rifat Alvi", books: 32, image: "https://i.pravatar.cc/150?u=3" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Top Readers Leaderboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {readers.map((reader, index) => (
            <div key={reader.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="relative w-20 h-20">
                {/* Next.js Image Component */}
                <Image
                  src={reader.image}
                  alt={reader.name}
                  fill
                  className="rounded-full object-cover border-4 border-blue-500"
                  sizes="80px"
                />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 text-sm">
                  #{index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-700">{reader.name}</h3>
              <p className="text-gray-500">{reader.books} Books Borrowed</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopReaders;