import React, { Fragment } from "react";
import Navigation from "../components/navbar.component";

type Props = {};

const Martin = (props: Props) => {
  return (
    <Fragment>
      <Navigation />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>
          Martin <i> Te Amo ❤️</i>
        </h1>

        <video controls width={"50%"}>
          <source
            src="https://scontent.cdninstagram.com/o1/v/t16/f1/m82/A140CFBAC1BEC803EEC6423277E1B69C_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLmNsaXBzLmJhc2VsaW5lIn0&amp;_nc_ht=instagram.fmla1-1.fna.fbcdn.net&amp;_nc_cat=105&amp;vs=1309294336571645_3961422903&amp;_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BMTQwQ0ZCQUMxQkVDODAzRUVDNjQyMzI3N0UxQjY5Q192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0VtLTdBSklXc2Y4QXNJRUFJTk83dEtqOWtSaWJwUjFBQUFGFQICyAEAKAAYABsAFQAAJtKtuej2779AFQIoAkMzLBdAa97peNT99BgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&amp;ccb=9-4&amp;oh=00_AfCjEWyMbmx12sf0CmeXms4DVCuTteH8tL8TyjtZ7DKMXw&amp;oe=63F0476F&amp;_nc_sid=1527a3"
            type="video/mp4"
          />
        </video>
      </div>
    </Fragment>
  );
};
export default Martin;
