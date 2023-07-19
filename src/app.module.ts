import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserFilesModule} from './user-files/userfiles.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [DatabaseModule,UserFilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
