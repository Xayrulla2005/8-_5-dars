import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"postgres",
    username:"postgres",
    host:"localhost",
    port:5432,
    password:process.env.DB_PASSWORD,
    database:"sms",
    autoLoadEntities:true,
    synchronize:true
  })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
