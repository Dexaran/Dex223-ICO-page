import React, {useRef} from "react";
import styles from "./ContactUs.module.scss";
import ArticleHeading from "../../atoms/ArticleHeading";
import NeonBlock from "../../organisms/NeonBlock";
import ExternalTextLink from "../../atoms/ExternalTextLink";
import Svg from "../../atoms/Svg";
import ContactUsImage from "../../../assets/images/tg-contact-us.svg";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import clsx from "clsx";
import Image from "next/image";

export default function ContactUs() {
  const ref = useRef();
  const entry = useIntersectionObserver(ref, {threshold: 0.8, freezeOnceVisible: true})

  return <div className="container relative">
    <div className={styles.pattern}>
      <Image alt="" src="/images/patterns/green.svg" width={1000} height={1000} />
    </div>
    <NeonBlock
      icon="contact"
      color="green"
      overlineText="Contact Us"
      anchor="contact"
      leftContent={
        <>
          <ArticleHeading text="Get in touch"/>
          <p className={styles.text}>
            To contact us please fill out the form below which sends letters to
            email <ExternalTextLink text="dexaran@ethereumclassic.org" href="mailto:dexaran@ethereumclassic.org"/> or
            Telegram <ExternalTextLink text="@Dexaran" href="https://t.me/Dexaran"/>.
          </p>
          <div className={styles.buttonsWrapper}>
            <a href="mailto:dexaran@ethereumclassic.org">
              <button>
                <span>Write to email</span>
                <Svg iconName="email" />
              </button>
            </a>
            <a href="https://t.me/Dexaran">
              <button>
            <span>
              Write to Telegram
            </span>
                <Svg iconName="telegram" />
              </button>
            </a>
          </div>
          <div className={styles.openSrcInfo}>
            <span className={styles.srcIcon}>
              <Svg iconName="code" />
            </span>
            <span>This page is open-source. You can reuse it in your projects without any restrictions.</span>
          </div>
        </>
      }
      rightContent={
        <div ref={ref} className={clsx(styles.rightContent, entry?.isIntersecting && "animated")}>
          <ContactUsImage />
        </div>
      }
    />
  </div>
}
