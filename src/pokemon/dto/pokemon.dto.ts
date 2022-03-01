import { Prisma } from '@prisma/client';

export class CreatePokemonDto implements Prisma.PokemonCreateInput {
  id?: string | undefined;
  height?: number;
  name!: string;
  Images?: Prisma.ImageCreateNestedManyWithoutPokemonInput;
}
