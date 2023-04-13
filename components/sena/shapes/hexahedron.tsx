import React, { Fragment, useEffect, useState } from "react";
import { Col, Divider, Form, InputNumber, Row, Typography } from "antd";
import cubeImage from "@/public/assets/sena/cube.png";
import style from "@/styles/sena.module.scss";
import Image from "next/image";

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
            <h3 className="title-rs">
              <span>Volumen: </span>
              <InputNumber className={style.input} disabled value={volume} />
            </h3>
          )}
        </Col>
        <Col span={24} lg={12}>
          <Image
            layout="responsive"
            height={400}
            width={450}
            src={cubeImage}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
