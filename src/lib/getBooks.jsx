export const books = async ()=>{
    const res = await fetch('https://book-borrow-zeta.vercel.app/book.json');
    const data = await res.json();
    
     return data;

}
export const booksCategory = async ()=>{
    const res = await fetch('https://book-borrow-zeta.vercel.app/category.json');
    const data = await res.json();
    
     return data;

}