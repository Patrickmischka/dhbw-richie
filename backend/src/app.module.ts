import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Data } from './entities/data.entity';
import { Lecture } from './entities/lecture.entity';
import { User } from './entities/user.entity';
import { ConfigModule, ConfigService } from './config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        ({
          type: 'mongodb',
          url: configService.get('MONGO_URL'),
          useNewUrlParser: true,
          useUnifiedTopology: true,
          synchronize: true,
          entities: [Data, User, Lecture],
        } as TypeOrmModuleOptions),
        inject: [ConfigService]
    }),
    TypeOrmModule.forFeature([Data]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
