# javascript
Assignment: Library Management System

Problem Statement:

Library Management System using OOP principles in JavaScript. The system should allow the library to manage books, members, and borrowing/returning of books.

Requirements

1. Classes and Objects:

Create the following classes:

Book: Represents a book in the library.

Member: Represents a library member.

Library: Represents the library system.

2. Attributes:

Book:

id: Unique identifier for the book.

title: The title of the book.

author: The author of the book.

isävailable: Boolean indicating whether the book is available for

borrowing.

Member:

d: Unique identifier for the member.

name: Name of the member.

borrowedBooks: List of books borrowed by the member.

Library:

books: Collection of books available in the library.

members: Collection of registered members.

3. Functional Requirements:

Implement the following features:

1. Add Books: Allow adding new books to the library.

2. Register Members: Allow new members to register with the library.

3. Borrow Book: A member can borrow a book if it's available

4. Return Book: A member can return a borrowed book.

5. View All Books: Display all books in the library with their status (available or not).

6. View Member Info: Display the borrowed books and member details.

4. Additional Features:

Add a limit on the number of books a member can borrow.

Add a search feature to find books by title or author.

<!DOCTYPE html>
<head>
    <title>Library Management System</title>
</head>
<body>
    <script>
        class Book {
            constructor(id, title, author){
                this.id = id;
                this.title = title;
                this.author = author;
                this.isAvailable = true;
            }
        }

        class Member { 
            constructor(id, name){
                this.id = id;
                this.name = name;
                this.borrowedBooks = [];
            }

            canBorrow() {
                return this.borrowedBooks.length < 5;
            }
        }

        class Library {
            constructor(){
                this.books = [];
                this.members = [];
            }

            addBook(id, title, author){
                const book = new Book(id, title, author);
                this.books.push(book);
                console.log(`${title} book is added`);
            }

            registerMember(id, name){
                const member = new Member(id, name);
                this.members.push(member);
                console.log(`Member "${name}" is registered`);
            }

            borrowBook(memberId, bookId){
                const member = this.members.find(m => m.id === memberId);
                const book = this.books.find(b => b.id === bookId);

                if (!member) {
                    console.error("Member is not registered");
                    return;
                }

                if (!book) {
                    console.error("Book is not available in the library");
                    return;
                }

                if (!book.isAvailable) {
                    console.error("Book is not available");
                    return;
                }

                if (!member.canBorrow()) {
                    console.error("Member has reached the borrowing limit");
                    return;
                }

                book.isAvailable = false;
                member.borrowedBooks.push(book);
                console.log(`Book "${book.title}" is borrowed by ${member.name}`);
            }

            returnBook(memberId, bookId){
                const member = this.members.find(m => m.id === memberId);
                const book = this.books.find(b => b.id === bookId);

                if (!member) {
                    console.error("Member is not registered");
                    return;
                }

                if (!book) {
                    console.error("Book with this ID is not found");
                    return;
                }

                book.isAvailable = true;
                member.borrowedBooks = member.borrowedBooks.filter(b => b.id !== bookId);
                console.log(`Book "${book.title}" is returned by ${member.name}`);
            }

            viewBooks(){
                console.log("Book List:");
                this.books.forEach(book => {
                    console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Available: ${book.isAvailable}`);
                });
            }

            viewMemberInfo(memberId){
                const member = this.members.find(m => m.id === memberId);
                
                if (!member) {
                    console.error("Member not found");
                    return;
                }

                console.log(`Member Name: ${member.name}`)
                console.log("Borrowed Books:");
                member.borrowedBooks.forEach(book => {
                    console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
                });
            }

            searchBooks(keyword) {
                const searchResults = this.books.filter(book => book.title.includes(keyword) || book.author.includes(keyword));
                console.log("Search Results:");
                searchResults.forEach(book => {
                    console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Available: ${book.isAvailable}`);
                });
            }
        }

        const library = new Library();
        library.addBook(1234, "Let Us C", "Yashwant Kanetkar");

        function makeChoice(){
            let choice;
            do {
                choice = prompt("Enter your choice:\n1. Add Book\n2. Register New Member\n3. Borrow Book\n4. Return Book\n5. View All Books\n6. View Member Info\n7. Search Books\n8. Exit");

                switch(choice){
                    case "1":
                        const bookId = prompt("Enter book ID:");
                        const bookTitle = prompt("Enter book title:");
                        const bookAuthor = prompt("Enter book author:");
                        library.addBook(bookId, bookTitle, bookAuthor);
                        break;
                    case "2":
                        const memberId = prompt("Enter member ID:");
                        const memberName = prompt("Enter member name:");
                        library.registerMember(memberId, memberName);
                        break;
                    case "3":
                        const borrowBookId = prompt("Enter book ID:");
                        const borrowMemberId = prompt("Enter member ID:");
                        library.borrowBook(borrowMemberId, borrowBookId);
                        break;
                    case "4":
                        const returnBookId = prompt("Enter book ID:");
                        const returnMemberId = prompt("Enter member ID:");
                        library.returnBook(returnMemberId, returnBookId);
                        break;
                    case "5":
                        library.viewBooks();
                        break;
                    case "6":
                        const viewMemberId = prompt("Enter member ID:");
                        library.viewMemberInfo(viewMemberId);
                        break;
                    case "7":
                        const keyword = prompt("Enter keyword to search for (title/author):");
                        library.searchBooks(keyword);
                        break;
                    case "8":
                        console.log("Goodbye!");
                        break;
                    default:
                        console.error("Invalid choice. Please try again.");
                }
            } while (choice !== "8");
        }

        makeChoice();
    </script>
</body>

