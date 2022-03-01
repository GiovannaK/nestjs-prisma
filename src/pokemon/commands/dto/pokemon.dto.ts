import { Prisma } from '@prisma/client';

export class CreatePokemonDto implements Prisma.PokemonUncheckedCreateInput {
  id?: string | undefined;
  height?: number;
  name!: string;
  Images?: [];
}
