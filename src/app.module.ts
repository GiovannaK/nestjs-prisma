import { PrismaModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [PrismaModule, PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
