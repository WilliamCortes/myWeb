import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Form, InputNumber, Row, Typography } from "antd";
import circleArea from "@/public/assets/sena/circle-area.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Circle = () => {
  const [radius, setRadius] = useState<number>(5);
  const [area, setArea] = useState<number>(78.54);
  const [perimeter, setPerimeter] = useState<number>(31.42);

  useEffect(() => {
    if (!radius) return;
    setArea(Math.PI * radius ** 2);
    setPerimeter(2 * Math.PI * radius);
  }, [radius]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Círculo</Title>
      <p className="text-rs">
        Un círculo es una figura geométrica plana en la que todos los puntos de
        su contorno se encuentran a la misma distancia del centro. La distancia
        desde el centro de un círculo hasta cualquier punto de su contorno se
        conoce como radio. El diámetro de un círculo es la distancia de un
        extremo del círculo a través del centro hasta el otro extremo. La
        longitud del contorno de un círculo se conoce como circunferencia y se
        puede calcular utilizando la fórmula C = 2πr, donde r es el radio del
        círculo y π (pi) es una constante matemática aproximadamente igual a
        3,14159.
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
              label="Ingresa el radio"
              htmlFor="circle-radius"
              className={style.label}
            >
              <InputNumber
                id="circle-radius"
                className={style.input}
                min={1}
                defaultValue={5}
                value={radius}
                onChange={(value) => setRadius(Number(value))}
              />
            </Form.Item>
          </Form>
          {area && (
            <h3 className="title-rs">
              <span>Área: </span>
              <InputNumber className={style.input} disabled value={area} />
            </h3>
          )}
          {perimeter && (
            <h3 className="title-rs">
              <span>Perímetro: </span>
              <InputNumber className={style.input} disabled value={perimeter} />
            </h3>
          )}
        </Col>
        <Col span={24} lg={12}>
          <Image
            layout="responsive"
            height={400}
            width={450}
            src={circleArea}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
