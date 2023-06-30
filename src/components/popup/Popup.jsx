import React, { useState } from "react";
import styles from "./Popup.css";
import { BsXSquare } from "react-icons/bs";
import { IconContext } from "react-icons";
import machine from "../../assets/caca-niquel.png";

export const Popup = ({
  onClose,
  config: { type, title, subtitle, videoUrl, formFields, consentCheckbox },
}) => {
  const popupType = type;

  const fieldsArray = [];

  for (let i = 0; i < formFields.numberOfFields; i++) {
    fieldsArray.push(formFields.fields[i]);
  }

  const videoContent = (
    <div className="video">
      <iframe
        className="video__iframe"
        title="Video"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
  const gameContent = (
    <div className="game">
      <h4 className="game__title">Tente a sorte!</h4>
      <img className="game__img" src={machine} />
    </div>
  );

  return (
    <div className="popup">
      <div className="content">
        <IconContext.Provider value={{ color: "#6807f9" }}>
          <div className="content__closeIcon" onClick={() => onClose(false)}>
            <BsXSquare className="content__close"></BsXSquare>
          </div>
        </IconContext.Provider>
        <h2 className="content__title">{title}</h2>
        <h3 className="content__subtitle">{subtitle}</h3>
        {type === "video" ? videoContent : gameContent}
        <div className="content__form">
          <h4 className="content__form-title">Registre-se</h4>
          <div className="content__inputs">
            {fieldsArray.map((field) => (
              <div className="content__input">
                <label>{field.fieldTitle}</label>
                <input type={field.fieldType} name={field.fieldTitle} />
              </div>
            ))}
          </div>
          <div className="content__form-button-div">
            <button type="submit" className="content__form-button">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
