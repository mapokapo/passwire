import { Injectable, UnauthorizedException } from '@nestjs/common';
import { auth } from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

@Injectable()
export class AuthService {
  async validateUser(token: string) {
    let firebaseUser: DecodedIdToken;
    try {
      firebaseUser = await auth().verifyIdToken(token, true);
    } catch (err) {
      throw new UnauthorizedException();
    }
    if (!firebaseUser) {
      throw new UnauthorizedException();
    }
    return firebaseUser;
  }
}
