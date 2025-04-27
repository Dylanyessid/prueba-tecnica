import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table({
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
  class UserModel extends Model {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    })
    id!: number;
  
    @Column(DataType.STRING)
    name!: string;
  
    @Column(DataType.STRING)
    email!: string;
  
    @Column(DataType.STRING)
    phoneNumber!: string;
  
    @Column({
      field: 'deleted_at',
      type: DataType.DATE,
    })
    deletedAt?: Date;

  }
  export default UserModel;