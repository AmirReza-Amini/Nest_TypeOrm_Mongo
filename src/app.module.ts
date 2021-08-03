import { MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './dbConfig';
import { LogMiddleware } from './middleware/log.middleware';
import { ProductModule } from './products/product.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ProductModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .forRoutes({path:'*',method:RequestMethod.GET});
  }
}