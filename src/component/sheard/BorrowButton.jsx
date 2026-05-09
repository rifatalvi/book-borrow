"use client"; // Eita must!

import { toast } from 'react-toastify';

const BorrowButton = () => {
    const handleBorrow = () => {
        toast.success("Book borrowed successfully!");
        // Ekhane tumi pore backend logic ba redirect add korte parbe
    };

    return (
        <button
            onClick={handleBorrow}
            className="w-full md:w-max px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all active:scale-95 duration-200"
        >
            Borrow This Book
        </button>
    );
};

export default BorrowButton;