import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma:PrismaService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/hello')
  hello(){
    return 'primeira rota criada'
  }

  @Post('/users')
  async store(){
   const res= await this.prisma.user.findMany()
   console.log(res)
  }
}
