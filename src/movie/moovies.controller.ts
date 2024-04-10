import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Movie } from './interface/Movie';
import { MooviesService } from './moovies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MooviesService) {}

    @Get()
    findAll(): Movie[] {
        return this.moviesService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Movie {
        return this.moviesService.findById(+id);
    }

    @Post()
    create(@Body() movie: Movie): Movie {
        return this.moviesService.create(movie);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() movie: Movie): Movie {
        return this.moviesService.update(+id, movie);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Movie {
        return this.moviesService.delete(+id);
    }
}