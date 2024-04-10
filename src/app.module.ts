import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movie/moovies.controller';
import { MooviesService } from './movie/moovies.service';

@Module({
  imports: [],
  controllers: [AppController, MoviesController],
  providers: [AppService, MooviesService],
})
export class AppModule {}
