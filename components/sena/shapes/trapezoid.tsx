import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Divider, Form, InputNumber, Row, Typography } from "antd";
import trapezoidArea from "@/public/assets/sena/trapezoid-area.png";
import trapezoidPerimeter from "@/public/assets/sena/trapezoid-perimeter.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Trapezoid = () => {
  const [base1, setBase1] = useState<number>(5);
  const [base2, setBase2] = useState<number>(8);
  const [height, setHeight] = useState<number>(6);
  const [slantHeight, setSlantHeight] = useState<number>(7.8102); // Default value calculated with Pythagorean theorem
  const [area, setArea] = useState<number>(27);
  const [perimeter, setPerimeter] = useState<number>(26);

  useEffect(() => {
    if (!base1 || !base2 || !height) return;
    setSlantHeight(Math.sqrt(Math.pow((base2 - base1) / 2, 2) + height ** 2));
    setArea(((base1 + base2) / 2) * height);
    setPerimeter(base1 + base2 + 2 * slantHeight);
  }, [base1, base2, height]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Trapecio</Title>
      <p className="text-rs">
        Un trapecio es un polígono de cuatro lados, que tiene dos lados
        paralelos (las bases) y dos lados no paralelos (las piernas). La altura
        del trapecio es la distancia perpendicular entre las bases. La fórmula
        para calcular el área de un trapecio es: Área = ((Base Mayor + Base
        Menor) / 2) x Altura, donde "Base Mayor" y "Base Menor" son las
        longitudes de las dos bases y "Altura" es la distancia perpendicular
        entre las bases. La fórmula para calcular el perímetro de un trapecio
        es: Perímetro = Longitud de la Base Mayor + Longitud de la Base Menor +
        Longitud de la Pierna 1 + Longitud de la Pierna 2, donde "Longitud de la
        Base Mayor" y "Longitud de la Base Menor" son las longitudes de las dos
        bases y "Longitud de la Pierna 1" y "Longitud de la Pierna 2" son las
        longitudes de los dos lados no paralelos.
      </p>
      <Row justify="center">
        <Col span={24} lg={12}>
          <Title level={3}>Calcula el área y el perímetro!</Title>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="vertical"
          >
            <Form.Item
              label="Ingresa la medida de la Base menor"
              htmlFor="trapezoid-base1"
              className={style.label}
            >
              <InputNumber
                id="trapezoid-base1"
                className={style.input}
                min={1}
                defaultValue={5}
                value={base1}
                onChange={(value) => setBase1(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa la medida de la Base mayor"
              htmlFor="trapezoid-base2"
              className={style.label}
            >
              <InputNumber
                id="trapezoid-base2"
                className={style.input}
                min={1}
                defaultValue={8}
                value={base2}
                onChange={(value) => setBase2(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa la Altura"
              htmlFor="trapezoid-height"
              className={style.label}
            >
              <InputNumber
                id="trapezoid-height"
                className={style.input}
                min={1}
                defaultValue={6}
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
            layout="responsive"
            height={250}
            width={400}
            src={trapezoidArea}
            alt=""
          />
          <Divider />
          <Image
            layout="responsive"
            height={250}
            width={400}
            src={trapezoidPerimeter}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
