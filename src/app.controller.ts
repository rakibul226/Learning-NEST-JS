import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Post('/add')
  addBook(): string {
    return 'This will add book';
  }

  @Delete('/delete')
  deleteBook(): string {
    return 'This is for deleting book';
  }

  @Put('/update')
  updateBook(): string {
    return 'This will update book';
  }

  @Get('/findAll')
  finalAllBooks(): string {
    return 'This will find All Books';
  }

  @Get('/findBookById/:id')
  findBookById(@Param() params): string {
    console.log(params.id);
    return `This will find a book of id #${params.id}`;
  }
}
