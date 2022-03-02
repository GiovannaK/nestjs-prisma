import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPokemonsQuery } from '../impl/get-pokemons.query';
import { Pokemon } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@QueryHandler(GetPokemonsQuery)
export class GetPokemonsHandler implements IQueryHandler<GetPokemonsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    Images: {
      select: {
        url: true,
      },
    },
  };

  async execute(query: GetPokemonsQuery): Promise<Pokemon[]> {
    return await this.prisma.pokemon.findMany({
      include: this._include as any,
    });
  }
}
