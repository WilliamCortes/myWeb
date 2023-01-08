import React from "react";

type Props = {};

const TableToDo = (props: Props) => {
  return (
    <div className="t-container">
      <h2 className="t-title">TO DO</h2>
      <table>
        <thead>
          <tr>
            <th>Simple Present</th>
            <th>Simple Past</th>
            <th>Present Perfect</th>
            <th>Past Perfect</th>
            <th>Present Continuous</th>
            <th>Past Continuous</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="t-subtitle">Affirmative</td>
            <td className="t-subtitle">Affirmative</td>
            <td className="t-subtitle">Affirmative</td>
            <td className="t-subtitle">Affirmative</td>
            <td className="t-subtitle">Affirmative</td>
            <td className="t-subtitle">Affirmative</td>
          </tr>
          <tr>
            <td>I do</td>
            <td>I did</td>
            <td>I have done</td>
            <td>I had done</td>
            <td>I am doing</td>
            <td>I was doing</td>
          </tr>
          <tr>
            <td>You do</td>
            <td>You did</td>
            <td>You have done</td>
            <td>You had done</td>
            <td>You are doing</td>
            <td>You were doing</td>
          </tr>
          <tr>
            <td>He/She/It does</td>
            <td>He/She/It did</td>
            <td>He/She/It has done</td>
            <td>He/She/It had done</td>
            <td>He/She/It is doing</td>
            <td>He/She/It was doing</td>
          </tr>
          <tr>
            <td>We do</td>
            <td>We did</td>
            <td>We have done</td>
            <td>We had done</td>
            <td>We are doing</td>
            <td>We were doing</td>
          </tr>
          <tr>
            <td>You do</td>
            <td>You did</td>
            <td>You have done</td>
            <td>You had done</td>
            <td>You are doing</td>
            <td>You were doing</td>
          </tr>
          <tr>
            <td>They do</td>
            <td>They did</td>
            <td>They have done</td>
            <td>They had done</td>
            <td>They are doing</td>
            <td>They were doing</td>
          </tr>
          <tr>
            <td className="t-subtitle-n">Negative</td>
            <td className="t-subtitle-n">Negative</td>
            <td className="t-subtitle-n">Negative</td>
            <td className="t-subtitle-n">Negative</td>
            <td className="t-subtitle-n">Negative</td>
            <td className="t-subtitle-n">Negative</td>
          </tr>
          <tr>
            <td>I don't do</td>
            <td>I didn't do</td>
            <td>I haven't done</td>
            <td>I hadn't done</td>
            <td>I'm not doing</td>
            <td>I wasn't doing</td>
          </tr>
          <tr>
            <td>You don't do</td>
            <td>You didn't do</td>
            <td>You haven't done</td>
            <td>You hadn't done</td>
            <td>You're not doing</td>
            <td>You weren't doing</td>
          </tr>
          <tr>
            <td>He/She/It doesn't do</td>
            <td>He/She/It didn't do</td>
            <td>He/She/It hasn't done</td>
            <td>He/She/It hadn't done</td>
            <td>He/She/It isn't doing</td>
            <td>He/She/It wasn't doing</td>
          </tr>
          <tr>
            <td>We don't do</td>
            <td>We didn't do</td>
            <td>We haven't done</td>
            <td>We hadn't done</td>
            <td>We're not doing</td>
            <td>We weren't doing</td>
          </tr>
          <tr>
            <td>You don't do</td>
            <td>You didn't do</td>
            <td>You haven't done</td>
            <td>You hadn't done</td>
            <td>You're not doing</td>
            <td>You weren't doing</td>
          </tr>
          <tr>
            <td>They don't do</td>
            <td>They didn't do</td>
            <td>They haven't done</td>
            <td>They hadn't done</td>
            <td>They're not doing</td>
            <td>They weren't doing</td>
          </tr>
          <tr>
            <td className="t-subtitle-q">Interrogative</td>
            <td className="t-subtitle-q">Interrogative</td>
            <td className="t-subtitle-q">Interrogative</td>
            <td className="t-subtitle-q">Interrogative</td>
            <td className="t-subtitle-q">Interrogative</td>
            <td className="t-subtitle-q">Interrogative</td>
          </tr>
          <tr>
            <td>Do I do</td>
            <td>Did I do</td>
            <td>Have I done</td>
            <td>Had I done</td>
            <td>Am I doing</td>
            <td>Was I doing</td>
          </tr>
          <tr>
            <td>Do you do</td>
            <td>Did you do</td>
            <td>Have you done</td>
            <td>Had you done</td>
            <td>Are you doing</td>
            <td>Were you doing</td>
          </tr>
          <tr>
            <td>Does he/she/it do</td>
            <td>Did he/she/it do</td>
            <td>Has he/she/it done</td>
            <td>Had he/she/it done</td>
            <td>Is he/she/it doing</td>
            <td>Was he/she/it doing</td>
          </tr>
          <tr>
            <td>Do we do</td>
            <td>Did we do</td>
            <td>Have we done</td>
            <td>Had we done</td>
            <td>Are we doing</td>
            <td>Were we doing</td>
          </tr>
          <tr>
            <td>Do you do</td>
            <td>Did you do</td>
            <td>Have you done</td>
            <td>Had you done</td>
            <td>Are you doing</td>
            <td>Were you doing</td>
          </tr>
          <tr>
            <td>Do they do</td>
            <td>Did they do</td>
            <td>Have they done</td>
            <td>Had they</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableToDo;
