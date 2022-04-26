import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { FirebaseJWTStrategy } from './strategies/firebase-jwt.strategy';

@Module({
  imports: [PassportModule],
  providers: [AuthService, FirebaseJWTStrategy],
})
export class AuthModule {}
