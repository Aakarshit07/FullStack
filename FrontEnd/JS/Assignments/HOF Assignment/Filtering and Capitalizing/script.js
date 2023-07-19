const books = [
    {
        title: "The Body", 
        author: "suzanne collins", 
        years: 2008
    },
    {
        title: "Harry Potter", 
        author: "j.k. rowling", 
        years: 1997
    },
    {
        title: "How to Talk to anyone",  
        author: "lee lawrance", 
        years: 2018
    },
    {
        title: "Rich Dad Poor Dad",  
        author: "fitzgeral scott", 
        years: 1990
    },
    
];

const filtered = books
    .filter((book) => book.years <=2010)
    .map((book) => ({
        ...book, 
        author: book.author
        .split(" ")
        .map((author) => author.replace(author[0], author[0].toLocaleUpperCase()))
        .join(" "),
}));

console.log(filtered);
