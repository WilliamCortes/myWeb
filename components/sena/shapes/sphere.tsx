import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Form, InputNumber, Row, Typography } from "antd";
import sphereVolume from "@/public/assets/sena/sphere-volume.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Sphere = () => {
  const [radius, setRadius] = useState<number>(3);
  const [volume, setVolume] = useState<number>(113.1);

  useEffect(() => {
    if (!radius) return;
    const v = (4 / 3) * Math.PI * Math.pow(radius, 3);
    setVolume(v);
  }, [radius]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Esfera</Title>
      <p className="text-rs">
        Una esfera es una figura geométrica tridimensional que se crea cuando
        una circunferencia gira en torno a un eje que pasa por su centro. La
        fórmula para el volumen de la esfera es: Volumen = (4/3) * π * r³ Donde
        "r" es el radio de la esfera.
      </p>
      <Row justify="center">
        <Col span={24} lg={12}>
          <Title level={3}>Calcula el volumen!</Title>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="vertical"
          >
            <Form.Item
              label="Ingresa el radio"
              htmlFor="sphere-radius"
              className={style.label}
            >
              <InputNumber
                id="sphere-radius"
                className={style.input}
                min={1}
                defaultValue={3}
                value={radius}
                onChange={(value) => setRadius(Number(value))}
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
            src={sphereVolume}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
