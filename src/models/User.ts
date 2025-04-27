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
    phone_number!: string;
  
    @Column({
      type: DataType.DATE,
      field: 'created_at',
      allowNull: false,
      defaultValue: DataType.NOW
    })
    created_at!: Date;
  
    @Column({
      type: DataType.DATE,
      field: 'updated_at',
      allowNull: false,
      defaultValue: DataType.NOW
    })
    updated_at!: Date;
  }
  export default UserModel;