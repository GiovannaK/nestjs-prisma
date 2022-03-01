import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonCommand } from '../impl/create-pokemon.command';

@CommandHandler(CreatePokemonCommand)
export class CreatePokemonHandler
  implements ICommandHandler<CreatePokemonCommand>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: CreatePokemonCommand) {
    console.log('Co', command);
    return await this.prisma.pokemon.create({
      data: {
        name: 'sfaf',
      },
    });
  }
}
