/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import LogoFooter from "@assets/logo-footer.svg";
import { FOOTER_TITLES } from "@/constants";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import "./styles.css";
import WhatappIcon from "@assets/whatsapp-icon.svg";

const Footer = () => {
  const items = FOOTER_TITLES;
  // const requestText = FOOTER_CONTACT_BTN.text;
  const idGenerator = v4;

  return (
    <div className="flex items-start md:items-center justify-between mr-4 md:mr-14">
      <Link className="pt-3 pb-[5px] md:text-3xl" to="/site">
        {/* <img className="w-[154px]" src={LogoFooter} alt="logo" /> */}
        ZCex Seu portal carbono ZERO
      </Link>

      <ul className="mt-[10px] mb-[9px] text-xs md:text-xl font-medium font-figtree flex flex-col md:flex-row gap-10">
        {items.map(({ text, url }) => (
          <li className="" key={idGenerator()}>
            <a className="" href={url}>
              {text}
            </a>
          </li>
        ))}
        {/* <li className="text-green-sheen">
          <Link>{requestText}</Link>
        </li> */}
      </ul>

      <a
        target="_blank"
        className="whatsapp-button mb-sm-0"
        href="https://wa.me/5511999999999"
      >
        <img src={WhatappIcon} alt="" width={50} />
      </a>
    </div>
  );
};
export default Footer;
