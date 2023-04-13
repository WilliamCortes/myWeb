import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Form, InputNumber, Row, Typography } from "antd";
import coneVolume from "@/public/assets/sena/cone-volume.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Cone = () => {
  const [radius, setRadius] = useState<number>(3);
  const [height, setHeight] = useState<number>(4);
  const [volume, setVolume] = useState<number>(37.7);

  useEffect(() => {
    if (!radius || !height) return;
    const v = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    setVolume(v);
  }, [radius, height]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Cono</Title>
      <p className="text-rs">
        Un cono es un sólido geométrico que tiene una base circular y un vértice
        que no se encuentra en el mismo plano que la base. La fórmula para el
        volumen del cono es: Volumen = (1/3) * π * r² * h Donde "r" es el radio
        de la base y "h" es la altura del cono.
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
              label="Ingresa el radio de la base"
              htmlFor="cone-radius"
              className={style.label}
            >
              <InputNumber
                id="cone-radius"
                className={style.input}
                min={1}
                defaultValue={3}
                value={radius}
                onChange={(value) => setRadius(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa la altura"
              htmlFor="cone-height"
              className={style.label}
            >
              <InputNumber
                id="cone-height"
                className={style.input}
                min={1}
                defaultValue={4}
                value={height}
                onChange={(value) => setHeight(Number(value))}
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
            src={coneVolume}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
