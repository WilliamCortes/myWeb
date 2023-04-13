import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Form, InputNumber, Row, Typography } from "antd";
import icosahedronVolume from "@/public/assets/sena/icosahedron-volume.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Icosahedron = () => {
  const [edge, setEdge] = useState<number>(3);
  const [volume, setVolume] = useState<number>(0);

  useEffect(() => {
    if (!edge) return;
    const v = (5 / 12) * (3 + Math.sqrt(5)) * Math.pow(edge, 3);
    setVolume(v);
  }, [edge]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Icosaedro</Title>
      <p className="text-rs">
        Un icosaedro es un poliedro formado por 20 caras triangulares
        equiláteras, 12 vértices y 30 aristas. La fórmula para el volumen del
        icosaedro es: Volumen = (5/12) * (3 + √5) * a³ Donde "a" es la longitud
        de la arista del icosaedro.
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
              label="Ingresa la medida de la arista"
              htmlFor="icosahedron-edge"
              className={style.label}
            >
              <InputNumber
                id="icosahedron-edge"
                className={style.input}
                min={1}
                defaultValue={3}
                value={edge}
                onChange={(value) => setEdge(Number(value))}
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
            src={icosahedronVolume}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
