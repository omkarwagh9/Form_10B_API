import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Config } from 'src/config';
import { UserFiles } from 'src/entity/userfiles.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: Config.db.dialect as Dialect,
        host: Config.db.host,
        port: +Config.db.port || 5432,
        username: Config.db.username,
        password: Config.db.password,
        database: Config.db.database,
      });
      sequelize.addModels([UserFiles]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
