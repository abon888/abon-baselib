'use strict';

import * as Sequelize from 'sequelize';
import {Column, DataType, Default, Model, PrimaryKey, Table, Scopes, CreatedAt, UpdatedAt} from "sequelize-typescript";

@Table
export default class Mold extends Model<Mold> {

  @PrimaryKey
  @Column
  mold_id: string;

  @Column
  descriptions: string;

  @CreatedAt @Column
  createdDate: Date;

  @UpdatedAt @Column
  updatedDate: Date;

  static scope(...args: any[]): typeof Mold {
    args[0] = args[0] || 'defaultScope';
    return super.scope.call(this, ...args);
  }

}

