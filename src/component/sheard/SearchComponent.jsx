"use client";

import { SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchComponent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    
    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        router.push(`?${params.toString()}`);
    }, 300);

    return (
        <SearchField 
            defaultValue={searchParams.get("query")?.toString()} 
            onChange={(term) => handleSearch(term)}
        >
            <SearchField.Group>
                <SearchField.SearchIcon />
                <SearchField.Input className="w-[280px]" placeholder="Search by title..." />
                <SearchField.ClearButton onClick={() => handleSearch("")} />
            </SearchField.Group>
        </SearchField>
    );
};

export default SearchComponent;