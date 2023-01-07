import React from "react";

type Props = {};

const TableWQuestions = (props: Props) => {
  return (
    <div className="t-container">
      <table>
        <thead>
          <tr>
            <th>Tiempo</th>
            <th>Who</th>
            <th>What</th>
            <th>Where</th>
            <th>When</th>
            <th>Why</th>
            <th>How</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Simple Present</td>
            <td>Who</td>
            <td>What</td>
            <td>Where</td>
            <td>When</td>
            <td>Why</td>
            <td>How</td>
          </tr>
          <tr>
            <td></td>
            <td>Who is your friend?</td>
            <td>What is your name?</td>
            <td>Where are you from?</td>
            <td>When is your birthday?</td>
            <td>Why are you here?</td>
            <td>How are you?</td>
          </tr>
          <tr>
            <td>Simple Past</td>
            <td>Who was your teacher?</td>
            <td>What was your first job?</td>
            <td>Where was your first apartment?</td>
            <td>When was your last vacation?</td>
            <td>Why was your favorite toy?</td>
            <td>How was your first day at school?</td>
          </tr>
          <tr>
            <td>Present Perfect</td>
            <td>Who has seen the movie?</td>
            <td>What has changed?</td>
            <td>Where has he gone?</td>
            <td>When has she finished?</td>
            <td>Why has he left?</td>
            <td>How has it been?</td>
          </tr>
          <tr>
            <td>Past Perfect</td>
            <td>Who had the idea?</td>
            <td>What had happened?</td>
            <td>Where had you been?</td>
            <td>When had you arrived?</td>
            <td>Why had you called?</td>
            <td>How had it been going?</td>
          </tr>
          <tr>
            <td>Present Continuous</td>
            <td>Who is your mom talking to?</td>
            <td>What is your dad doing?</td>
            <td>Where is your sister going?</td>
            <td>When is your brother coming back?</td>
            <td>Why is your cousin here?</td>
            <td>How is your grandmother feeling?</td>
          </tr>
          <tr>
            <td>Future Simple</td>
            <td>Who will be there?</td>
            <td>What will you do?</td>
            <td>Where will you go?</td>
            <td>When will it happen?</td>
            <td>Why will it rain?</td>
            <td>How will you get there?</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableWQuestions;
