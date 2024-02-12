import { Injectable } from '@nestjs/common';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  // addBook(): string {
  //   return 'This will add a book';
  // }

  async addBook(bookObj: BookDto): Promise<BookDto> {
    // console.log(bookObj);
    return bookObj;
  }

  deleteBook(): string {
    return 'This is for deleting book';
  }

  updateBook(): string {
    return 'This will update book';
  }

  finalAllBooks(): string {
    return 'This will find All Books';
  }

  findBookById(id: string): Promise<string> {
    return Promise.resolve(`Book with ID ${id}`);
  }
}
