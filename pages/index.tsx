import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Button } from "antd";
import Navigation from "../components/navbar.component";
import TableToBe from "../components/tableToBe";
import TableToGo from "../components/tableToGo";
import TableToDo from "../components/tableToDo";
import TableWQuestions from "../components/tableWQuestions";
import TableWQuestionsEX from "../components/tableWQuestionsEX";
import FrecuentryCuestions from "../components/frecuentryCuestions";
import Verbs from "../components/verbs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>English Tables</title>
        <meta name="description" content="Tables in english" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navigation />

        <TableToBe />
        <TableToGo />
        <TableToDo />
        <Verbs />
        <TableWQuestions />
        <TableWQuestionsEX />
        <FrecuentryCuestions />

        <div>
          <Button type="primary">By william</Button>
        </div>
      </main>
    </>
  );
}
