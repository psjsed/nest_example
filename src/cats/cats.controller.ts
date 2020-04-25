import { Controller, Get, Req, Post, Put, HttpCode, Header, Redirect, Param, Body, HttpException, HttpStatus, UsePipes } from "@nestjs/common"
import { Request } from 'express'
import { CreateCatDto } from "./dto/create-cat.dto"
import { CatsService } from './cats.service'
import { Cat } from './interface/cats.interface'
import { JoiValidationPipe } from "src/pipe/validation/joi.validation.pipe"
import { ValidationPipe } from "src/pipe/validation/validation.pipe"

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {

  }
  @Get()
  async findAll(): Promise<Cat[]> {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message'
    }, HttpStatus.FORBIDDEN)
    return this.catsService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Put()
  @Redirect('https://google.com', 301)
    test(): string {
      return 'aa'
    }

  @Get(':id')
    findId(@Param() params): string {
      return params.id + ' find!!!'
    }
  
  @Post('dtoa')
  async createCat(@Body() createCatDto: CreateCatDto): Promise<string> {
    return 'Create cat!!!!, age: ' + createCatDto.age + ', name: ' + createCatDto.name + ', breed: ' + createCatDto.bread
  }
}