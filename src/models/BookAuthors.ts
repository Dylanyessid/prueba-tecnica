import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { nullable } from "zod";

//Book Authors model definition
@Table({
    tableName: 'book_authors',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
  class BookAuthorsModel extends Model<InferAttributes<BookAuthorsModel>, InferCreationAttributes<BookAuthorsModel>> {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    })
    id?: number;
  
    
    @Column(DataType.INTEGER)
    book_id!: number;
  
   
    @Column(DataType.INTEGER)
    author_id!: number;
  
    @Column({
      field: 'deleted_at',
      type: DataType.DATE,
    })
    deletedAt?: Date;
  
  }
  export default BookAuthorsModel;