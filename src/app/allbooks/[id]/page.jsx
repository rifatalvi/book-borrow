

import BorrowButton from '@/component/sheard/BorrowButton';
import { books } from '@/lib/getBooks';
import Image from 'next/image';
import { toast } from 'react-toastify';

const DetailPage = async ({ params }) => {
    const booked = await books();
    const { id } = await params;
  
    
    const book = booked.find(book => book.id == id);

    if (!book) {
        return <div className="text-center py-20 text-2xl font-bold">Book not found!</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start bg-white shadow-2xl rounded-2xl overflow-hidden p-6 md:p-10">

                {/* Left Side: Large Book Cover */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                        <Image
                            src={book.image_url}
                            alt={book.title}
                            width={400}
                            height={600}
                            className="object-cover w-full h-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full lg:w-2/3 flex flex-col space-y-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                            {book.title}
                        </h1>
                        <p className="text-xl text-blue-600 font-medium italic">
                            By {book.author || "Unknown Author"}
                        </p>
                    </div>

                    <div className="border-t border-b py-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {book.description || "No description available for this book. It's a journey waiting to be explored."}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="px-4 py-2 bg-green-100 text-green-700 font-bold rounded-full text-sm">
                            {book.quantity || 5} copies left
                        </span>
                        <span className="text-gray-500 text-sm italic">
                            Available for Borrowing
                        </span>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                       <BorrowButton></BorrowButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;