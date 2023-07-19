import { Module } from '@nestjs/common';
import { UserFilesController } from './userfiles.controller';
import { UserFilesService } from './userfiles.service';
import { userFilesProviders } from 'src/repository';


@Module({
  controllers: [UserFilesController],
  providers: [UserFilesService,...userFilesProviders],
  imports: [],
})
export class UserFilesModule {}
