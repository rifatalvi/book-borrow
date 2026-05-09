import FeaturdBookCard from "@/component/AllPageHome/FeaturdBookCard";

import { books } from "@/lib/getBooks";

const AllPageCard = async () => {
    const booked = await books();
    return (
        <div>
            {
                booked.map(book => <FeaturdBookCard key={book._id} book={book}></FeaturdBookCard>)
            }
        </div>
    );
};

export default AllPageCard;