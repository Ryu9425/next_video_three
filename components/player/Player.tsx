// pages/index.js
import React, { useEffect, useRef, useState } from "react";

import styles from "../../styles/Player.module.scss";

export interface IPlayer {
  id: string
  name: string
  url: string
  description?: string
}

interface IPlayerProps {
  player: IPlayer
}

export const Player = (props: IPlayerProps) => {
  const videoSrc = props.player.url;
  const [controlable, setControlable] = useState(false);

  const [download, setDownload] = useState(true);

  useEffect(() => {

  }, [download])

  return (
    <div className={styles.player}>
      <h2 className={styles.player__title}>{props.player.name}</h2>
      <p className={styles.player__description}>{props.player.description}</p>
      <div className={styles.player__video} onMouseOver={() => setControlable(true)
      } onMouseOut={() => { setControlable(false) }}>
        <video className={styles.player__video} controls={controlable}
               controlsList={download ? "nodownload" : ""} muted >
          <source src={videoSrc} type="video/mp4"></source>
        </video>
      </div>
      <div className="player__price-button-container">
        {/* <div className={styles.product__price}>${props.product.price.toFixed(2)}</div> */}
        <button className={`snipcart-add-item ${styles.player__button}`}
        // data-item-id={props.product.id}
        // data-item-name={props.product.name}
        // data-item-price={props.product.price}
        // data-item-url={props.product.url}
        // data-item-image={props.product.image.src        
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Player