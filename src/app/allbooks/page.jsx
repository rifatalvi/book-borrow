

import FeaturdBookCard from "@/component/AllPageHome/FeaturdBookCard";
import { books, booksCategory } from "@/lib/getBooks";

import Link from "next/link";
import { Button } from "@heroui/react";
import SearchComponent from "@/component/sheard/SearchComponent";

const AllPageCard = async ({ searchParams }) => {
    
    const booked = await books();
    
    
    const params = await searchParams;
    const category = params?.category;
    const query = params?.query;

    const displayBooks = booked.filter((book) => {
        
        const matchesCategory = category 
            ? book.category?.toLowerCase() === category.toLowerCase() 
            : true;
        
        
        const matchesSearch = query 
            ? book.title?.toLowerCase().includes(query.toLowerCase()) 
            : true;

        return matchesCategory && matchesSearch;
    });

    const categorys = await booksCategory();

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full lg:flex justify-between items-center my-11 px-4">
                
             
                <div className="flex flex-wrap gap-4 mb-4 lg:mb-0">
                    <Link href="/allbooks">
                        <Button size="sm" variant={!category ? "solid" : "bordered"}>All</Button>
                    </Link>
                    
                    {categorys.map(cat => (
                        <Link key={cat.id} href={`?category=${cat.category}${query ? `&query=${query}` : ""}`}>
                            <Button 
                                size="sm" 
                                color="primary" 
                                variant={category === cat.category ? "solid" : "flat"}
                            >
                                {cat.category}
                            </Button>
                        </Link>
                    ))}
                </div>

                {/* Search Component */}
                <SearchComponent />
            </div>

            {/* Book Display Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                {displayBooks.length > 0 ? (
                    displayBooks.map(book => (
                        <FeaturdBookCard key={book.id} book={book} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 bg-gray-50 rounded-xl">
                        <p className="text-xl font-bold text-gray-400 italic">
                             Oppss! {query} namer kono boi pawa jayni.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllPageCard;