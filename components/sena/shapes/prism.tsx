import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Form, InputNumber, Row, Typography } from "antd";
import prismVolume from "@/public/assets/sena/prism-volume.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Prism = () => {
  const [height, setHeight] = useState<number>(25);
  const [width, setWidth] = useState<number>(5);
  const [length, setLength] = useState<number>(5);
  const [volume, setVolume] = useState<number>(625);

  useEffect(() => {
    if (!height || !width || !length) return;
    const v = height * width * length;
    setVolume(v);
  }, [height, width, length]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Prisma</Title>
      <p className="text-rs">
        Un prisma es un sólido geométrico que tiene dos bases congruentes y
        paralelas, y cuyas caras laterales son paralelogramos. La fórmula para
        el volumen de un prisma es: Volumen = Base x Altura Donde "Base" es el
        área de la base del prisma, y "Altura" es la distancia entre las dos
        bases.
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
              label="Ingresa la altura"
              htmlFor="prism-height"
              className={style.label}
            >
              <InputNumber
                id="prism-height"
                className={style.input}
                min={1}
                defaultValue={5}
                value={height}
                onChange={(value) => setHeight(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa el ancho"
              htmlFor="prism-width"
              className={style.label}
            >
              <InputNumber
                id="prism-width"
                className={style.input}
                min={1}
                defaultValue={3}
                value={width}
                onChange={(value) => setWidth(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa la longitud"
              htmlFor="prism-length"
              className={style.label}
            >
              <InputNumber
                id="prism-length"
                className={style.input}
                min={1}
                defaultValue={4}
                value={length}
                onChange={(value) => setLength(Number(value))}
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
            src={prismVolume}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
