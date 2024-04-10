import { Injectable } from '@nestjs/common';
import { Movie } from './interface/Movie';

@Injectable()
export class MooviesService {

      Movie =  [
        {
            id: 1,
            title: 'Rapidos y Furiosos X',
            actors: 'Vin Diesel, Paul Walker, Michelle Rodriguez, Jason Statham, Dwayne Johnson, Jordana Brewster, Tyrese Gibson, etc',
            genres: 'Accion, Aventura, Crimen',
            synopsis: 'Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: Un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.',
            duration: '141 min',
            releaseDate: new Date(2023, 5, 18)
        },
        {
            id: 2,
            title: 'Oppenheimer',
            actors: 'Cillian Murphy,Emily Blunt,Matt Damon,Robert Downey Jr.,Florence Pugh,Josh Hartnett,etc',
            genres: 'Drama, Historia',
            synopsis: 'Segunda guerra mundial, el físico Julius Robert Oppenheimer (Cillian Murphy) dentro del Proyecto Manhattan, crea ensayos nucleares para construir la bomba para EEUU. Una vez ve creada reflexiona sobre su creación y desde entonces su vida dependerá del uso de armas nucleares.',
            duration: '181 min',
            releaseDate: new Date(2023, 7, 20)
        },
        {
            id: 3,
            title: 'Damsel',
            actors: 'Millie Bobby Brown,Ray Winstone,Angela Bassett,Brooke Carter,Nick Robinson,Robin Wright,etc',
            genres: 'Fantasía, Acción, Aventura',
            synopsis: 'La boda de una joven con un príncipe encantador se convierte en una encarnizada lucha por sobrevivir cuando la ofrecen como sacrificio a una dragona escupefuego.',
            duration: '110 min',
            releaseDate: new Date(2024, 3, 7)
        },
        {
            id: 4,
            title: 'Wonka',
            actors: 'Timothée Chalamet,Calah Lane,Keegan-Michael Key,Hugh Grant,Paterson Joseph,Olivia Colman',
            genres: 'Comedia, Familia, Fantasía',
            synopsis: 'Basada en el personaje que protagoniza "Charlie y la fábrica de chocolate", el libro infantil más emblemático de Roald Dahl y uno de los más vendidos de todos los tiempos, "Wonka" cuenta la historia de cómo el mayor inventor, mago y chocolatero del mundo se convirtió en el querido Willy Wonka que conocemos hoy en día.',
            duration: '120 min',
            releaseDate: new Date(2023, 8, 12)
        },
        {
            id: 5,
            title: 'Pobres criaturas',
            actors: 'Emma Stone,Mark Ruffalo,Willem Dafoe,Ramy Youssef,Suzy Bemba,etc',
            genres: 'Ciencia ficción, Romance, Comedia',
            synopsis: 'Bella Baxter es una joven revivida por el brillante y poco ortodoxo científico Dr. Godwin Baxter. Bajo la protección de Baxter, Bella está ansiosa por aprender. Hambrienta de la mundanidad que le falta, Bella se escapa con Duncan Wedderburn, un sofisticado y perverso abogado, en una aventura vertiginosa a través de los continentes. Libre de los prejuicios de su época, Bella se vuelve firme en su propósito de defender la igualdad y la liberación.',
            duration: '141 min',
            releaseDate: new Date(2024, 1, 25)
        },
        {
            id: 6,
            title: 'Barbie',
            actors: 'Margot Robbie,Ryan Gosling,America Ferrera,Ariana Greenblatt,Issa Rae,Kate McKinnon,etc',
            genres: 'Comedia, Aventura',
            synopsis: 'Barbie vive en Barbieland donde todo es ideal y lleno de música y color. Un buen día decide conocer el mundo real. Cuando el CEO de Mattel se entere, tratará de evitarlo a toda costa y devolver a Barbie a una caja',
            duration: '120 min',
            releaseDate: new Date(2023, 7, 20)
        }
    ];

    create(movie) {
        this.Movie.push(movie);
        return movie;
    }
    findAll() {
        return this.Movie;
    }
    findById(id) {
        return this.Movie.find(movie => movie.id === id);
    }
    update(id, movie) {
        const index = this.Movie.findIndex(movie => movie.id === id);
        if (index !== -1) {
            this.Movie[index] = movie;
            return movie;
        }
        else {
            return null;
        }
    }
    delete(id) {
        const index = this.Movie.findIndex(movie => movie.id === id);
        if (index !== -1) {
            const deletedMovie = this.Movie[index];
            this.Movie.splice(index, 1);
            return deletedMovie;
        }
        else {
            return null;
        }
    }
};

