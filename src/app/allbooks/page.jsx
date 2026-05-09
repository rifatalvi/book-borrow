import FeaturdBookCard from "@/component/AllPageHome/FeaturdBookCard";

import { books } from "@/lib/getBooks";

const AllPageCard = async () => {
    const booked = await books();
    return (
        <div className="flex items-center justify-center">

        <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-5">
            {
                booked.map(book => <FeaturdBookCard key={book.id} book={book}></FeaturdBookCard>)
            }
        </div>
            </div>
    );
};

export default AllPageCard;