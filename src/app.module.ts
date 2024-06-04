import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMconfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMconfig),
    UserModule, 
    ReportsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
