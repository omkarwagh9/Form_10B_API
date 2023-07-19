import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'user_10B_files' })
export class UserFiles extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  
  @Column({
    allowNull: false,
    unique: false,
  })
  mobile_no: string;

  @Column({
    allowNull: false,
    unique: false,
  })
  pan_no: string;

  @Column({
    allowNull: false,
    unique: false,
  })
  file: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  downloaded_time: Date;

  @Column({
    allowNull: false,
    unique: false,
  })
  name: string;
}