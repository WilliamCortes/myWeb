import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Form, InputNumber, Row, Typography } from "antd";
import cubeImage from "@/public/assets/sena/cube.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Cube = () => {
  const [sideLength, setSideLength] = useState<number>(4);
  const [volume, setVolume] = useState<number>(64);

  useEffect(() => {
    if (!sideLength) return;
    setVolume(sideLength ** 3);
  }, [sideLength]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>
        Hexaedro (Cubo)
      </Title>
      <p className="text-rs">
        Un hexaedro, también conocido como cubo, es un sólido regular que tiene
        seis caras cuadradas congruentes. Para calcular el volumen de un cubo,
        necesitas conocer la longitud de una de las aristas. La fórmula para el
        volumen del cubo es: Volumen = L^3 Donde "L" es la longitud de una de
        las aristas.
      </p>
      <Row justify="center">
        <Col span={24} lg={12}>
          <Title level={3}>Calcula el volumen!</Title>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            layout="vertical"
          >
            <Form.Item
              label="Ingresa la longitud de una arista"
              htmlFor="cube-side-length"
              className={style.label}
            >
              <InputNumber
                id="cube-side-length"
                className={style.input}
                min={1}
                defaultValue={4}
                value={sideLength}
                onChange={(value) => setSideLength(Number(value))}
              />
            </Form.Item>
          </Form>
          {volume && (
            <h3 className="title-rs--vol">
              <span>
                Volumen und&nbsp;&nbsp;<i>3</i>:{" "}
              </span>
              <InputNumber className={style.input} disabled value={volume} />
            </h3>
          )}
        </Col>
        <Col span={24} lg={12}>
          <Image
            className={style.img}
            height={450}
            width={400}
            src={cubeImage}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
