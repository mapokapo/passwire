import { Request } from 'express';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

export default class RequestWithUser extends Request {
  user: DecodedIdToken;
}
