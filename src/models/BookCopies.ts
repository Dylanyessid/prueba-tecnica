import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'book_copies',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
  class BookCopyModel extends Model {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    })
    id!: number;

    @Column(DataType.INTEGER)
    book_id!: number;
  
    @Column(DataType.BOOLEAN)
    is_available!: boolean;

    @Column({
      field: 'deleted_at',
      type: DataType.DATE,
    })
    deletedAt?: Date;
  }

  export default BookCopyModel;