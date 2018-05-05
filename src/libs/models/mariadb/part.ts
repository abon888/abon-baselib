'use strict';

import * as Sequelize from 'sequelize';
import {Column, DataType, Default, Model, PrimaryKey, Table, Scopes, CreatedAt, UpdatedAt} from "sequelize-typescript";

@Table
export default class Part extends Model<Part> {

  @PrimaryKey
  @Column
  part_id: string;

  @Column
  descriptions: string;

  @Column
  category: string;

  @Column
  material: string;

  @Column
  weight_grams: string;

  @Column
  image: string;

  @Default({})
  @Column(DataType.JSON)
  documents: string;

  @Default({})
  @Column(DataType.JSON)
  sub_parts: string;

  @Column
  workflow_id: string;

  @CreatedAt @Column
  createdDate: Date;

  @UpdatedAt @Column
  updatedDate: Date;

  static scope(...args: any[]): typeof Part {
    args[0] = args[0] || 'defaultScope';
    return super.scope.call(this, ...args);
  }

}

