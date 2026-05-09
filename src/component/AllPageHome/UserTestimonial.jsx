import Image from 'next/image';

const UserTestimonial = () => {
  const reviews = [
    { 
      id: 1, 
      name: "Tanvir Hasan", 
      comment: "The booking process is so smooth! Love the collection.", 
      rating: 5,
      image: "https://i.pravatar.cc/150?u=4"
    },
    { 
      id: 2, 
      name: "Nila Akter", 
      comment: "Finally found a place to borrow academic books easily.", 
      rating: 4,
      image: "https://i.pravatar.cc/150?u=5"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">What Our Readers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="p-8 rounded-xl bg-blue-50 border-l-4 border-blue-600 text-left flex items-start gap-4">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="rounded-full object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="italic text-gray-600 mb-2">{review.comment}</p>
                <h4 className="font-bold text-gray-800">{review.name}</h4>
                <div className="flex text-yellow-500 text-sm">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTestimonial;