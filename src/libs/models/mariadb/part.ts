'use strict';

import * as Sequelize from 'sequelize';
import {Column, DataType, Default, Model, PrimaryKey, ForeignKey, Table, Scopes, CreatedAt, UpdatedAt} from "sequelize-typescript";

import {Mold} from "./mold";

@Scopes({
  mold: {
    include: [{
      model: () => Mold,
      through: {attributes: []},
    }],
  }
})

@Table
export class Part extends Model<Part> {

  @PrimaryKey
  @Column(DataType.STRING)
  part_id: string;

  @Column(DataType.STRING)
  description: string;

  @Column(DataType.STRING)
  category: string;

  @Column(DataType.STRING)
  material: string;

  @ForeignKey(() => Mold) @Column(DataType.STRING)
  mold_id: string;

  @Column(DataType.STRING)
  weight_grams: string;

  @Column(DataType.STRING)
  image: string;

  @Default({}) @Column(DataType.JSON)
  documents: string;

  @Default({}) @Column(DataType.JSON)
  sub_parts: string;

  @Column(DataType.STRING)
  workflow_id: string;

  @CreatedAt @Column(DataType.DATE)
  createdDate: Date;

  @UpdatedAt @Column(DataType.DATE)
  updatedDate: Date;

  static scope(...args: any[]): typeof Part {
    args[0] = args[0] || 'defaultScope';
    return super.scope.call(this, ...args);
  }

}

export default Part;
