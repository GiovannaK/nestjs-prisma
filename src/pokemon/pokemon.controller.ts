import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Pokemon } from '@prisma/client';
import { CreatePokemonDto } from './commands/dto/Pokemon.dto';
import { CreatePokemonCommand } from './commands/impl/create-pokemon.command';
import { GetPokemonsQuery } from './queries/impl/get-pokemons.query';

@Controller('pokemon')
@UseInterceptors(ClassSerializerInterceptor)
export class PokemonController {
  constructor(private queryBus: QueryBus, private commandBus: CommandBus) {}

  @Get()
  async getAllPokemons() {
    return await this.queryBus.execute(new GetPokemonsQuery());
  }

  @Post()
  @HttpCode(201)
  async createPokemon(@Body() pokemon: CreatePokemonDto): Promise<Pokemon> {
    return await this.commandBus.execute(new CreatePokemonCommand(pokemon));
  }
}
