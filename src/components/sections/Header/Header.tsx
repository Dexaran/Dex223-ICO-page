import React, {useState} from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";
import {useAccount} from "wagmi";
import {useWeb3Modal} from "@web3modal/react";
import Drawer from "../../atoms/Drawer/Drawer";
import {useSwipeable} from "react-swipeable";

export default function Header() {
  const {address, isConnected} = useAccount();
  const {open, close, setDefaultChain} = useWeb3Modal();

  const [menuOpen, setMenuOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      setMenuOpen(false);
    },
  });

  return <header className={styles.header}>
    <div className={clsx("container", styles.headerContent)}>
      <div className={styles.bottomLine}>
        <svg width="3840" height="51" viewBox="0 0 3840 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3840 1H1979L1796.5 50H0" stroke="#5A5A5A"/>
        </svg>
      </div>
      <div className={styles.logoAndNav}>
        <svg width="186" height="47" viewBox="0 0 186 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M51.5706 36.3368V9.66357H60.2433C62.992 9.66357 65.3734 10.2245 67.3875 11.3463C69.4253 12.4443 71.0011 13.9957 72.1148 16.0007C73.2285 18.0057 73.7853 20.3328 73.7853 22.9823C73.7853 25.6078 73.2285 27.935 72.1148 29.9638C71.0011 31.9688 69.4253 33.5322 67.3875 34.654C65.3734 35.7758 62.992 36.3368 60.2433 36.3368H51.5706ZM55.7648 32.5774H60.3143C62.1863 32.5774 63.8095 32.1836 65.1838 31.3959C66.5819 30.6083 67.66 29.4984 68.4183 28.0663C69.1765 26.6342 69.5557 24.9395 69.5557 22.9823C69.5557 21.025 69.1647 19.3423 68.3827 17.9341C67.6245 16.5019 66.5582 15.392 65.1838 14.6044C63.8095 13.8167 62.1863 13.4229 60.3143 13.4229H55.7648V32.5774Z" fill="#F5FFF9"/>
          <path d="M77.9159 36.3368V9.66357H95.3678V13.4229H82.11V21.0847H94.6569V24.844H82.11V32.5774H95.3678V36.3368H77.9159Z" fill="#F5FFF9"/>
          <path d="M96.917 36.3368L105.554 22.8391L97.0592 9.66357H101.822L108.931 20.6909H106.905L113.942 9.66357H118.705L110.246 22.8391L118.883 36.3368H114.12L106.905 25.023L108.931 25.0588L101.644 36.3368H96.917Z" fill="#F5FFF9"/>
          <path d="M124.921 36.3372V33.2939L132.172 25.4889C133.594 23.9613 134.708 22.7321 135.513 21.8012C136.343 20.8465 136.935 20.0111 137.291 19.295C137.67 18.5789 137.859 17.8271 137.859 17.0394C137.859 15.7505 137.468 14.76 136.686 14.0678C135.904 13.3517 134.897 12.9937 133.665 12.9937C132.386 12.9937 131.284 13.3636 130.36 14.1036C129.435 14.8196 128.796 15.8698 128.44 17.2542L124.744 16.1801C125.028 14.7719 125.597 13.5546 126.45 12.5282C127.303 11.478 128.345 10.6665 129.578 10.0936C130.833 9.5208 132.184 9.23438 133.63 9.23438C135.312 9.23438 136.781 9.5566 138.037 10.2011C139.293 10.8216 140.264 11.6928 140.952 12.8147C141.662 13.9365 142.018 15.2373 142.018 16.7172C142.018 17.6958 141.828 18.6505 141.449 19.5814C141.094 20.4884 140.537 21.4551 139.779 22.4815C139.02 23.4839 138.049 24.6177 136.864 25.8827L130.466 32.7569H142.515V36.3372H124.921Z" fill="#3BD171"/>
          <path d="M146.164 36.3372V33.2939L153.415 25.4889C154.837 23.9613 155.951 22.7321 156.756 21.8012C157.586 20.8465 158.178 20.0111 158.533 19.295C158.912 18.5789 159.102 17.8271 159.102 17.0394C159.102 15.7505 158.711 14.76 157.929 14.0678C157.147 13.3517 156.14 12.9937 154.908 12.9937C153.628 12.9937 152.526 13.3636 151.602 14.1036C150.678 14.8196 150.038 15.8698 149.683 17.2542L145.986 16.1801C146.271 14.7719 146.84 13.5546 147.693 12.5282C148.546 11.478 149.588 10.6665 150.82 10.0936C152.076 9.5208 153.427 9.23438 154.872 9.23438C156.555 9.23438 158.024 9.5566 159.28 10.2011C160.536 10.8216 161.507 11.6928 162.194 12.8147C162.905 13.9365 163.261 15.2373 163.261 16.7172C163.261 17.6958 163.071 18.6505 162.692 19.5814C162.337 20.4884 161.78 21.4551 161.021 22.4815C160.263 23.4839 159.292 24.6177 158.107 25.8827L151.709 32.7569H163.758V36.3372H146.164Z" fill="#3BD171"/>
          <path d="M176.044 36.7668C174.622 36.7668 173.284 36.5043 172.028 35.9792C170.796 35.454 169.729 34.7141 168.829 33.7594C167.952 32.8046 167.324 31.6828 166.945 30.3939L170.499 29.0334C170.973 30.2984 171.696 31.277 172.667 31.9692C173.639 32.6614 174.765 33.0075 176.044 33.0075C177.087 33.0075 177.987 32.8046 178.745 32.3989C179.527 31.9931 180.132 31.4202 180.558 30.6803C181.008 29.9404 181.233 29.0453 181.233 27.9951C181.233 26.9688 181.008 26.0856 180.558 25.3457C180.132 24.6058 179.527 24.0448 178.745 23.6629C177.987 23.2811 177.087 23.0901 176.044 23.0901C175.618 23.0901 175.179 23.1259 174.729 23.1975C174.302 23.2691 173.923 23.3646 173.592 23.4839L172.667 21.5148L179.634 13.2443H168.367V9.66401H184.326V13.0653L177.501 21.3L177.395 19.9394C178.982 19.9633 180.38 20.3213 181.589 21.0135C182.797 21.6819 183.733 22.6127 184.397 23.8062C185.084 24.9757 185.428 26.3362 185.428 27.8877C185.428 29.5585 185.025 31.0742 184.219 32.4347C183.413 33.7713 182.3 34.8335 180.878 35.6211C179.48 36.3849 177.869 36.7668 176.044 36.7668Z" fill="#3BD171"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M39.7796 21.3828C39.7777 21.3699 39.7745 21.357 39.7709 21.3429L39.7681 21.3319C39.7658 21.3261 39.764 21.3203 39.7623 21.3145C39.7606 21.3087 39.7589 21.3029 39.7566 21.2972C39.7566 21.2972 39.7559 21.2945 39.7549 21.2913C39.7541 21.2885 39.753 21.2854 39.752 21.2833C39.7244 21.2023 39.6784 21.1121 39.6093 21.0334C39.6093 21.0334 39.607 21.0288 39.6047 21.0288C39.5679 20.9871 39.5242 20.9501 39.4736 20.9223C39.4686 20.9173 39.4624 20.9135 39.4567 20.91C39.4546 20.9087 39.4525 20.9074 39.4506 20.9061L31.9626 16.5588L21.7164 10.6104L21.5438 10.5109L21.4863 10.4762L3.60252 0.0902324H3.59792C3.58182 0.0809778 3.45759 0.0254502 3.34717 0.0092546C3.29426 0.00231365 3.24365 0 3.24365 0H3.17694C3.08433 0.00635022 2.93396 0.10372 2.90023 0.125563L2.90022 0.125566C2.89709 0.127597 2.89496 0.128974 2.89398 0.129564C2.45694 0.382883 2.0199 0.63678 1.58285 0.890676L1.58271 0.89076L1.58269 0.890772C1.14561 1.14469 0.708533 1.39861 0.271454 1.65195C0.266573 1.65587 0.261278 1.6598 0.255744 1.6639L0.255742 1.66391C0.248236 1.66947 0.240291 1.67537 0.232347 1.68202C0.220844 1.69128 0.211642 1.70053 0.20014 1.7121C0.190938 1.71904 0.181736 1.72598 0.174835 1.73755C0.167934 1.74449 0.161032 1.75375 0.154131 1.763C0.110422 1.81159 0.0805161 1.8648 0.0575115 1.91339C0.0483097 1.92958 0.0414083 1.94578 0.0368074 1.96198C0.0230046 2.00593 0.0138028 2.04527 0.00690138 2.07534C0.00460092 2.08923 0.00230046 2.10542 0 2.12162V43.7164H0.00230046C-0.00230046 43.9964 0.0713143 44.1745 0.257652 44.3203C0.267884 44.3271 0.278116 44.3343 0.288465 44.3416C0.306037 44.3539 0.323947 44.3665 0.342769 44.3781L3.02511 45.9352L3.03201 45.9398C3.04581 45.9468 3.05961 45.9514 3.07342 45.956C3.07637 45.959 3.08026 45.9601 3.08389 45.9611C3.08592 45.9616 3.08787 45.9622 3.08952 45.963C3.09757 45.9653 3.1062 45.9676 3.11482 45.9699C3.12345 45.9722 3.13208 45.9745 3.14013 45.9769C3.14588 45.9792 3.15163 45.9809 3.15738 45.9826C3.16313 45.9844 3.16888 45.9861 3.17464 45.9884C3.18013 45.9884 3.18561 45.9895 3.19135 45.9906C3.19764 45.9918 3.20423 45.9931 3.21144 45.9931C3.22295 45.9954 3.23445 45.9954 3.24595 45.9954H3.25516C3.25516 45.9954 3.27587 46 3.28737 46C3.30614 46 3.32645 45.9985 3.34578 45.9954H3.35867C3.35867 45.9954 3.36097 45.9931 3.36327 45.9931C3.36557 45.9931 3.36557 45.9931 3.36788 45.9907C3.37478 45.9907 3.38168 45.9907 3.38858 45.9861C3.40008 45.9838 3.41158 45.9815 3.42309 45.9769C3.43919 45.9769 3.45529 45.9699 3.4714 45.963C3.4875 45.9584 3.5036 45.9514 3.51971 45.9445C3.54961 45.9306 3.57952 45.9144 3.60942 45.8982L11.1549 41.5208L39.4759 25.0939C39.7359 24.9273 39.7888 24.7028 39.7888 24.4136V21.4475C39.7865 21.4244 39.7842 21.4013 39.7796 21.3828ZM6.39299 9.13198V15.7698L12.1027 12.4498L6.39299 9.13198ZM6.72166 22.9965L18.1875 29.6541V16.339L6.72166 22.9965ZM6.38667 36.86V30.2222L12.0964 33.5399L6.38667 36.86ZM24.5689 26.3721L30.3279 23.0306L24.5689 19.6892V26.3721Z" fill="#3BD171"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M39.9327 20.9728C40.0043 21.0016 40.1187 21.131 40.1187 21.131C40.2411 21.2743 40.3252 21.4493 40.362 21.6342V24.6961C40.362 25.0123 40.3191 25.3717 39.9185 25.6303L4.0491 46.4311C4.00614 46.4599 3.97758 46.4741 3.93462 46.4885C3.92745 46.4957 3.90597 46.5029 3.88449 46.5101C3.86301 46.5173 3.84161 46.5244 3.83445 46.5316H3.76293H3.74861C3.70573 46.5604 3.63412 46.5604 3.59124 46.5604C3.55308 46.5604 3.5213 46.5539 3.50008 46.5497C3.48951 46.5476 3.48156 46.546 3.47676 46.546C3.45318 46.546 3.42951 46.5416 3.40829 46.5378C3.39092 46.5346 3.3752 46.5316 3.36227 46.5316H3.30507L3.27643 46.5173C3.2622 46.5173 3.2622 46.5029 3.24787 46.5029C3.23355 46.5029 3.19059 46.4885 3.19059 46.4885C3.17627 46.4741 3.13339 46.4455 3.13339 46.4455L0.4865 44.9073L0.414892 44.8641C0.128808 44.6486 0.0143217 44.3898 0.0143217 44.0448C0.0143217 44.0304 0 44.0016 0 44.0016V2.41485C0 2.40046 0.0143217 2.32851 0.0143217 2.32851C0.0286433 2.25674 0.042965 2.21358 0.0571993 2.15602C0.0571993 2.14163 0.100164 2.06986 0.100164 2.05547C0.114486 2.0267 0.157364 1.94036 0.228885 1.8542L0.314727 1.76787C0.314727 1.76787 0.318657 1.76383 0.326516 1.75804C0.333677 1.75278 0.344069 1.74593 0.357692 1.73909L0.429213 1.6961L3.03322 0.186653C3.04755 0.172264 3.07619 0.172264 3.09042 0.157875C3.11618 0.138397 3.16212 0.107338 3.21792 0.0790863C3.2863 0.0445175 3.36935 0.0141602 3.44812 0.0141602H3.53396H3.67709C3.79157 0.0285492 3.92029 0.0717163 3.99181 0.100494C4.00614 0.114708 4.03478 0.129097 4.03478 0.129097L39.9042 20.9442L39.9327 20.9728ZM25.1529 29.5978L39.1888 21.4617L21.7763 11.3561L19.4155 12.736L34.1954 21.3178C34.2607 21.3554 34.3017 21.4052 34.3223 21.4633C34.3333 21.4942 34.3385 21.5274 34.3385 21.5623C34.3385 21.6391 34.3192 21.7032 34.2766 21.7544C34.2555 21.7797 34.2286 21.802 34.1954 21.8211L25.1529 27.0678V29.5978ZM25.1529 20.4841V26.1336L30.0318 23.3016L25.1529 20.4841ZM3.39092 0.905403C3.37659 0.905403 3.36227 0.919792 3.36227 0.919792L1.21612 2.17041L15.996 10.7522C16.0383 10.7735 16.0738 10.8087 16.0988 10.8512C16.1244 10.8947 16.1391 10.9456 16.1391 10.9967C16.1391 11.0972 16.0818 11.198 15.996 11.2411L6.96784 16.5022V19.0323L20.975 10.896L3.63412 0.833458L3.54828 0.819244C3.51972 0.833458 3.46244 0.862236 3.39092 0.905403ZM6.96784 9.91856V15.5536L11.8182 12.736L6.96784 9.91856ZM14.8227 10.9967L0.815549 2.86038V23.0285L3.17627 24.4085V7.27361C3.17627 7.17288 3.23355 7.08672 3.3194 7.02917C3.40524 6.97161 3.51972 6.97161 3.60557 7.02917L12.648 12.2761L14.8227 10.9967ZM3.3194 28.1174C3.40524 28.0742 3.51972 28.0742 3.60557 28.1174L12.6337 33.3641L14.8227 32.0991L0.815549 23.9486V44.0016C0.801227 44.1597 0.815549 44.1741 0.901392 44.2173L3.14771 45.5255L3.17627 28.376C3.17627 28.2755 3.23355 28.1747 3.3194 28.1174ZM6.96784 36.6416L11.8325 33.8242L6.96784 31.0067V36.6416ZM3.94894 45.5828L21.3614 35.463V32.7173L6.56727 41.2991C6.48143 41.3567 6.38126 41.3567 6.2811 41.2991C6.19526 41.2417 6.13797 41.1554 6.13797 41.0549L6.16661 30.5466L3.97758 29.2673L3.94894 45.5828ZM21.3614 17.8392C21.3614 17.7385 21.4186 17.6379 21.5045 17.5948C21.5903 17.5372 21.7047 17.5372 21.7906 17.5948L25.0098 19.4492C25.0385 19.4636 25.0814 19.4924 25.0814 19.4924L30.8331 22.8417L33.0222 21.5623L18.6143 13.1961L6.59583 20.1823C6.50998 20.2255 6.3955 20.2255 6.30965 20.1823C6.22381 20.1248 6.16661 20.0386 6.16661 19.9235V9.44424L3.97758 8.17924V24.8686L15.996 31.8404C16.0818 31.8836 16.1391 31.9841 16.1391 32.0849C16.1391 32.1321 16.1265 32.1793 16.1042 32.2221C16.079 32.2703 16.0415 32.313 15.996 32.3435L12.7911 34.2123L6.95352 37.5904V40.1492L21.3614 31.7829V17.8392ZM39.5035 24.9404C39.5465 24.9116 39.5608 24.883 39.5608 24.6961V22.1805L24.7809 30.7335C24.6951 30.7911 24.5949 30.7911 24.4948 30.7335C24.4089 30.6904 24.3517 30.5898 24.3517 30.4891V19.9954L22.1626 18.7304V35.0029L39.5035 24.9404ZM18.5714 15.9704C18.6572 15.9128 18.7717 15.9128 18.8575 15.9704C18.9434 16.0278 19.0007 16.1141 19.0007 16.2146V30.3454C19.0007 30.4459 18.9434 30.5466 18.8575 30.5896C18.8146 30.6184 18.7574 30.6328 18.7145 30.6328C18.6572 30.6328 18.5714 30.5896 18.5714 30.5896L6.40982 23.5316C6.32398 23.4885 6.26678 23.3877 6.26678 23.3016V23.2728C6.26678 23.1723 6.32398 23.0859 6.40982 23.0284L18.5714 15.9704ZM18.1994 17.1203L7.58306 23.2872L18.1994 29.4397V17.1203Z" fill="#161815"/>
        </svg>
        <nav>
          <ul className={styles.navList}>
            <li><a href="#philosophy">Philosophy</a></li>
            <li><a href="#margin">Margin trading</a></li>
            <li><a href="#tokenomics">Tokenomics</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.settings}>
        {address && <button className={styles.addressButton} onClick={open}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 13.5C16.4333 13.5 16.7917 13.3583 17.075 13.075C17.3583 12.7917 17.5 12.4333 17.5 12C17.5 11.5667 17.3583 11.2083 17.075 10.925C16.7917 10.6417 16.4333 10.5 16 10.5C15.5667 10.5 15.2083 10.6417 14.925 10.925C14.6417 11.2083 14.5 11.5667 14.5 12C14.5 12.4333 14.6417 12.7917 14.925 13.075C15.2083 13.3583 15.5667 13.5 16 13.5ZM13 17C12.45 17 11.9792 16.8042 11.5875 16.4125C11.1958 16.0208 11 15.55 11 15V9C11 8.45 11.1958 7.97917 11.5875 7.5875C11.9792 7.19583 12.45 7 13 7H20C20.55 7 21.0208 7.19583 21.4125 7.5875C21.8042 7.97917 22 8.45 22 9V15C22 15.55 21.8042 16.0208 21.4125 16.4125C21.0208 16.8042 20.55 17 20 17H13ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5H13C11.8167 5 10.8542 5.37083 10.1125 6.1125C9.37083 6.85417 9 7.81667 9 9V15C9 16.1833 9.37083 17.1458 10.1125 17.8875C10.8542 18.6292 11.8167 19 13 19H21C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5Z" fill="#F5FFF9"/>
          </svg>

          <span>{`${address.slice(0, 6)}...${address.slice(-4)}`}</span>
        </button>}
        <button onClick={() => setMenuOpen(true)} className={styles.menuButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 18V16.5H21V18H3ZM3 12.75V11.25H21V12.75H3ZM3 7.5V6H21V7.5H3Z" fill="#F5FFF9"/>
          </svg>
        </button>
        <Drawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} position="left">
          <div {...handlers} className={styles.menuWrapper}>
            <div className={styles.menuHeader}>
              <svg width="113" height="29" viewBox="0 0 113 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.3306 22.1182V5.88232H36.5994C38.2693 5.88232 39.7161 6.22375 40.9397 6.9066C42.1778 7.57492 43.1351 8.51929 43.8117 9.7397C44.4883 10.9601 44.8266 12.3767 44.8266 13.9894C44.8266 15.5875 44.4883 17.0041 43.8117 18.239C43.1351 19.4594 42.1778 20.411 40.9397 21.0939C39.7161 21.7767 38.2693 22.1182 36.5994 22.1182H31.3306ZM33.8786 19.8299H36.6426C37.7799 19.8299 38.766 19.5902 39.6009 19.1107C40.4503 18.6313 41.1053 17.9557 41.566 17.084C42.0266 16.2122 42.257 15.1807 42.257 13.9894C42.257 12.798 42.0194 11.7737 41.5444 10.9165C41.0837 10.0448 40.4359 9.36922 39.6009 8.88977C38.766 8.41032 37.7799 8.1706 36.6426 8.1706H33.8786V19.8299Z" fill="#F5FFF9"/>
                <path d="M47.336 22.1182V5.88232H57.9385V8.1706H49.8841V12.8343H57.5066V15.1226H49.8841V19.8299H57.9385V22.1182H47.336Z" fill="#F5FFF9"/>
                <path d="M58.8797 22.1182L64.1269 13.9022L58.9661 5.88232H61.8596L66.1783 12.5946H64.9475L69.223 5.88232H72.1166L66.9773 13.9022L72.2246 22.1182H69.331L64.9475 15.2316L66.1783 15.2534L61.7516 22.1182H58.8797Z" fill="#F5FFF9"/>
                <path d="M75.8931 22.1185V20.266L80.2982 15.5152C81.162 14.5853 81.8386 13.8371 82.328 13.2705C82.8319 12.6893 83.1918 12.1808 83.4077 11.7449C83.6381 11.3091 83.7532 10.8514 83.7532 10.372C83.7532 9.58743 83.5157 8.98449 83.0406 8.56316C82.5656 8.1273 81.9537 7.90937 81.2052 7.90937C80.4278 7.90937 79.7584 8.13456 79.197 8.58495C78.6355 9.02081 78.2468 9.66008 78.0309 10.5027L75.7852 9.84895C75.9579 8.99176 76.3034 8.25079 76.8217 7.62606C77.3399 6.98679 77.9733 6.49282 78.7219 6.14413C79.4849 5.79544 80.3054 5.62109 81.1836 5.62109C82.2057 5.62109 83.0982 5.81723 83.8612 6.20951C84.6242 6.58725 85.2144 7.11755 85.6319 7.8004C86.0637 8.48325 86.2797 9.27507 86.2797 10.1758C86.2797 10.7715 86.1645 11.3527 85.9342 11.9193C85.7182 12.4714 85.3799 13.0598 84.9193 13.6845C84.4586 14.2947 83.8684 14.9849 83.1486 15.7549L79.2617 19.9391H86.582V22.1185H75.8931Z" fill="#3BD171"/>
                <path d="M88.7987 22.1185V20.266L93.2038 15.5152C94.0676 14.5853 94.7442 13.8371 95.2336 13.2705C95.7375 12.6893 96.0974 12.1808 96.3133 11.7449C96.5436 11.3091 96.6588 10.8514 96.6588 10.372C96.6588 9.58743 96.4213 8.98449 95.9462 8.56316C95.4712 8.1273 94.8593 7.90937 94.1108 7.90937C93.3334 7.90937 92.664 8.13456 92.1025 8.58495C91.5411 9.02081 91.1524 9.66008 90.9365 10.5027L88.6907 9.84895C88.8635 8.99176 89.209 8.25079 89.7272 7.62606C90.2455 6.98679 90.8789 6.49282 91.6275 6.14413C92.3905 5.79544 93.211 5.62109 94.0892 5.62109C95.1113 5.62109 96.0038 5.81723 96.7668 6.20951C97.5298 6.58725 98.12 7.11755 98.5375 7.8004C98.9693 8.48325 99.1853 9.27507 99.1853 10.1758C99.1853 10.7715 99.0701 11.3527 98.8398 11.9193C98.6238 12.4714 98.2855 13.0598 97.8249 13.6845C97.3642 14.2947 96.774 14.9849 96.0542 15.7549L92.1673 19.9391H99.4876V22.1185H88.7987Z" fill="#3BD171"/>
                <path d="M106.952 22.38C106.088 22.38 105.274 22.2202 104.511 21.9005C103.763 21.5809 103.115 21.1305 102.568 20.5494C102.035 19.9682 101.654 19.2854 101.424 18.5008L103.583 17.6727C103.871 18.4427 104.31 19.0384 104.9 19.4597C105.49 19.881 106.174 20.0917 106.952 20.0917C107.585 20.0917 108.132 19.9682 108.593 19.7212C109.068 19.4742 109.435 19.1255 109.694 18.6751C109.967 18.2248 110.104 17.6799 110.104 17.0407C110.104 16.4159 109.967 15.8784 109.694 15.428C109.435 14.9776 109.068 14.6362 108.593 14.4037C108.132 14.1712 107.585 14.055 106.952 14.055C106.692 14.055 106.426 14.0768 106.153 14.1204C105.893 14.164 105.663 14.2221 105.462 14.2947L104.9 13.0961L109.133 8.06192H102.287V5.88261H111.983V7.95295L107.837 12.9654L107.772 12.1372C108.737 12.1518 109.586 12.3697 110.32 12.791C111.054 13.1978 111.623 13.7644 112.026 14.4909C112.444 15.2028 112.652 16.0309 112.652 16.9753C112.652 17.9923 112.408 18.9149 111.918 19.743C111.429 20.5566 110.752 21.2031 109.888 21.6826C109.039 22.1475 108.06 22.38 106.952 22.38Z" fill="#3BD171"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1672 13.0156C24.166 13.0077 24.164 12.9999 24.1619 12.9913L24.1602 12.9846C24.1588 12.9811 24.1577 12.9776 24.1567 12.974C24.1556 12.9705 24.1546 12.967 24.1532 12.9635C24.1532 12.9635 24.1528 12.9618 24.1522 12.9599C24.1517 12.9582 24.151 12.9563 24.1504 12.955C24.1336 12.9057 24.1057 12.8508 24.0637 12.8029C24.0637 12.8029 24.0623 12.8001 24.0609 12.8001C24.0386 12.7748 24.012 12.7522 23.9813 12.7353C23.9782 12.7323 23.9745 12.7299 23.971 12.7278C23.9697 12.727 23.9685 12.7263 23.9673 12.7255L19.4181 10.0793L13.1933 6.45851L13.0884 6.39795L13.0535 6.37682L2.18863 0.0549241H2.18583C2.17605 0.0492908 2.10058 0.0154914 2.0335 0.00563324C2.00135 0.00140831 1.9706 0 1.9706 0H1.93007C1.87381 0.00386535 1.78246 0.063134 1.76197 0.0764299L1.76196 0.0764315C1.76006 0.0776675 1.75876 0.0785059 1.75817 0.0788653C1.49266 0.233059 1.22714 0.387605 0.961626 0.542151L0.961538 0.542202L0.961526 0.542209C0.695989 0.696767 0.430453 0.851326 0.164916 1.00553C0.161951 1.00792 0.158734 1.01031 0.155372 1.01281L0.15537 1.01281C0.15081 1.0162 0.145983 1.01979 0.141157 1.02384C0.134169 1.02947 0.128578 1.03511 0.12159 1.04215C0.116 1.04637 0.11041 1.0506 0.106217 1.05764C0.102024 1.06187 0.0978314 1.0675 0.0936387 1.07313C0.0670844 1.10271 0.0489157 1.1351 0.0349398 1.16467C0.0293494 1.17453 0.0251567 1.18439 0.0223615 1.19425C0.0139759 1.221 0.00838555 1.24495 0.00419278 1.26325C0.00279518 1.2717 0.00139759 1.28156 0 1.29142V26.61H0.00139759C-0.00139759 26.7804 0.0433253 26.8888 0.15653 26.9776C0.162747 26.9817 0.168963 26.9861 0.17525 26.9905C0.185926 26.998 0.196807 27.0057 0.208241 27.0128L1.83783 27.9606L1.84203 27.9634C1.85041 27.9676 1.8588 27.9704 1.86718 27.9732C1.86898 27.975 1.87134 27.9757 1.87355 27.9763C1.87478 27.9766 1.87596 27.977 1.87697 27.9775C1.88186 27.9789 1.8871 27.9803 1.89234 27.9817C1.89758 27.9831 1.90282 27.9845 1.90771 27.9859C1.91121 27.9873 1.9147 27.9884 1.91819 27.9894C1.92169 27.9905 1.92518 27.9916 1.92868 27.993C1.93201 27.993 1.93535 27.9936 1.93883 27.9943C1.94265 27.995 1.94665 27.9958 1.95104 27.9958C1.95803 27.9972 1.96501 27.9972 1.972 27.9972L1.9776 27.9972C1.9776 27.9972 1.99018 28 1.99716 28C2.00857 28 2.02091 27.9991 2.03265 27.9972H2.04048C2.04048 27.9972 2.04188 27.9958 2.04328 27.9958C2.04468 27.9958 2.04468 27.9958 2.04607 27.9944C2.05027 27.9944 2.05446 27.9944 2.05865 27.9916C2.06564 27.9901 2.07263 27.9887 2.07962 27.9859C2.0894 27.9859 2.09918 27.9817 2.10897 27.9775C2.11875 27.9747 2.12853 27.9704 2.13832 27.9662C2.15648 27.9578 2.17465 27.9479 2.19282 27.938L6.77692 25.2735L23.9827 15.2745C24.1406 15.1731 24.1727 15.0365 24.1727 14.8605V13.055C24.1714 13.0409 24.17 13.0269 24.1672 13.0156ZM3.88391 5.5586V9.59904L7.35274 7.57811L3.88391 5.5586ZM4.08359 13.9979L11.0494 18.0503V9.94548L4.08359 13.9979ZM3.88007 22.4365V18.3961L7.3489 20.4156L3.88007 22.4365ZM14.9263 16.0526L18.425 14.0186L14.9263 11.9847V16.0526Z" fill="#3BD171"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2602 12.7663C24.3037 12.7838 24.3732 12.8625 24.3732 12.8625C24.4475 12.9498 24.4986 13.0562 24.521 13.1688V15.0326C24.521 15.2251 24.4949 15.4438 24.2516 15.6012L2.45994 28.2626C2.43384 28.2801 2.41649 28.2887 2.39038 28.2975C2.38603 28.3019 2.37298 28.3063 2.35993 28.3106C2.34688 28.315 2.33388 28.3194 2.32953 28.3238H2.28608H2.27738C2.25133 28.3413 2.20783 28.3413 2.18178 28.3413C2.15859 28.3413 2.13928 28.3373 2.12639 28.3348C2.11997 28.3335 2.11514 28.3325 2.11222 28.3325C2.0979 28.3325 2.08352 28.3299 2.07063 28.3275C2.06007 28.3256 2.05052 28.3238 2.04267 28.3238H2.00792L1.99052 28.315C1.98187 28.315 1.98187 28.3063 1.97317 28.3063C1.96447 28.3063 1.93837 28.2975 1.93837 28.2975C1.92967 28.2887 1.90362 28.2713 1.90362 28.2713L0.295562 27.335L0.252058 27.3087C0.0782541 27.1776 0.0087008 27.02 0.0087008 26.81C0.0087008 26.8013 0 26.7838 0 26.7838V1.47008C0 1.46132 0.0087008 1.41753 0.0087008 1.41753C0.0174016 1.37384 0.0261024 1.34756 0.0347501 1.31253C0.0347501 1.30377 0.0608525 1.26009 0.0608525 1.25133C0.0695533 1.23381 0.0956026 1.18126 0.139054 1.12881L0.191205 1.07626C0.191205 1.07626 0.193593 1.07381 0.198368 1.07028C0.202718 1.06708 0.209031 1.06291 0.217308 1.05875L0.260759 1.03258L1.84276 0.113785C1.85147 0.105026 1.86887 0.105026 1.87752 0.0962677C1.89317 0.0844116 1.92107 0.065506 1.95497 0.0483093C1.99651 0.0272675 2.04697 0.00878906 2.09482 0.00878906H2.14697H2.23393C2.30348 0.0175476 2.38168 0.0438232 2.42513 0.0613403C2.43384 0.0699921 2.45124 0.0787506 2.45124 0.0787506L24.2429 12.7488L24.2602 12.7663ZM15.2811 18.0163L23.8082 13.0638L13.2297 6.91255L11.7955 7.75252L20.7746 12.9762C20.8143 12.9991 20.8392 13.0294 20.8517 13.0648C20.8584 13.0836 20.8615 13.1038 20.8615 13.125C20.8615 13.1718 20.8499 13.2108 20.824 13.242C20.8111 13.2574 20.7948 13.2709 20.7746 13.2826L15.2811 16.4762V18.0163ZM15.2811 12.4688V15.9076L18.2451 14.1837L15.2811 12.4688ZM2.06007 0.551285C2.05137 0.551285 2.04267 0.560043 2.04267 0.560043L0.738825 1.32129L9.71799 6.54501C9.74372 6.55794 9.76526 6.57941 9.78044 6.60526C9.79603 6.63174 9.80495 6.66272 9.80495 6.6938C9.80495 6.755 9.77015 6.81631 9.71799 6.84259L4.23315 10.045V11.585L12.7429 6.63249L2.20783 0.507492L2.15568 0.49884C2.13833 0.507492 2.10352 0.525009 2.06007 0.551285ZM4.23315 6.03755V9.46759L7.17985 7.75252L4.23315 6.03755ZM9.00522 6.6938L0.495468 1.74127V14.0175L1.92967 14.8575V4.42758C1.92967 4.36627 1.96447 4.31383 2.01662 4.27879C2.06877 4.24376 2.13833 4.24376 2.19048 4.27879L7.68402 7.47256L9.00522 6.6938ZM2.01662 17.1151C2.06877 17.0888 2.13833 17.0888 2.19048 17.1151L7.67532 20.3087L9.00522 19.5387L0.495468 14.5776V26.7838C0.486767 26.88 0.495468 26.8888 0.54762 26.915L1.91232 27.7113L1.92967 17.2725C1.92967 17.2113 1.96447 17.15 2.01662 17.1151ZM4.23315 22.3038L7.18856 20.5888L4.23315 18.8738V22.3038ZM2.39909 27.7462L12.9776 21.5863V19.915L3.98979 25.1388C3.93764 25.1738 3.87679 25.1738 3.81594 25.1388C3.76378 25.1038 3.72898 25.0513 3.72898 24.9901L3.74638 18.5938L2.41649 17.815L2.39909 27.7462ZM12.9776 10.8588C12.9776 10.7975 13.0124 10.7363 13.0646 10.71C13.1167 10.675 13.1862 10.675 13.2384 10.71L15.1941 11.8388C15.2115 11.8476 15.2376 11.8651 15.2376 11.8651L18.7319 13.9038L20.0619 13.125L11.3087 8.03258L4.00714 12.2851C3.95499 12.3113 3.88544 12.3113 3.83328 12.2851C3.78113 12.25 3.74638 12.1976 3.74638 12.1275V5.74884L2.41649 4.97884V15.1376L9.71799 19.3813C9.77015 19.4076 9.80495 19.4688 9.80495 19.5301C9.80495 19.5588 9.79726 19.5876 9.78373 19.6136C9.76845 19.643 9.74563 19.6689 9.71799 19.6875L7.77093 20.8251L4.22445 22.8813V24.4388L12.9776 19.3463V10.8588ZM23.9994 15.1813C24.0256 15.1637 24.0343 15.1463 24.0343 15.0326V13.5013L15.0551 18.7075C15.0029 18.7426 14.9421 18.7426 14.8812 18.7075C14.8291 18.6813 14.7943 18.6201 14.7943 18.5587V12.1713L13.4644 11.4013V21.3063L23.9994 15.1813ZM11.2826 9.72127C11.3348 9.68623 11.4043 9.68623 11.4565 9.72127C11.5086 9.7562 11.5434 9.80875 11.5434 9.86995V18.4713C11.5434 18.5325 11.5086 18.5938 11.4565 18.6199C11.4304 18.6375 11.3956 18.6462 11.3696 18.6462C11.3348 18.6462 11.2826 18.6199 11.2826 18.6199L3.89414 14.3238C3.84198 14.2975 3.80724 14.2362 3.80724 14.1837V14.1662C3.80724 14.105 3.84198 14.0525 3.89414 14.0174L11.2826 9.72127ZM11.0566 10.4212L4.60691 14.175L11.0566 17.92V10.4212Z" fill="#161815"/>
              </svg>
            </div>
            <div className={styles.menuContent}>
              <div className={styles.menuList}>
                <ul>
                  <li>
                    <a href="#philosophy" className={styles.menuListButton} onClick={() => {
                      setMenuOpen(false);
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C11.5667 22 11.175 21.8958 10.825 21.6875C10.475 21.4792 10.2 21.2 10 20.85C9.45 20.85 8.97917 20.6542 8.5875 20.2625C8.19583 19.8708 8 19.4 8 18.85V15.3C7.01667 14.65 6.22917 13.7917 5.6375 12.725C5.04583 11.6583 4.75 10.5 4.75 9.25C4.75 7.23333 5.45417 5.52083 6.8625 4.1125C8.27083 2.70417 9.98333 2 12 2C14.0167 2 15.7292 2.70417 17.1375 4.1125C18.5458 5.52083 19.25 7.23333 19.25 9.25C19.25 10.5333 18.9542 11.7 18.3625 12.75C17.7708 13.8 16.9833 14.65 16 15.3V18.85C16 19.4 15.8042 19.8708 15.4125 20.2625C15.0208 20.6542 14.55 20.85 14 20.85C13.8 21.2 13.525 21.4792 13.175 21.6875C12.825 21.8958 12.4333 22 12 22ZM10 18.85H14V17.95H10V18.85ZM10 16.95H14V16H10V16.95ZM12.75 14V11.3L14.425 9.625C14.575 9.475 14.65 9.3 14.65 9.1C14.65 8.9 14.575 8.725 14.425 8.575C14.275 8.425 14.1 8.35 13.9 8.35C13.7 8.35 13.525 8.425 13.375 8.575L12 9.95L10.625 8.575C10.475 8.425 10.3 8.35 10.1 8.35C9.9 8.35 9.725 8.425 9.575 8.575C9.425 8.725 9.35 8.9 9.35 9.1C9.35 9.3 9.425 9.475 9.575 9.625L11.25 11.3V14H12.75Z" fill="#F5FFF9"/>
                      </svg>
                      <span>Philosophy</span>
                    </a>
                  </li>
                  <li>
                    <a href="#margin" className={styles.menuListButton} onClick={() => {
                      setMenuOpen(false);
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.9721 4.13544C16.3711 3.5784 17.1995 3.57857 17.5983 4.13579L20.9184 8.77512H18.839V14.7393L14.7282 20.4811V8.77512H12.6487L15.9721 4.13544ZM11.3513 15.2249L8.03112 19.8642C7.63234 20.4214 6.80397 20.4216 6.40496 19.8646L3.08154 15.2249H5.16103V9.26071L9.27182 3.51895V15.2249H11.3513Z" fill="#F5FFF9"/>
                      </svg>
                      <span>Margin trading</span>
                    </a>
                  </li>
                  <li>
                    <a href="#tokenomics" className={styles.menuListButton} onClick={() => {
                      setMenuOpen(false);
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2.75 21C2.5375 21 2.35938 20.9281 2.21563 20.7844C2.07187 20.6406 2 20.4625 2 20.25V9.75C2 9.5375 2.07187 9.35938 2.21563 9.21563C2.35938 9.07188 2.5375 9 2.75 9H6.25C6.4625 9 6.64062 9.07188 6.78438 9.21563C6.92812 9.35938 7 9.5375 7 9.75V20.25C7 20.4625 6.92812 20.6406 6.78438 20.7844C6.64062 20.9281 6.4625 21 6.25 21H2.75ZM10.25 21C10.0375 21 9.85938 20.9281 9.71563 20.7844C9.57188 20.6406 9.5 20.4625 9.5 20.25V3.75C9.5 3.5375 9.57188 3.35938 9.71563 3.21563C9.85938 3.07187 10.0375 3 10.25 3H13.75C13.9625 3 14.1406 3.07187 14.2844 3.21563C14.4281 3.35938 14.5 3.5375 14.5 3.75V20.25C14.5 20.4625 14.4281 20.6406 14.2844 20.7844C14.1406 20.9281 13.9625 21 13.75 21H10.25ZM17.75 21C17.5375 21 17.3594 20.9281 17.2156 20.7844C17.0719 20.6406 17 20.4625 17 20.25V11.75C17 11.5375 17.0719 11.3594 17.2156 11.2156C17.3594 11.0719 17.5375 11 17.75 11H21.25C21.4625 11 21.6406 11.0719 21.7844 11.2156C21.9281 11.3594 22 11.5375 22 11.75V20.25C22 20.4625 21.9281 20.6406 21.7844 20.7844C21.6406 20.9281 21.4625 21 21.25 21H17.75Z" fill="#F5FFF9"/>
                      </svg>
                      <span>Tokenomics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className={styles.menuListButton} onClick={() => {
                      setMenuOpen(false);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12.625 19.25H11.625C9.24167 19.25 7.20833 18.4083 5.525 16.725C3.84167 15.0417 3 13.0083 3 10.625C3 8.24167 3.84583 6.20833 5.5375 4.525C7.22917 2.84167 9.275 2 11.675 2C12.8583 2 13.9542 2.2125 14.9625 2.6375C15.9708 3.0625 16.85 3.65833 17.6 4.425C18.35 5.19167 18.9375 6.09583 19.3625 7.1375C19.7875 8.17917 20 9.31667 20 10.55C20 12.7333 19.4333 14.775 18.3 16.675C17.1667 18.575 15.7083 20.1167 13.925 21.3C13.8083 21.3833 13.6833 21.425 13.55 21.425C13.4167 21.425 13.2917 21.4 13.175 21.35C13.0583 21.3 12.9625 21.2208 12.8875 21.1125C12.8125 21.0042 12.7667 20.8833 12.75 20.75L12.625 19.25ZM11.675 16.425C11.9417 16.425 12.1667 16.3333 12.35 16.15C12.5333 15.9667 12.625 15.7417 12.625 15.475C12.625 15.2083 12.5333 14.9833 12.35 14.8C12.1667 14.6167 11.9417 14.525 11.675 14.525C11.4083 14.525 11.1833 14.6167 11 14.8C10.8167 14.9833 10.725 15.2083 10.725 15.475C10.725 15.7417 10.8167 15.9667 11 16.15C11.1833 16.3333 11.4083 16.425 11.675 16.425ZM9.25 8.15C9.41667 8.21667 9.57917 8.21667 9.7375 8.15C9.89583 8.08333 10.0333 7.975 10.15 7.825C10.3 7.60833 10.5042 7.4375 10.7625 7.3125C11.0208 7.1875 11.3417 7.125 11.725 7.125C12.1583 7.125 12.5292 7.24167 12.8375 7.475C13.1458 7.70833 13.3 8.03333 13.3 8.45C13.3 8.76667 13.2125 9.0875 13.0375 9.4125C12.8625 9.7375 12.5583 10.1167 12.125 10.55C11.7417 10.9333 11.4625 11.2708 11.2875 11.5625C11.1125 11.8542 11.025 12.1167 11.025 12.35C11.025 12.5333 11.0792 12.6917 11.1875 12.825C11.2958 12.9583 11.4417 13.025 11.625 13.025C11.8083 13.025 11.9625 12.9667 12.0875 12.85C12.2125 12.7333 12.2917 12.5833 12.325 12.4C12.375 12.2167 12.4708 12.0167 12.6125 11.8C12.7542 11.5833 12.9667 11.3333 13.25 11.05C13.7333 10.5667 14.075 10.1208 14.275 9.7125C14.475 9.30417 14.575 8.88333 14.575 8.45C14.575 7.66667 14.3 7.04167 13.75 6.575C13.2 6.10833 12.525 5.875 11.725 5.875C11.2417 5.875 10.7375 5.9875 10.2125 6.2125C9.6875 6.4375 9.3 6.78333 9.05 7.25C8.95 7.43333 8.91667 7.6125 8.95 7.7875C8.98333 7.9625 9.08333 8.08333 9.25 8.15Z" fill="#F5FFF9"/>
                        </svg>
                        <span>Contact us</span>
                    </a>

                  </li>
                </ul>
              </div>
              {address && <button className={styles.addressMenuButton} onClick={async () => {
                setMenuOpen(false);
                await open();
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 13.5C16.4333 13.5 16.7917 13.3583 17.075 13.075C17.3583 12.7917 17.5 12.4333 17.5 12C17.5 11.5667 17.3583 11.2083 17.075 10.925C16.7917 10.6417 16.4333 10.5 16 10.5C15.5667 10.5 15.2083 10.6417 14.925 10.925C14.6417 11.2083 14.5 11.5667 14.5 12C14.5 12.4333 14.6417 12.7917 14.925 13.075C15.2083 13.3583 15.5667 13.5 16 13.5ZM13 17C12.45 17 11.9792 16.8042 11.5875 16.4125C11.1958 16.0208 11 15.55 11 15V9C11 8.45 11.1958 7.97917 11.5875 7.5875C11.9792 7.19583 12.45 7 13 7H20C20.55 7 21.0208 7.19583 21.4125 7.5875C21.8042 7.97917 22 8.45 22 9V15C22 15.55 21.8042 16.0208 21.4125 16.4125C21.0208 16.8042 20.55 17 20 17H13ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5H13C11.8167 5 10.8542 5.37083 10.1125 6.1125C9.37083 6.85417 9 7.81667 9 9V15C9 16.1833 9.37083 17.1458 10.1125 17.8875C10.8542 18.6292 11.8167 19 13 19H21C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5Z" fill="#F5FFF9"/>
                </svg>

                <span>{`${address.slice(0, 6)}...${address.slice(-7)}`}</span>
              </button>}
              {!isConnected && <button className={styles.addressMenuButton} onClick={async () => {
                setMenuOpen(false);
                await open();
              }}>
                Connect wallet
              </button>}
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  </header>;
}
