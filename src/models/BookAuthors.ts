import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


@Table({
    tableName: 'book_authors',
    timestamps: false
  })
  class BookAuthorsModel extends Model {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    })
    id!: number;
  
    
    @Column(DataType.INTEGER)
    book_id!: number;
  
   
    @Column(DataType.INTEGER)
    author_id!: number;
  
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
  export default BookAuthorsModel;