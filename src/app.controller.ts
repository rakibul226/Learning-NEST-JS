import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
  //   public bookService: BookService = new BookService();
  constructor(private bookService: BookService) {}

  // @Post('/add')
  // addBook(): string {
  //   return this.bookService.addBook();
  // }

  @Post('/add')
  @UsePipes(new ValidationPipe())
  async addBook(@Body() bookObj: BookDto): Promise<BookDto> {
    // console.log(bookObj);
    return this.bookService.addBook(bookObj);
  }

  // @Post('/add')
  // addBook(@Body(new ValidationPipe()) book: BookDto): string {
  //   return this.bookService.addBook();
  // }

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

  @Get('/findBookById/:id')
  findBookById(@Param('id') id: string): Promise<string> {
    return this.bookService.findBookById(id);
  }
}
