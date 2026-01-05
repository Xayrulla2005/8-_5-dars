import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"postgres",
    username:"postgres",
    host:"localhost",
    port:5432,
    password:"Xayrulla2005+",
    database:"sms",
    autoLoadEntities:true,
    synchronize:true
  }), AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
