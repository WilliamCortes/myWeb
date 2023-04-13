import React, { useEffect, useState } from "react";
import { Form, Select, Typography } from "antd";
import { ShapeByType } from "./ShapeByType";
import { changeThemeColor } from "@/utils/sena.util";
import style from "@/styles/sena.module.scss";

export enum ShapeType {
  SQUARE = "square",
  RECTANGLE = "rectangle",
  TRIANGLE = "triangle",
  RHOMBUS = "rhombus",
  PARALLELOGRAM = "parallelogram",
  TRAPEZOID = "trapezoid",
  POLYGON = "polygon",
  CIRCLE = "circle",
  TETRAHEDRON = "tetrahedron",
  HEXAHEDRON = "hexahedron",
  OCTAHEDRON = "octahedron",
  DODECAHEDRON = "dodecahedron",
  ICOSAHEDRON = "icosahedron",
  CYLINDER = "cylinder",
  CONE = "cone",
  SPHERE = "sphere",
  PYRAMID = "pyramid",
  PRISM = " prism",
}

const { Title } = Typography;

const AreaCalculator: React.FC = () => {
  const [type, setType] = useState<ShapeType>(ShapeType.POLYGON);

  useEffect(() => {
    changeThemeColor();
  }, [type]);

  const handleTheme = () => {
    document.documentElement.classList.toggle("light-theme");
    changeThemeColor();
  };

  const handleTypeChange = (value: ShapeType) => {
    setType(value);
  };

  return (
    <div>
      <button
        id="toggle-theme"
        aria-label="Toggle dark theme"
        onClick={handleTheme}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="var(--light-icon)"
        >
          <rect fill="none" height="24" width="24" />
          <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
        </svg>
      </button>
      <Title style={{ textAlign: "center", marginTop: 30 }}>
        GA2-240201528-AA4-EV01 - Algoritmo para el cálculo de áreas y volúmenes
      </Title>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item
          className={style.label}
          label="Selecciona el tipo de figura:"
          htmlFor="shape-select"
        >
          <Select
            id="shape-select"
            defaultValue={ShapeType.POLYGON}
            onChange={handleTypeChange}
            listHeight={750}
            options={[
              { value: ShapeType.SQUARE, label: "Cuadrado" },
              { value: ShapeType.RECTANGLE, label: "Rectángulo" },
              { value: ShapeType.TRIANGLE, label: "Triángulo" },
              { value: ShapeType.RHOMBUS, label: "Rombo" },
              { value: ShapeType.PARALLELOGRAM, label: "Paralelogramo" },
              { value: ShapeType.TRAPEZOID, label: "Trapecio" },
              { value: ShapeType.POLYGON, label: "Polígono regular" },
              { value: ShapeType.CIRCLE, label: "Circulo" },
              { value: ShapeType.TETRAHEDRON, label: "Tetraedro" },
              { value: ShapeType.HEXAHEDRON, label: "Hexaedro o Cubo" },
              { value: ShapeType.OCTAHEDRON, label: "Octaedro" },
              { value: ShapeType.DODECAHEDRON, label: "Dodecaedro" },
              { value: ShapeType.ICOSAHEDRON, label: "Icosaedro" },
              { value: ShapeType.CYLINDER, label: "Cilindro" },
              { value: ShapeType.CONE, label: "Cono" },
              { value: ShapeType.SPHERE, label: "Esfera" },
              { value: ShapeType.PYRAMID, label: "Pirámide" },
              { value: ShapeType.PRISM, label: "Prisma" },
            ]}
          />
        </Form.Item>
      </Form>
      <div className="content-rs">
        <ShapeByType type={type} />
      </div>
    </div>
  );
};

export default AreaCalculator;
