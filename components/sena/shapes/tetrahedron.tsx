import React, { Fragment, useEffect, useState } from "react";
import { Col, Form, InputNumber, Row, Typography } from "antd";
import tetrahedronVolume from "@/public/assets/sena/tetrahedron-volume.png";
import style from "@/styles/sena.module.scss";
import Image from "next/image";

const { Title } = Typography;

export const Tetrahedron = () => {
  const [edge, setEdge] = useState<number>(4);
  const [volume, setVolume] = useState<number>(
    (Math.sqrt(2) / 12) * Math.pow(edge, 3)
  );

  useEffect(() => {
    if (!edge) return;
    setVolume((Math.sqrt(2) / 12) * Math.pow(edge, 3));
  }, [edge]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Tetraedro</Title>
      <p className="text-rs">
        Un tetraedro es un poliedro de cuatro caras que son triángulos. Tiene
        cuatro vértices y seis aristas. Para calcular el volumen de un tetraedro
        regular, necesitas conocer la longitud de las aristas (los lados de los
        triángulos que conforman el tetraedro). La fórmula para el volumen del
        tetraedro es: Volumen = sqrt(2) / 12 x a^3 Donde "a" es la longitud de
        las aristas.
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
              label="Ingresa la longitud de las aristas"
              htmlFor="tetrahedron-edge"
              className={style.label}
            >
              <InputNumber
                id="tetrahedron-edge"
                className={style.input}
                min={1}
                defaultValue={4}
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
            height={300}
            width={250}
            src={tetrahedronVolume}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
