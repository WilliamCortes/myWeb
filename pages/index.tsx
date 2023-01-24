import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Button, Divider } from "antd";
import Navigation from "../components/navbar.component";
import TableToBe from "../components/tableToBe";
import TableToGo from "../components/tableToGo";
import TableToDo from "../components/tableToDo";
import TableWQuestions from "../components/tableWQuestions";
import TableWQuestionsEX from "../components/tableWQuestionsEX";
import FrequentQuestions from "../components/frequentQuestions";
import Verbs from "../components/verbs";
import TableToHave from "../components/tableToHave";
import TableToBe2 from "../components/tableToBe2";
import TableToDo2 from "../components/tableToDo2";
import TableToGo2 from "../components/tableToGo2";
import TableToHave2 from "../components/tableToHave2";
import TableToWant from "../components/tableToWant";
import TableToSay from "../components/tableToSay";
import TableToGet from "../components/tableToGet";
import MyQuestions from "../components/myQuestions";
import TableWQuestionsExamples from "../components/tableWquestionsExamples";
import QUASIQuestions from "../components/quasiQuestions";
import Verbs50 from "../components/verbs50";
import Verbs100 from "../components/verbs100";
import Verbs150 from "../components/verbs150";

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
        <Verbs50 />
        <Verbs100 />
        <Verbs150 />

        <TableToBe2 />
        <TableToHave2 />
        <TableToDo2 />
        <TableToWant />
        <TableToGo2 />
        <TableToSay />
        <TableToGet />
        <Verbs />
        <Divider />
        <QUASIQuestions />
        <Divider />
        <TableWQuestions />
        <Divider />
        <TableWQuestionsExamples />
        <Divider />
        <MyQuestions />
        <Divider />
        <TableWQuestionsEX />
        <Divider />
        <FrequentQuestions />
        <Divider />

        <TableToBe />
        <TableToDo />
        <TableToGo />
        <TableToHave />
        <div>
          <Button type="primary">By william</Button>
        </div>
      </main>
    </>
  );
}
