import { PokemonController } from './pokemon.controller';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPokemonsHandler } from './queries/handlers/get-pokemons.handler';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonHandler } from './commands/handler/create-pokemon.handler';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [PokemonController],
  providers: [GetPokemonsHandler, PrismaService, CreatePokemonHandler],
})
export class PokemonModule {}
