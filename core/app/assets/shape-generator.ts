"use strict";
export class ShapeGenerator {
  shapeObjects:Object;

  constructor () {
    this.shapeObjects = window["lib"];
  }

  public generateShape(id:string) {
    return new this.shapeObjects[id]();
  }
}