import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    let agent = req.headers['user-agent'];
    let br = agent.split(' ');
let os = agent.match(new RegExp(/(?<=\().*?(?=;)/))?agent.match(new RegExp(/(?<=\().*?(?=;)/))[0]:'---';
    console.log(req.ip);
    console.log(os);
    console.log(br[br.indexOf(br.find(m => m.startsWith('Gecko'))) + 1]);
    console.log(req.method);
    console.log(req.url);
    
    next();
  }
}
