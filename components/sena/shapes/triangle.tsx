import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Divider, Form, InputNumber, Row, Typography } from "antd";
import triangleArea from "@/public/assets/sena/triangle-area.png";
import trianglePerimeter from "@/public/assets/sena/triangle-perimeter.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Triangle = () => {
  const [base, setBase] = useState<number>(4);
  const [height, setHeight] = useState<number>(3.46);
  const [sideA, setSideA] = useState<number>(4);
  const [sideB, setSideB] = useState<number>(4);
  const [area, setArea] = useState<number>(6.92);
  const [perimeter, setPerimeter] = useState<number>(12);

  useEffect(() => {
    if (!base || !height) return;
    setArea((base * height) / 2);
  }, [base, height]);

  useEffect(() => {
    if (!sideA || !sideB || !base) return;
    setPerimeter(sideA + sideB + base);
  }, [sideA, sideB, base]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Triángulo</Title>
      <p className="text-rs">
        Un triángulo es una figura geométrica que tiene tres lados y tres
        ángulos. Para calcular el área de un triángulo, necesitas multiplicar la
        longitud de la base (uno de los lados) por la altura (la distancia desde
        la base hasta el vértice opuesto) y luego dividir el resultado por dos.
        La fórmula para el área del triángulo es: Área = (Base x Altura) / 2
        Donde "Base" es la longitud de uno de los lados y "Altura" es la
        distancia desde la base hasta el vértice opuesto. Para calcular el
        perímetro de un triángulo, necesitas sumar la longitud de los tres
        lados. La fórmula para el perímetro del triángulo es: Perímetro = Base +
        LadoA + LadoB Donde "Base" es la longitud de uno de los lados y "LadoA"
        y "LadoB" son las longitudes de los otros dos lados.
      </p>
      <Row justify="center">
        <Col span={24} lg={12}>
          <Title level={3}>Calcula el área y el perímetro!</Title>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
            layout="vertical"
          >
            <Form.Item
              label="Ingresa la medida de la Base"
              htmlFor="triangle-base"
              className={style.label}
            >
              <InputNumber
                id="triangle-base"
                className={style.input}
                min={1}
                defaultValue={4}
                value={base}
                onChange={(value) => setBase(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa la Altura"
              htmlFor="triangle-height"
              className={style.label}
            >
              <InputNumber
                id="triangle-height"
                className={style.input}
                min={1}
                defaultValue={3}
                value={height}
                onChange={(value) => setHeight(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa el lado A"
              htmlFor="triangle-side-a"
              className={style.label}
            >
              <InputNumber
                id="triangle-side-a"
                className={style.input}
                min={1}
                defaultValue={5}
                value={sideA}
                onChange={(value) => setSideA(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa el lado B"
              htmlFor="triangle-side-b"
              className={style.label}
            >
              <InputNumber
                id="triangle-side-b"
                className={style.input}
                min={1}
                defaultValue={5}
                value={sideB}
                onChange={(value) => setSideB(Number(value))}
              />
            </Form.Item>
          </Form>
          {area && (
            <h3 className="title-rs">
              <span>Area: </span>
              <InputNumber className={style.input} disabled value={area} />
            </h3>
          )}
          {perimeter && (
            <h3 className="title-rs">
              <span>Perimetro: </span>
              <InputNumber className={style.input} disabled value={perimeter} />
            </h3>
          )}
        </Col>
        <Col span={24} lg={12}>
          <Image
            className={style.img}
            height={250}
            width={250}
            src={triangleArea}
            alt=""
          />
          <Divider />
          <Image
            className={style.img}
            height={250}
            width={250}
            src={trianglePerimeter}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
