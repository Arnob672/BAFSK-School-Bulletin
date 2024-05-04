import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { Card, Carousel } from "react-bootstrap";
import { generateUID } from "../../utils/utils";
import "./index.scss";
export interface TextBoxProps {
  readonly Header?: ReactNode;
  readonly title?: string;
  readonly body: ReactNode;
  readonly image?: string;
}
export interface ImagesOrCarouselProps {
  readonly images?: ReactNode[];
}
export function ImagesOrCarousel({ images }: ImagesOrCarouselProps) {
  if (!images || images.length === 0) {
    return <></>;
  }
  if (images.length === 1) {
    return images[0];
  }
  return (
    <Carousel>
      {images.map((image) => {
        return <Carousel.Item key={generateUID()}>{image}</Carousel.Item>;
      })}
    </Carousel>
  );
}
export function TextBox({ Header, title, body, image }: TextBoxProps) {
  const AnimatableCard = motion(Card);
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const card_ref=useRef<any>(null);
  const {scrollYProgress}=useScroll({
    target:card_ref,
    offset: ["start end", "0.5 end"]
  })
  const position=useTransform(scrollYProgress,[0,1],[-200,0],{clamp:false});
  return (
    <div>
      <AnimatableCard layout className="text-box box" ref={card_ref} style={{opacity:scrollYProgress,x:position}} >
        {Header}
        {title && <Card.Title className="ms-2">{title}</Card.Title>}
        <Card.Body>{body}</Card.Body>
        {image && <Card.Img src={image} alt="image" variant="right" />}
      </AnimatableCard>
    </div>
  );
}
export function CarouselCard({ images }: ImagesOrCarouselProps) {
  return <ImagesOrCarousel images={images}></ImagesOrCarousel>;
}
