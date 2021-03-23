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

const Card = ({ imageSrc, heading }: CardProps) => {
  return (
    <>
      <div className="cardContent">
        <h2>{heading}</h2>
        <div className="cardImageWrapper">
          <Image src={imageSrc}></Image>
        </div>
        <p>
            In unseren Büros beraten wir Sie gerne und finden die beste Lösung für Ihre Anforderungen und Wünsche.
        </p>
      </div>
    </>
  )
}

export default Card
