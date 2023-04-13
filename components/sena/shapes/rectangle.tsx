import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Divider, Form, InputNumber, Row, Typography } from "antd";
import rectangleArea from "@/public/assets/sena/rectangle-area.png";
import rectanglePerimeter from "@/public/assets/sena/rectangle-perimeter.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Rectangle = () => {
  const [base, setBase] = useState<number>(4);
  const [height, setHeight] = useState<number>(3);
  const [area, setArea] = useState<number>(12);
  const [perimeter, setPerimeter] = useState<number>(14);

  useEffect(() => {
    if (!base || !height) return;
    setArea(base * height);
    setPerimeter(base * 2 + height * 2);
  }, [base, height]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>
        Rectángulo
      </Title>
      <p className="text-rs">
        Un rectángulo es una figura geométrica que tiene cuatro lados y cuatro
        ángulos rectos, pero a diferencia del cuadrado, sus lados opuestos
        pueden tener longitudes diferentes. Para calcular el área de un
        rectángulo, necesitas multiplicar la longitud de la base (uno de los
        lados largos) por la altura (uno de los lados cortos). La fórmula para
        el área del rectángulo es: Área = Base x Altura Donde "Base" es la
        longitud de uno de los lados largos y "Altura" es la longitud de uno de
        los lados cortos. Para calcular el perímetro de un rectángulo, necesitas
        sumar la longitud de los cuatro lados. La fórmula para el perímetro del
        rectángulo es: Perímetro = 2 x (Base + Altura) Donde "Base" es la
        longitud de uno de los lados largos y "Altura" es la longitud de uno de
        los lados cortos.
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
              label="Ingresa la medida de la Base"
              htmlFor="rectangle-base"
              className={style.label}
            >
              <InputNumber
                id="rectangle-base"
                className={style.input}
                min={1}
                defaultValue={3}
                value={base}
                onChange={(value) => setBase(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa la Altura"
              htmlFor="rectangle-height"
              className={style.label}
            >
              <InputNumber
                id="rectangle-height"
                className={style.input}
                min={1}
                defaultValue={3}
                value={height}
                onChange={(value) => setHeight(Number(value))}
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
            src={rectangleArea}
            alt=""
          />
          <Divider />
          <Image
            className={style.img}
            height={250}
            width={250}
            src={rectanglePerimeter}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
