import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPokemonsQuery } from './queries/impl/get-pokemons.query';

@Controller()
export class PokemonController {
  constructor(private queryBus: QueryBus) {}

  @Get('/pokemon')
  async getAllPokemons() {
    return await this.queryBus.execute(new GetPokemonsQuery());
  }
}
