import { Controller, Get, Req, Post, Put, HttpCode, Header, Redirect, Param, Body } from "@nestjs/common"
import { Request } from 'express'
import { CreateCatDto } from "./create-cat.dto"

@Controller('cats')
export class CatsController {
  @Get()
    findAll(@Req() request: Request): string {
    return 'This action returns all cat'
  }

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(201)
    create(): string {
      return 'This action adds a new cats'
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
    return 'Create cat!!, age: ' + createCatDto.age + ', name: ' + createCatDto.name + ', breed: ' + createCatDto.breed
  }
}