import { PokemonController } from './pokemon.controller';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPokemonsHandler } from './queries/handlers/get-pokemons.handler';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [PokemonController],
  providers: [GetPokemonsHandler, PrismaService],
})
export class PokemonModule {}
