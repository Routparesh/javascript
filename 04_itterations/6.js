const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
// const newNums = myNums.filter((n)=>{
//     return n > 5  
//  } )

// const newNums = []
// myNums.forEach((n) => {
//     if(n>5){
//         newNums.push(n)
//     }
// })

// console.log(newNums)

const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      publishDate: 1925,
      edition: 1,
      publicEditions: 5,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publishDate: 1960,
      edition: 1,
      publicEditions: 4,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      publishDate: 1997,
      edition: 1,
      publicEditions: 7,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publishDate: 1937,
      edition: 1,
      publicEditions: 3,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publishDate: 1951,
      edition: 1,
      publicEditions: 6,
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publishDate: 1949,
      edition: 1,
      publicEditions: 5,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      publishDate: 1813,
      edition: 1,
      publicEditions: 4,
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publishDate: 1954,
      edition: 1,
      publicEditions: 3,
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Adventure",
      publishDate: 1988,
      edition: 1,
      publicEditions: 6,
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      genre: "Adventure",
      publishDate: 1851,
      edition: 1,
      publicEditions: 3,
    }
];

// const userBooks= books.filter((n)=>{
//     return n.genre === "Adventure"
// })


const userBooks = books.filter((n)=>n.publishDate >= 1951 && n.genre === 'Adventure');
console.log(userBooks)