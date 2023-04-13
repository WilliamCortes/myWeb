import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Divider, Form, InputNumber, Row, Typography } from "antd";
import parallelogramArea from "@/public/assets/sena/parallelogram-area.png";
import parallelogramPerimeter from "@/public/assets/sena/parallelogram-perimeter.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Parallelogram = () => {
  const [base, setBase] = useState<number>(8);
  const [height, setHeight] = useState<number>(6);
  const [side, setSide] = useState<number>(7);
  const [area, setArea] = useState<number>(48);
  const [perimeter, setPerimeter] = useState<number>(30);

  useEffect(() => {
    if (!base || !height || !side) return;
    setArea(base * height);
    setPerimeter(2 * (base + side));
  }, [base, height, side]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>
        Paralelogramo
      </Title>
      <p className="text-rs">
        Un paralelogramo es un polígono de cuatro lados, cuyos lados opuestos
        son paralelos entre sí. Esto significa que los lados opuestos del
        paralelogramo nunca se cruzan y siempre tienen la misma longitud. Los
        ángulos opuestos del paralelogramo también son iguales en medida. La
        fórmula para calcular el área de un paralelogramo es: Área = Base x
        Altura, donde "Base" es la longitud de uno de los lados paralelos y
        "Altura" es la distancia perpendicular entre los dos lados paralelos. La
        fórmula para el perímetro de un paralelogramo es: Perímetro = 2 x
        (Longitud del lado paralelo 1 + Longitud del lado paralelo 2), donde
        "Longitud del lado paralelo 1" y "Longitud del lado paralelo 2" son las
        longitudes de los dos lados paralelos del paralelogramo.
      </p>
      <Row justify="center">
        <Col span={24} lg={12}>
          <Title level={3}>Calcula el área y el perímetro</Title>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
            layout="vertical"
          >
            <Form.Item
              label="Ingresa la medida de la Base"
              htmlFor="parallelogram-base"
              className={style.label}
            >
              <InputNumber
                id="parallelogram-base"
                className={style.input}
                min={1}
                defaultValue={4}
                value={base}
                onChange={(value) => setBase(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa la medida de la Altura"
              htmlFor="parallelogram-height"
              className={style.label}
            >
              <InputNumber
                id="parallelogram-height"
                className={style.input}
                min={1}
                defaultValue={3}
                value={height}
                onChange={(value) => setHeight(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa la medida de un Lado"
              htmlFor="parallelogram-side"
              className={style.label}
            >
              <InputNumber
                id="parallelogram-side"
                className={style.input}
                min={1}
                defaultValue={5}
                value={side}
                onChange={(value) => setSide(Number(value))}
              />
            </Form.Item>
          </Form>
          {area && (
            <h3 className="title-rs">
              <span>Área: </span>
              <InputNumber className={style.input} disabled value={area} />
            </h3>
          )}
          {perimeter && (
            <h3 className="title-rs">
              <span>Perímetro: </span>
              <InputNumber className={style.input} disabled value={perimeter} />
            </h3>
          )}
        </Col>
        <Col span={24} lg={12}>
          <Image
            layout="responsive"
            height={250}
            width={400}
            src={parallelogramArea}
            alt=""
          />
          <Divider />
          <Image
            layout="responsive"
            height={250}
            width={250}
            src={parallelogramPerimeter}
            alt=""
          />
        </Col>
      </Row>
    </Fragment>
  );
};
