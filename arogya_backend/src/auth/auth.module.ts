import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { ResponseHelperService } from 'src/response-helper/response-helper.service';
import { PassportModule } from '@nestjs/passport';
import { AuthGuard } from './strategy/jwt.strategy';


@Module({
  controllers: [AuthController],
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRY },
    }),
  ],
  providers: [AuthService , ResponseHelperService ,AuthGuard],
})
export class AuthModule {}
