// object creation without interface......
let users: {
  id: number;
  name: string;
  age: number;
}[] = [];
let user1: {
  id: number;
  name: string;
  age: number;
} = {
  id: 1,
  name: "Mehedi",
  age: 25,
};
let user2: {
  id: number;
  name: string;
  age: number;
} = {
  id: 2,
  name: "Hasan",
  age: 30,
};

users.push(user1);
users.push(user2);

const printUserInfo = (users: { id: number; name: string; age: number }) => {
  //console.log(
  `this is my Id: ${users.id} my Name: ${users.name} and my age: ${users.age}`;
  // );
};
users.forEach((users) => printUserInfo(users));
//object creation with interface.....

interface iBookInfo {
  bookId: number;
  bookName: string;
}
let bookIf: iBookInfo[] = [];
let bookinfo1: iBookInfo = { bookId: 101, bookName: "man is a machine" };
let bookinfo2: iBookInfo = { bookId: 102, bookName: "machine for life" };
bookIf.push(bookinfo1);
bookIf.push(bookinfo2);

const printbookInfo = (bookfoo: iBookInfo) => {
  console.log(` book Id: ${bookfoo.bookId} book name: ${bookfoo.bookName}`);
};
bookIf.forEach((bookfoo) => printbookInfo(bookfoo));
