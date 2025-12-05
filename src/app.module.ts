import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { CreateAccountController } from './controller/create-account.controller';
@Module({
  imports: [],
  controllers: [ CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}