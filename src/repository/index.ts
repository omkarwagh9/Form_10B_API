import { UserFiles } from 'src/entity/userfiles.entity';

export const userFilesProviders = [
  {
    provide: 'USERS_FILES_REPOSITORY',
    useValue: UserFiles,
  },
];
