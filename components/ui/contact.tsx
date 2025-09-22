import React, { FC } from "react";

type Placeholder = {
  name: string;
  email: string;
  message: string;
  btn: string;
};

type Props = {
  title: string;
  location: string;
  address: string;
  city: string;
  country: string;
  emailTitle: string;
  email: string;
  phoneTitle: string;
  phone: string;
  whatsAppMessage: string;
  action: string;
  placeholder: Placeholder;
};

export const Contact: FC<Props> = ({
  title,
  location,
  address,
  city,
  country,
  emailTitle,
  email,
  phoneTitle,
  phone,
  whatsAppMessage,
  action,
  placeholder,
}) => {
  return (
    <section
      id="hire-me"
      className="layout-section"
      aria-labelledby="heading-hireme"
    >
      <div className="container">
        <h2 id="heading-hireme" className="title--sm layout-section-title">
          {title}
        </h2>
        <div className="hire-form">
          <div>
            <address>
              <div className="hire-line">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2.5C10.1625 2.5 6.25 6.4125 6.25 11.25C6.25 17.8125 15 27.5 15 27.5C15 27.5 23.75 17.8125 23.75 11.25C23.75 6.4125 19.8375 2.5 15 2.5ZM15 14.375C13.275 14.375 11.875 12.975 11.875 11.25C11.875 9.525 13.275 8.125 15 8.125C16.725 8.125 18.125 9.525 18.125 11.25C18.125 12.975 16.725 14.375 15 14.375Z"
                    fill="var(--light-icon)"
                  />
                </svg>
                <div>
                  <p className="text hire-subtitle">{location}</p>
                  <p className="text--bold hire-value">
                    {address}
                    <br />
                    {city} {country}
                  </p>
                </div>
              </div>
              <div className="hire-line">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM25 10L15 16.25L5 10V7.5L15 13.75L25 7.5V10Z"
                    fill="var(--light-icon)"
                  />
                </svg>
                <div>
                  <p className="text hire-subtitle">{emailTitle}</p>
                  <a className="text--bold hire-value" href={`mailto:${email}`}>
                    {email}
                  </a>
                </div>
              </div>
              <div className="hire-line">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z"
                    fill="var(--light-icon)"
                  />
                </svg>
                <div>
                  <p className="text hire-subtitle">{phoneTitle}</p>
                  <a
                    className="text--bold hire-value"
                    href={`https://api.whatsapp.com/send?phone=${phone}&text=${whatsAppMessage}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    + {phone}
                  </a>
                </div>
              </div>
            </address>
          </div>
          <form target="_blank" action={action} method="POST">
            <label htmlFor="hire-name" className="sr-only" />
            <input
              id="hire-name"
              type="text"
              autoComplete="name"
              className="input"
              placeholder={placeholder?.name}
            />
            <label htmlFor="hire-email" className="sr-only" />
            <input
              id="hire-email"
              type="email"
              autoComplete="email"
              className="input"
              placeholder={placeholder?.email}
            />
            <label htmlFor="hire-message" className="sr-only" />
            <textarea
              id="hire-message"
              className="input"
              placeholder={placeholder?.message}
            ></textarea>
            <div className="hire-action">
              <input
                type="submit"
                className="btn btn--raised"
                value={placeholder?.btn}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
