import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Form, InputNumber, Row, Typography } from "antd";
import dodecahedronVolume from "@/public/assets/sena/dodecahedron-volume.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Dodecahedron = () => {
  const [edge, setEdge] = useState<number>(3);
  const [volume, setVolume] = useState<number>(62.5);

  useEffect(() => {
    if (!edge) return;
    const v = ((15 + 7 * Math.sqrt(5)) / 4) * Math.pow(edge, 3);
    setVolume(v);
  }, [edge]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>
        Dodecaedro
      </Title>
      <p className="text-rs">
        Un dodecaedro es un poliedro de doce caras (dodeca-significa "doce" en
        griego). Cada cara es un pentágono regular y se encuentran en los
        vértices. El dodecaedro tiene 20 vértices y 30 aristas. La fórmula para
        el volumen del dodecaedro es: Volumen = (15 + 7 * √5) / 4 * a³ Donde "a"
        es la longitud de la arista del dodecaedro.
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
              htmlFor="dodecahedron-edge"
              className={style.label}
            >
              <InputNumber
                id="dodecahedron-edge"
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
            src={dodecahedronVolume}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
