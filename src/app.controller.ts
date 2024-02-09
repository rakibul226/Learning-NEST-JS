import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  //   public bookService: BookService = new BookService();
  constructor(private bookService: BookService) {}

  @Post('/add')
  addBook(): string {
    return this.bookService.addBook();
  }

  @Delete('/delete')
  deleteBook(): string {
    return this.bookService.deleteBook();
  }

  @Put('/update')
  updateBook(): string {
    return this.bookService.updateBook();
  }

  @Get('/findAll')
  finalAllBooks(): string {
    return this.bookService.finalAllBooks();
  }

  //   @Get('/findBookById/:id')
  //   findBookById(@Param('id') id: string): Promise<string> {
  //     return this.bookService.findBookById(id);
  //   }
}
