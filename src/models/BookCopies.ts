import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'book_copies',
    timestamps: false
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

  export default BookCopyModel;