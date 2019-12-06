
import React from "react";
import './Kumya.scss';

interface Props {
  text: string;
  link: string;
  hoverText?: string;
}

const Kumya = (props: Props) => {
  const { link, hoverText, text } = props;
  return (
    <div className="grid__item">
      <a className="link link--kumya" href={link}><span data-letters={hoverText ? hoverText : text}>{text}</span></a>
    </div>
    );
}


export default Kumya;