import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Divider, Form, InputNumber, Row, Typography } from "antd";
import polygonArea from "@/public/assets/sena/polygon-area.png";
import polygonPerimeter from "@/public/assets/sena/polygon-perimeter.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const RegularPolygon = () => {
  const [numSides, setNumSides] = useState<number>(5);
  const [sideLength, setSideLength] = useState<number>(4);
  const [apothem, setApothem] = useState<number>(4);
  const [perimeter, setPerimeter] = useState<number>(20);
  const [area, setArea] = useState<number>(40);

  useEffect(() => {
    if (!numSides || !sideLength || !apothem) return;

    setPerimeter(numSides * sideLength);
    setArea((numSides * sideLength * apothem) / 2);
  }, [numSides, sideLength, apothem]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>
        Polígono regular
      </Title>
      <p className="text-rs">
        Un polígono regular es una figura geométrica plana que tiene todos sus
        lados y ángulos iguales. Para calcular el área de un polígono regular,
        necesitas conocer la longitud de uno de sus lados y el apotema, que es
        la distancia desde el centro del polígono hasta el punto medio de uno de
        sus lados. La fórmula para el área del polígono regular es: Área =
        (Perímetro x Apotema) / 2 Donde "Perímetro" es la suma de la longitud de
        todos los lados y "Apotema" es la distancia desde el centro del polígono
        hasta el punto medio de uno de sus lados. Para calcular el perímetro de
        un polígono regular, necesitas conocer la longitud de uno de sus lados y
        el número de lados que tiene. La fórmula para el perímetro del polígono
        regular es: Perímetro = Lado x Número de lados Donde "Lado" es la
        longitud de uno de los lados y "Número de lados" es la cantidad de lados
        que tiene el polígono regular.
      </p>
      <Row justify="center">
        <Col span={24} lg={12}>
          <Title level={3}>Cálculo del área y el perímetro</Title>
          <Form
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 10 }}
            layout="horizontal"
          >
            <Form.Item
              label="Número de lados:"
              htmlFor="regular-polygon-numSides"
              className={style.label}
            >
              <InputNumber
                id="regular-polygon-numSides"
                className={style.input}
                min={3}
                defaultValue={3}
                value={numSides}
                onChange={(value) => setNumSides(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Longitud de lado:"
              htmlFor="regular-polygon-sideLength"
              className={style.label}
            >
              <InputNumber
                id="regular-polygon-sideLength"
                className={style.input}
                min={1}
                defaultValue={3}
                value={sideLength}
                onChange={(value) => setSideLength(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Apothem:"
              htmlFor="regular-polygon-apothem"
              className={style.label}
            >
              <InputNumber
                id="regular-polygon-apothem"
                className={style.input}
                min={0}
                defaultValue={2.6}
                value={apothem}
                onChange={(value) => setApothem(Number(value))}
              />
            </Form.Item>
          </Form>
          {area && (
            <h3 className="title-rs">
              <span>Área:</span>
              <InputNumber className={style.input} disabled value={area} />
            </h3>
          )}
          {perimeter && (
            <h3 className="title-rs">
              <span>Perímetro:</span>
              <InputNumber className={style.input} disabled value={perimeter} />
            </h3>
          )}
        </Col>
        <Col span={24} lg={12}>
          <Image
            className={style.img}
            height={220}
            width={450}
            src={polygonArea}
            alt=""
          />
          <Divider />
          <Image
            className={style.img}
            height={220}
            width={450}
            src={polygonPerimeter}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
