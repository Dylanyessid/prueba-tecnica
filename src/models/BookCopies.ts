import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";


//BookCopy model definition
@Table({
    tableName: 'book_copies',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
  class BookCopyModel extends Model<InferAttributes<BookCopyModel>, InferCreationAttributes<BookCopyModel>> {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    })
    id!: number;

    @Column({
      field:"book_id",
      type: DataType.INTEGER,
    })
    bookId!: number;
  
    @Column({
      field:"is_available",
      type:DataType.BOOLEAN
    })
    isAvailable!: boolean;

    @Column({
      field: 'deleted_at',
      type: DataType.DATE,
    })
    deletedAt?: Date;
  }

  export default BookCopyModel;