import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Form, InputNumber, Row, Typography } from "antd";
import octahedronVolume from "@/public/assets/sena/octahedron-volume.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Octahedron = () => {
  const [edge, setEdge] = useState<number>(3);
  const [volume, setVolume] = useState<number>(9.9);

  useEffect(() => {
    if (!edge) return;
    const v = (2 / 3) * Math.sqrt(2) * Math.pow(edge, 3);
    setVolume(v);
  }, [edge]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Octaedro</Title>
      <p className="text-rs">
        Un octaedro es un poliedro de ocho caras (octa-significa "ocho" en
        griego). Cada cara es un triángulo equilátero y se encuentran en los
        vértices. El octaedro tiene 6 vértices y 12 aristas. La fórmula para el
        volumen del octaedro es: Volumen = (2/3) * √2 * a³ Donde "a" es la
        longitud de la arista del octaedro.
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
              htmlFor="octahedron-edge"
              className={style.label}
            >
              <InputNumber
                id="octahedron-edge"
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
            src={octahedronVolume}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
