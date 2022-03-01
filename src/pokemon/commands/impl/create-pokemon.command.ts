import { CreatePokemonDto } from '../dto/Pokemon.dto';

export class CreatePokemonCommand {
  constructor(public readonly pokemon: CreatePokemonDto) {}
}
