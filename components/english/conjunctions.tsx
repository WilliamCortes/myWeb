// components/Conjunctions.js
const conjunctions = {
  purposeConjunctions: {
    "in order to": {
      translation: "Para",
      meaning: "Used to express the purpose of an action.",
      example: "He works hard in order to buy a house.",
    },
    "so that": {
      translation: "Para que",
      meaning: "Used to indicate the purpose of an action.",
      example: "She studies hard so that she can pass the exam.",
    },
    "in order that": {
      translation: "Con el fin de que",
      meaning: "Similar to 'so that', expressing purpose.",
      example: "He saves money in order that he can travel.",
    },
    "for the purpose of": {
      translation: "Con el propósito de",
      meaning: "Used to indicate the intention behind an action.",
      example:
        "They organized a meeting for the purpose of discussing the project.",
    },
  },
  causalConjunctions: {
    because: {
      translation: "Porque",
      meaning: "Indicates the reason or cause.",
      example: "He is late because he missed the bus.",
    },
    "due to": {
      translation: "Debido a",
      meaning: "Used to explain the cause of something.",
      example: "The event was canceled due to the weather.",
    },
    since: {
      translation: "Ya que",
      meaning:
        "Used to show cause or reason, often implying a time relationship.",
      example: "Since it was raining, we stayed indoors.",
    },
    as: {
      translation: "Como",
      meaning: "Can be used to indicate cause, similar to 'because'.",
      example: "As the weather was nice, we decided to go for a walk.",
    },
    "owing to": {
      translation: "Debido a",
      meaning: "Indicates the cause, similar to 'due to'.",
      example: "The match was postponed owing to heavy rain.",
    },
    "thanks to": {
      translation: "Gracias a",
      meaning: "Expresses a positive result due to something.",
      example: "Thanks to her efforts, the project was completed on time.",
    },
  },
};

export const Conjunctions = () => (
  <div>
    <h2 className="t-title">Conjunctions</h2>

    <h2>Purpose Conjunctions</h2>
    <ul>
      {Object.entries(conjunctions.purposeConjunctions).map(
        ([conjunction, info]) => (
          <li key={conjunction}>
            <strong>{conjunction}</strong>: {info.translation}
            <p>{info.meaning}</p>
            <p>
              <em>Example:</em> {info.example}
            </p>
          </li>
        )
      )}
    </ul>
    <h2>Causal Conjunctions</h2>
    <ul>
      {Object.entries(conjunctions.causalConjunctions).map(
        ([conjunction, info]) => (
          <li key={conjunction}>
            <strong>{conjunction}</strong>: {info.translation}
            <p>{info.meaning}</p>
            <p>
              <em>Example:</em> {info.example}
            </p>
          </li>
        )
      )}
    </ul>
  </div>
);
