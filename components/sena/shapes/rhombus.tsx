import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Col, Divider, Form, InputNumber, Row, Typography } from "antd";
import rhombusArea from "@/public/assets/sena/rhombus-area.png";
// import rhombusPerimeter from "@/public/assets/sena/rhombus-perimeter.png";
import style from "@/styles/sena.module.scss";

const { Title } = Typography;

export const Rhombus = () => {
  const [diagonal1, setDiagonal1] = useState<number>(16);
  const [diagonal2, setDiagonal2] = useState<number>(12);
  const [area, setArea] = useState<number>(96);
  const [perimeter, setPerimeter] = useState<number>(40);

  useEffect(() => {
    if (!diagonal1 || !diagonal2) return;
    setArea((diagonal1 * diagonal2) / 2);
    setPerimeter(Math.sqrt(diagonal1 ** 2 + diagonal2 ** 2) * 2);
  }, [diagonal1, diagonal2]);

  return (
    <Fragment>
      <Title style={{ textAlign: "center", marginBottom: 60 }}>Rombo</Title>
      <p className="text-rs">
        Un rombo es una figura geométrica que tiene cuatro lados iguales y dos
        diagonales que se intersectan en ángulos rectos. Para calcular el área
        de un rombo, necesitas multiplicar las longitudes de las dos diagonales
        y dividir entre dos. La fórmula para el área del rombo es: Área =
        (Diagonal 1 x Diagonal 2) / 2 Donde "Diagonal 1" y "Diagonal 2" son las
        longitudes de las dos diagonales. Para calcular el perímetro de un
        rombo, necesitas multiplicar la longitud de uno de los lados por 4. La
        fórmula para el perímetro del rombo es: Perímetro = 4 x Lado Donde
        "Lado" es la longitud de uno de los lados.
      </p>
      <Row justify="center">
        <Col span={24} lg={12}>
          <Title level={3}>Calcula el área y el perímetro!</Title>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
            layout="vertical"
          >
            <Form.Item
              label="Ingresa la medida de la Diagonal 1"
              htmlFor="rhombus-diagonal1"
              className={style.label}
            >
              <InputNumber
                id="rhombus-diagonal1"
                className={style.input}
                min={1}
                defaultValue={4}
                value={diagonal1}
                onChange={(value) => setDiagonal1(Number(value))}
              />
            </Form.Item>
            <Form.Item
              label="Ingresa la medida de la Diagonal 2"
              htmlFor="rhombus-diagonal2"
              className={style.label}
            >
              <InputNumber
                id="rhombus-diagonal2"
                className={style.input}
                min={1}
                defaultValue={3}
                value={diagonal2}
                onChange={(value) => setDiagonal2(Number(value))}
              />
            </Form.Item>
          </Form>
          {area && (
            <h3 className="title-rs">
              <span>
                Área und<i>&nbsp;&nbsp;</i>:
              </span>{" "}
              <InputNumber className={style.input} disabled value={area} />
            </h3>
          )}
          {perimeter && (
            <h3 className="title-rs">
              <span>Perímetro und: </span>
              <InputNumber className={style.input} disabled value={perimeter} />
            </h3>
          )}
        </Col>
        <Col span={24} lg={12}>
          <Image
            className={style.img}
            height={380}
            width={450}
            src={rhombusArea}
            alt=""
          />
          <Divider />
          {/*  <Image
            className={style.img}    height={250} width={250} src={rhombusPerimeter} alt="" /> */}
        </Col>
      </Row>
    </Fragment>
  );
};
