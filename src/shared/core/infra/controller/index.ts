
import { Response, Request } from 'express';

export abstract class Controller {
  abstract handle(req: Request, res: Response): Promise<Response>
}