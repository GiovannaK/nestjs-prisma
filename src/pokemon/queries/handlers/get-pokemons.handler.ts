import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPokemonsQuery } from '../impl/get-pokemons.query';
import { Pokemon } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@QueryHandler(GetPokemonsQuery)
export class GetPokemonsHandler implements IQueryHandler<GetPokemonsQuery> {
  constructor(private readonly prisma: PrismaService) {}
  async execute(query: GetPokemonsQuery): Promise<Pokemon[]> {
    return await this.prisma.pokemon.findMany();
  }
}
