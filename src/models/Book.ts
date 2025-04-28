import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";


//Book model definition
@Table({
    tableName: 'books',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
  class BookModel extends Model<InferAttributes<BookModel>, InferCreationAttributes<BookModel>> {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    })
    id: number;
  
    @Column(DataType.STRING)
    name!: string;
  
    @Column(DataType.DATE)
    published_date!: Date;
  
    @Column({
      field: 'deleted_at',
      type: DataType.DATE,
    })
    deletedAt?: Date;
   
  }

  export default BookModel;