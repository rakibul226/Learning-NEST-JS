import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  addBook(): string {
    return 'This will add book';
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

  //   findBookById(id: string): Promise<string> {
  //     return Promise.resolve(`Book with ID ${id}`);
  //   }
}
