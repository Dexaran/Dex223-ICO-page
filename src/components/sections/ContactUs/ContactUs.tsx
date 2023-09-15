import React from "react";
import styles from "./ContactUs.module.scss";
import ArticleHeading from "../../atoms/ArticleHeading";
import NeonBlock from "../../organisms/NeonBlock";
import ExternalTextLink from "../../atoms/ExternalTextLink";

export default function ContactUs() {
  return <NeonBlock
    icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M4 42C2.9 42 1.95833 41.6083 1.175 40.825C0.391667 40.0417 0 39.1 0 38V10C0 8.9 0.391667 7.95833 1.175 7.175C1.95833 6.39167 2.9 6 4 6H44C45.1 6 46.0417 6.39167 46.825 7.175C47.6083 7.95833 48 8.9 48 10V38C48 39.1 47.6083 40.0417 46.825 40.825C46.0417 41.6083 45.1 42 44 42H4ZM18 28C19.6667 28 21.0833 27.4167 22.25 26.25C23.4167 25.0833 24 23.6667 24 22C24 20.3333 23.4167 18.9167 22.25 17.75C21.0833 16.5833 19.6667 16 18 16C16.3333 16 14.9167 16.5833 13.75 17.75C12.5833 18.9167 12 20.3333 12 22C12 23.6667 12.5833 25.0833 13.75 26.25C14.9167 27.4167 16.3333 28 18 28ZM4.2 38H31.8C30.4 35.5 28.4667 33.5417 26 32.125C23.5333 30.7083 20.8667 30 18 30C15.1333 30 12.4667 30.7083 10 32.125C7.53333 33.5417 5.6 35.5 4.2 38ZM30 22H40C40.5667 22 41.0417 21.8083 41.425 21.425C41.8083 21.0417 42 20.5667 42 20V14C42 13.4333 41.8083 12.9583 41.425 12.575C41.0417 12.1917 40.5667 12 40 12H30C29.4333 12 28.9583 12.1917 28.575 12.575C28.1917 12.9583 28 13.4333 28 14V20C28 20.5667 28.1917 21.0417 28.575 21.425C28.9583 21.8083 29.4333 22 30 22ZM35 17.5L38.7 14.9C38.9667 14.7 39.25 14.675 39.55 14.825C39.85 14.975 40 15.2167 40 15.55C40 15.5833 39.8833 15.8167 39.65 16.25L36.15 18.7C35.7833 18.9667 35.4 19.1 35 19.1C34.6 19.1 34.2167 18.9667 33.85 18.7L30.35 16.25C30.3167 16.2167 30.2 15.9833 30 15.55C30 15.2167 30.15 14.975 30.45 14.825C30.75 14.675 31.0333 14.7 31.3 14.9L35 17.5Z" fill="#F5FFF9"/>
    </svg>}
    color="green"
    overlineText="Contact Us"
    anchor="contact"
    leftContent={
      <>
        <ArticleHeading text="Get in touch" />
        <p className={styles.text}>
          To contact us please fill out the form below which sends letters to
          email <ExternalTextLink text="dexaran@ethereumclassic.org" href="mailto:dexaran@ethereumclassic.org" /> or Telegram <ExternalTextLink text="@Dexaran" href="https://t.me/Dexaran" />.
        </p>
        <div className={styles.buttonsWrapper}>
          <button>
            <span>Write to email</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 12.825C12.0833 12.825 12.1708 12.8125 12.2625 12.7875C12.3542 12.7625 12.4417 12.725 12.525 12.675L19.6 8.25C19.7333 8.16667 19.8333 8.0625 19.9 7.9375C19.9667 7.8125 20 7.675 20 7.525C20 7.19167 19.8583 6.94167 19.575 6.775C19.2917 6.60833 19 6.61667 18.7 6.8L12 11L5.3 6.8C5 6.61667 4.70833 6.6125 4.425 6.7875C4.14167 6.9625 4 7.20833 4 7.525C4 7.69167 4.03333 7.8375 4.1 7.9625C4.16667 8.0875 4.26667 8.18333 4.4 8.25L11.475 12.675C11.5583 12.725 11.6458 12.7625 11.7375 12.7875C11.8292 12.8125 11.9167 12.825 12 12.825Z" fill="#F5FFF9"/>
            </svg>
          </button>
          <button>
            <span>
              Write to Telegram
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.41512 11.8078C9.69912 9.04334 17.8311 5.67284 18.9536 5.20634C21.8981 3.98534 22.8016 4.21934 22.3511 6.92334C22.0276 8.86684 21.0941 15.3013 20.3501 19.3063C19.9086 21.6813 18.9181 21.9628 17.3606 20.9353C16.6116 20.4408 12.8311 17.9408 12.0106 17.3538C11.2616 16.8188 10.2286 16.1753 11.5241 14.9078C11.9851 14.4563 15.0071 11.5708 17.3616 9.32484C17.6701 9.02984 17.2826 8.54534 16.9266 8.78184C13.7531 10.8863 9.35312 13.8073 8.79312 14.1878C7.94712 14.7623 7.13462 15.0258 5.67612 14.6068C4.57412 14.2903 3.49762 13.9128 3.07862 13.7688C1.46512 13.2148 1.84812 12.4973 3.41512 11.8078Z" fill="#F5FFF9"/>
            </svg>
          </button>
        </div>
      </>
    }
    rightContent={
      <div className={styles.rightContent}>
        <img src="/images/tg-contact-us.svg" alt=""/>
      </div>
    }
  />
}
