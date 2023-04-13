import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Divider, Form, InputNumber, Row, Typography } from "antd";
import squareArea from "@/public/assets/sena/square-area.png";
import squarePerimeter from "@/public/assets/sena/square-perimeter.png";
import style from "@/styles/sena.module.scss";
const { Title } = Typography;

export const Square = () => {
  const [side, setSide] = useState<number>(3);
  const [area, setArea] = useState<number>(9);
  const [perimeter, setPerimeter] = useState<number>(12);

  useEffect(() => {
    if (!side) return;
    setArea(Math.pow(side!, 2));
    setPerimeter(side * 4);
  }, [side]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Cuadrado</Title>
      <p className="text-rs">
        Un cuadrado es una figura geométrica que tiene cuatro lados iguales y
        cuatro ángulos rectos. Es decir, es un polígono regular de cuatro lados.
        Para calcular el área de un cuadrado, simplemente necesitas multiplicar
        la longitud de uno de los lados por sí mismo (o elevar al cuadrado la
        longitud del lado). La fórmula para el área del cuadrado es: Área = Lado
        x Lado = Lado al cuadrado Donde "Lado" es la medida de uno de los lados
        del cuadrado. Para calcular el perímetro del cuadrado, necesitas sumar
        la longitud de los cuatro lados. Como todos los lados del cuadrado
        tienen la misma longitud, puedes simplemente multiplicar la longitud de
        un lado por cuatro para obtener el perímetro. La fórmula para el
        perímetro del cuadrado es: Perímetro = Lado x 4 Donde "Lado" es la
        medida de uno de los lados del cuadrado.
      </p>
      <Row justify="center">
        <Col span={24} lg={12}>
          <Title level={3}>Culcula el área y el perímetro!</Title>

          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="vertical"
          >
            <Form.Item
              htmlFor="square-side"
              className={style.label}
              label="Ingresa la medida del Lado"
            >
              <InputNumber
                id="square-side"
                className={style.input}
                min={1}
                defaultValue={3}
                value={side}
                onChange={(value) => setSide(Number(value))}
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
            layout="responsive"
            height={250}
            width={250}
            src={squareArea}
            alt=""
          />
          <Divider />
          <Image
            layout="responsive"
            height={250}
            width={250}
            src={squarePerimeter}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
