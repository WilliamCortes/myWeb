import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Form, InputNumber, Row, Typography } from "antd";
import pyramidVolume from "@/public/assets/sena/pyramid-volume.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Pyramid = () => {
  const [base, setBase] = useState<number>(5);
  const [height, setHeight] = useState<number>(8);
  const [volume, setVolume] = useState<number>(66.67);

  useEffect(() => {
    if (!base || !height) return;
    const v = (1 / 3) * base * base * height;
    setVolume(v);
  }, [base, height]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Pirámide</Title>
      <p className="text-rs">
        Una pirámide es un poliedro formado por una base plana, que puede ser
        cualquier polígono, y caras laterales que se encuentran en un punto
        común llamado vértice. La fórmula para el volumen de la pirámide es:
        Volumen = (1/3) * B * h Donde "B" es el área de la base y "h" es la
        altura de la pirámide.
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
              label="Ingresa la base"
              htmlFor="pyramid-base"
              className={style.label}
            >
              <InputNumber
                id="pyramid-base"
                className={style.input}
                min={1}
                defaultValue={5}
                value={base}
                onChange={(value) => setBase(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa la altura"
              htmlFor="pyramid-height"
              className={style.label}
            >
              <InputNumber
                id="pyramid-height"
                className={style.input}
                min={1}
                defaultValue={8}
                value={height}
                onChange={(value) => setHeight(Number(value))}
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
            width={450}
            src={pyramidVolume}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
