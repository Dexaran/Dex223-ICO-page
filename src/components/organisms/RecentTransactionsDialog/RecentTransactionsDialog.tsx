import React from "react";
import styles from "./RecentTransactionsDialog.module.scss";
import {useRecentTransactions} from "@/stores/useRecentTransactions";
import Dialog from "@/components/atoms/Dialog";
import useZustandStore from "@/stores/useZustandStore";
import RecentTransaction from "@/components/organisms/RecentTransaction";
import DialogCloseButton from "@/components/atoms/DialogCloseButton";
import clsx from "clsx";

export default function RecentTransactionsDialog({isOpen, handleClose}) {
  const transactions = useZustandStore(useRecentTransactions, state => state.transactions);
  const {clearTransactions} = useRecentTransactions();

  return <Dialog isOpen={isOpen} onClose={handleClose}>
    <div className={styles.dialog}>
      <div className={styles.dialogHeader}>
        Recent transactions
        <DialogCloseButton handleClose={handleClose} />
      </div>
        <div className={clsx(styles.dialogContent, !transactions?.length && styles.empty)}>
          {transactions?.length
            ? <><div className={styles.transactionsList}>
              {transactions?.map((transaction) => {
                return <RecentTransaction key={transaction.hash} transaction={transaction} />
              })}
            </div>
              <button onClick={clearTransactions}>Clear</button>
            </>
            : <div className={styles.noTransactions}>
              <div>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="44" cy="36" r="27" fill="url(#paint0_linear_1894_39271)"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M51.9998 37H27.9998C27.8188 37 27.641 36.9509 27.4856 36.8579C27.3303 36.7649 27.2032 36.6314 27.1178 36.4718C27.0324 36.3121 26.9919 36.1323 27.0007 35.9515C27.0095 35.7707 27.0674 35.5953 27.1679 35.4447L31.1679 29.4447C31.3151 29.2241 31.5439 29.0711 31.8039 29.0191C32.0641 28.9672 32.3342 29.0207 32.5549 29.1679C32.7756 29.3151 32.9287 29.544 32.9807 29.8041C33.0326 30.0643 32.9789 30.3348 32.8317 30.5554L29.8697 35H51.9998C52.265 35 52.5194 35.1054 52.7069 35.2929C52.8945 35.4804 52.9998 35.7348 52.9998 36C52.9998 36.2652 52.8945 36.5196 52.7069 36.7071C52.5194 36.8947 52.265 37 51.9998 37ZM47.1677 49.4449L50.133 45H27.9998C27.7346 45 27.4802 44.8947 27.2927 44.7071C27.1052 44.5196 26.9998 44.2652 26.9998 44C26.9998 43.7348 27.1052 43.4804 27.2927 43.2929C27.4802 43.1054 27.7346 43 27.9998 43H51.999C52.1798 43.0005 52.3571 43.0499 52.5121 43.1429C52.6673 43.2361 52.7944 43.3696 52.8799 43.5293C52.9653 43.689 53.0059 43.8688 52.9972 44.0497C52.9886 44.2304 52.931 44.4058 52.8309 44.5566L48.8318 50.5553C48.6845 50.7759 48.4558 50.929 48.1957 50.9809C47.9356 51.0328 47.6654 50.9793 47.4447 50.8321C47.3355 50.7592 47.2416 50.6655 47.1686 50.5564C47.0955 50.4472 47.0447 50.3247 47.0189 50.1959C46.9932 50.0671 46.9931 49.9345 47.0186 49.8056C47.0442 49.6768 47.0948 49.5542 47.1677 49.4449ZM67 40C67 54.8877 54.8877 67 40 67C25.1123 67 13 54.8877 13 40C13 25.1123 25.1123 13 40 13C54.8877 13 67 25.1123 67 40ZM65 40C65 26.2077 53.7923 15 40 15C26.2077 15 15 26.2077 15 40C15 53.7923 26.2077 65 40 65C53.7923 65 65 53.7923 65 40Z" fill="url(#paint1_linear_1894_39271)"/>
                  <defs>
                    <linearGradient id="paint0_linear_1894_39271" x1="78.4681" y1="4.40426" x2="33.7029" y2="70.3132" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0E4923"/>
                      <stop offset="1" stop-color="#0B170B"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1894_39271" x1="35.3801" y1="13" x2="66.8128" y2="84.4459" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#5A6F62"/>
                      <stop offset="1" stop-color="#133720"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              All transaction will be displayed here.
            </div>}
        </div>
    </div>
  </Dialog>;
}
