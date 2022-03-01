import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Pokemon } from '@prisma/client';
import { CreatePokemonDto } from 'src/pokemon/dto/Pokemon.dto';
import { CreatePokemonCommand } from '../impl/create-pokemon.command';

@CommandHandler(CreatePokemonCommand)
export class CreatePokemonHandler
  implements ICommandHandler<CreatePokemonCommand>
{
  async execute(command: CreatePokemonCommand) {
    const newPokemon = { ...CreatePokemonDto };
    return await newPokemon;
  }
}
