import React from "react";

type Props = {};

const TableWQuestionsEX = (props: Props) => {
  return (
    <div className="t-container">
      <table>
        <thead>
          <tr>
            <th>Tiempo</th>
            <th>Pregunta y respuesta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-title">Simple Present</td>
            <td>
              Who is your friend? My friend is Maria. What is your name? My name
              is John. Where are you from? I'm from the United States. When is
              your birthday? My birthday is in May. Why are you here? I'm here
              to meet my friend. How are you? I'm fine, thank you.
            </td>
          </tr>
          <tr>
            <td>Simple Past</td>
            <td>
              Who was your teacher? My teacher was Mrs. Smith. What was your
              first job? My first job was a cashier. Where was your first
              apartment? My first apartment was in New York City. When was your
              last vacation? My last vacation was in June. Why was your favorite
              toy? My favorite toy was a stuffed animal that my grandma gave me.
              How was your first day at school? My first day at school was a
              little stressful, but overall it was good.
            </td>
          </tr>
          <tr>
            <td>Present Perfect</td>
            <td>
              Who has seen the movie? Maria has seen the movie. What has
              changed? The prices have changed. Where has he gone? He has gone
              to the store. When has she finished? She has finished her
              homework. Why has he left? He has left early because he has a
              meeting. How has it been? It has been going well.
            </td>
          </tr>
          <tr>
            <td>Past Perfect</td>
            <td>
              Who had the idea? John had the idea. What had happened? There had
              been an accident. Where had you been? I had been at the park. When
              had you arrived? I had arrived at 10am. Why had you called? I had
              called to ask for directions. How had it been going? It had been
              going well.
            </td>
          </tr>
          <tr>
            <td>Present Continuous</td>
            <td>
              Who is your mom talking to? My mom is talking to my uncle. What is
              your dad doing? My dad is cooking dinner. Where is your sister
              going? My sister is going to the library. When is your brother
              coming back? My brother is coming back in a week. Why is your
              cousin here? My cousin is here to visit us. How is your
              grandmother feeling? My grandmother is feeling a little sick.
            </td>
          </tr>
          <tr>
            <td>Future Simple</td>
            <td>
              Who will be there? My friends will be there. What will you do? I
              will go to the movies. Where will you go? I will go to the beach.
              When will it happen? It will happen next weekend. Why will it
              rain? It will rain because of the storm. How will you get there? I
              will get there by car.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableWQuestionsEX;
