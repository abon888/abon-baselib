'use strict';

import * as Sequelize from 'sequelize';
import {Column, DataType, Default, Model, PrimaryKey, ForeignKey, Table, Scopes, CreatedAt, UpdatedAt} from "sequelize-typescript";

@Table
export class Mold extends Model<Mold> {

  @PrimaryKey @Column(DataType.STRING)
  mold_id: string;

  @Column(DataType.STRING)
  description: string;

  @CreatedAt @Column(DataType.DATE)
  createdDate: Date;

  @UpdatedAt @Column(DataType.DATE)
  updatedDate: Date;

  static scope(...args: any[]): typeof Mold {
    args[0] = args[0] || 'defaultScope';
    return super.scope.call(this, ...args);
  }

}

export default Mold;
