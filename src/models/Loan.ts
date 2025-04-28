import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'loans',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
  class LoanModel extends Model<InferAttributes<LoanModel>, InferCreationAttributes<LoanModel>> {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    })
    id!: number;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
      field: 'copy_id',
    })
    copyId!: number;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
      field:"user_id",
    })
    userId!: number;
  
    @Column({
      type: DataType.DATE,
      allowNull: false,
      field:"loan_date",
    })
    loanDate!: Date;
  
    @Column({
      type: DataType.DATE,
      allowNull: true,
        field:"return_date",
    })
    returnDate?: Date;
  
    @Column({
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field:"is_returned",
    })
    isReturned!: boolean;
  
  }
  
  export default LoanModel;