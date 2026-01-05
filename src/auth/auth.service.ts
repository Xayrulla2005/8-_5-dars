import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { SmsService } from 'src/sms/sms.service';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(Auth) private authRepo:Repository<Auth>,
private smsService:SmsService
){}
 async create(createAuthDto: CreateAuthDto) { 
  const {email,phone_number}=createAuthDto
  await this.smsService.sendOtp(phone_number)
  const user=this.authRepo.create({email,phone_number,otp:'123456'}) 
  return await this.authRepo.save(user)
  }
}
