import React from "react";

type Props = {};

const MyQuestions = (props: Props) => {
  return (
    <div>
      <h2 className="t-title">My Questions</h2>
      <ol>
        <li>
          What is your name?
          <ul>
            <li>My name is [name].</li>
          </ul>
        </li>
        <li>
          Where are you from?
          <ul>
            <li>I am from [country/city].</li>
          </ul>
        </li>
        <li>
          How old are you?
          <ul>
            <li>I am [age] years old.</li>
          </ul>
        </li>
        <li>
          What do you like to do in your free time?
          <ul>
            <li>I like to [activity] in my free time.</li>
          </ul>
        </li>
        <li>
          Do you have siblings?
          <ul>
            <li>Yes, I have [number] siblings.</li>
          </ul>
        </li>
        <li>
          What is your favorite food?
          <ul>
            <li>My favorite food is [food].</li>
          </ul>
        </li>
        <li>
          Do you speak any languages other than English?
          <ul>
            <li>Yes, I speak [language/s].</li>
          </ul>
        </li>
        <li>
          What is your favorite color?
          <ul>
            <li>My favorite color is [color].</li>
          </ul>
        </li>
        <li>
          Do you have any hobbies or interests?
          <ul>
            <li>Yes, my hobby or interest is [hobby].</li>
          </ul>
        </li>
        <li>What is your favorite book/movie/TV show?</li>

        <li>
          How long have you been in Malta?
          <ul>
            <li>I have been in Malta for [length of time].</li>
          </ul>
        </li>
        <li>
          When did you arrive?
          <ul>
            <li>I arrived on [date].</li>
          </ul>
        </li>
        <li>
          Is your family here or in your country?
          <ul>
            <li>My family is [here/in my country].</li>
          </ul>
        </li>
        <li>
          What is your job?
          <ul>
            <li>My job is [job].</li>
          </ul>
        </li>
        <li>
          Is it a good job?
          <ul>
            <li>It is a [good/not good] job.</li>
          </ul>
        </li>
        <li>
          How long do you plan to stay here?
          <ul>
            <li>I plan to stay here for [length of time].</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default MyQuestions;
