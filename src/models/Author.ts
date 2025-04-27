import { Column, DataType, Model, Table } from "sequelize-typescript";
@Table({
    tableName: 'authors',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
class AuthorModel extends Model {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    })
    id!: number;
  
    @Column(DataType.STRING)
    name!: string;
  
    @Column({
      field: 'deleted_at',
      type: DataType.DATE,
    })
    deletedAt?: Date;
  }
  export default AuthorModel;