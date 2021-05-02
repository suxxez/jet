import * as React from "react"
import "@fontsource/open-sans"
import "./card.scss"
import {} from "gatsby"
import Image from "./image"

type CardProps = {
  imageSrc: string
  heading?: string
  text?: string
}

const Card = ({ imageSrc, heading, text }: CardProps) => {
  return (
    <>
      <div className="cardContent">
        
        <div className="cardImageWrapper">
          <Image src={imageSrc}></Image>
        </div>
        <h3>{heading}</h3>
        { (text) && <p>{text}</p>}
      </div>
    </>
  )
}

export default Card
