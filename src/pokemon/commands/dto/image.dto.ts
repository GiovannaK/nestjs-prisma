import { Prisma } from '@prisma/client';

export class ImageDto implements Prisma.ImageUncheckedCreateInput {
  pokemonId!: string;
  url!: string;
  id?: string | undefined;
  height?: number;
  name!: string;
  Images?: [];
}
 