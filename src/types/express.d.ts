import { TokenPayload } from ".";

declare global {
  namespace Express {
    interface Request {
      patient?: TokenPayload;
    }
  }
}
