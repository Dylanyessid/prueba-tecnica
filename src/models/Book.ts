import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'books',
    timestamps: false
  })
  class BookModel extends Model {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    })
    id!: number;
  
    @Column(DataType.STRING)
    name!: string;
  
    @Column(DataType.DATE)
    published_date!: Date;
  
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

  export default BookModel;