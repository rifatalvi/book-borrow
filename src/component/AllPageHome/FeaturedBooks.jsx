import { books } from "@/lib/getBooks";
import FeaturdBookCard from "./FeaturdBookCard";

const FeaturedBooks = async () => {
    const data = await books();
    console.log(data);
    return (
        <div className="container  mx-auto">
            <h2 className="text-3xl font-bold">Featured Books</h2>
            <p>Hand-picked by our editors this week.

            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-9 ">
               {
                data.slice(0,4).map(book => <FeaturdBookCard key={book.id} book={book}>
                   
                </FeaturdBookCard>)
               }
            </div>
        </div>
    );
};

export default FeaturedBooks;