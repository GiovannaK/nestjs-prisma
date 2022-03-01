import { IsInt, IsOptional, IsString } from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreatePokemonDto {
  @IsString()
  name!: string;

  @IsInt()
  @IsOptional()
  height?: number | null;

  @IsOptional()
  images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
