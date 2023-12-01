import React from "react";
import styles from "./TokenCard.module.scss";
import Image from "next/image";
import clsx from "clsx";
import Spacer from "../../../atoms/Spacer";
import { NumericFormat } from 'react-number-format';
import TokenPicker from "@/components/organisms/buy-form/TokenPicker";

interface Props {
  type: "pay" | "receive",
  tokenName: string,
  tokenLogo: string,
  amount: string,
  handleChange: any,
  readonly?: boolean
  balance: string,
  withPicker?: boolean
}

export default function TokenCard({
                                    type,
                                    tokenName,
                                    tokenLogo,
                                    amount,
                                    handleChange,
                                    readonly = false,
                                    balance = "",
  withPicker = false
                                  }: Props) {
  return <>
    {withPicker && <TokenPicker/>}
    <div className={clsx(styles.tokenCard, withPicker && styles.withPicker)}>
      <div className={styles.inputWrapper}>
        <h2>{type === "pay" ? <span>Amount in <span className="bold">{tokenName}</span> you pay</span> :
          <span>Amount in <span className="bold">{tokenName}</span> you receive</span>}</h2>
        <NumericFormat
          inputMode="decimal"
          onValueChange={(values) => handleChange(values.value)}
          placeholder={"0"}
          className={clsx(styles.input)}
          readOnly={readonly}
          type="text"
          value={amount}
        />
      </div>
      <div className={styles.imageWrapper}><Image layout="fill" objectFit="contain" src={tokenLogo} alt=""/></div>

    </div>
    <Spacer height={4}/>
    {Boolean(balance) ? <p className={styles.balance}>Balance: {balance}</p> :
      <div className={styles.balancePlaceholder}/>}
  </>;
}
