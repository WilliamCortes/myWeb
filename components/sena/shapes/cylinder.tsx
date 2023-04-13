import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Form, InputNumber, Row, Typography } from "antd";
import cylinderVolume from "@/public/assets/sena/cylinder-volume.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Cylinder = () => {
  const [radius, setRadius] = useState<number>(3);
  const [height, setHeight] = useState<number>(5);
  const [volume, setVolume] = useState<number>(141.37);

  useEffect(() => {
    if (!radius || !height) return;
    const v = Math.PI * Math.pow(radius, 2) * height;
    setVolume(v);
  }, [radius, height]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Cilindro</Title>
      <p className="text-rs">
        Un cilindro es un sólido de revolución generado por el giro de un
        rectángulo alrededor de uno de sus lados. Un cilindro tiene dos caras,
        que son círculos iguales y paralelos en los extremos, y un cuerpo
        cilíndrico recto que los une. La fórmula para el volumen del cilindro
        es: Volumen = π * r² * h Donde "r" es el radio del círculo y "h" es la
        altura del cilindro.
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
              label="Ingresa el radio del cilindro"
              htmlFor="cylinder-radius"
              className={style.label}
            >
              <InputNumber
                id="cylinder-radius"
                className={style.input}
                min={1}
                defaultValue={3}
                value={radius}
                onChange={(value) => setRadius(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa la altura del cilindro"
              htmlFor="cylinder-height"
              className={style.label}
            >
              <InputNumber
                id="cylinder-height"
                className={style.input}
                min={1}
                defaultValue={5}
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
            className={style.img}
            height={400}
            width={450}
            src={cylinderVolume}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
