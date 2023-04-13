import React, { FC, Fragment } from "react";
import { ShapeType } from "./AreaCalculator";
import {
  Circle,
  Cone,
  Cube,
  Cylinder,
  Dodecahedron,
  Icosahedron,
  Octahedron,
  Parallelogram,
  Prism,
  Pyramid,
  Rectangle,
  RegularPolygon,
  Rhombus,
  Sphere,
  Square,
  Tetrahedron,
  Trapezoid,
  Triangle,
} from "./shapes";

type Props = {
  type: ShapeType;
};

const shapeByType = (type: ShapeType) => {
  switch (type) {
    case ShapeType.SQUARE:
      return Square;
    case ShapeType.RECTANGLE:
      return Rectangle;
    case ShapeType.TRIANGLE:
      return Triangle;
    case ShapeType.RHOMBUS:
      return Rhombus;
    case ShapeType.PARALLELOGRAM:
      return Parallelogram;
    case ShapeType.TRAPEZOID:
      return Trapezoid;
    case ShapeType.POLYGON:
      return RegularPolygon;
    case ShapeType.CIRCLE:
      return Circle;
    case ShapeType.TETRAHEDRON:
      return Tetrahedron;
    case ShapeType.HEXAHEDRON:
      return Cube;
    case ShapeType.OCTAHEDRON:
      return Octahedron;
    case ShapeType.DODECAHEDRON:
      return Dodecahedron;
    case ShapeType.ICOSAHEDRON:
      return Icosahedron;
    case ShapeType.CYLINDER:
      return Cylinder;
    case ShapeType.CONE:
      return Cone;
    case ShapeType.SPHERE:
      return Sphere;
    case ShapeType.PYRAMID:
      return Pyramid;
    case ShapeType.PRISM:
      return Prism;

    default:
      return Fragment;
  }
};

export const ShapeByType: FC<Props> = ({ type, ...props }) => {
  const ShapeByType = shapeByType(type);
  return <ShapeByType {...props} />;
};
