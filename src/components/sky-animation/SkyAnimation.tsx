import { useEffect, useState  } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sky from "../../assets/test-sky-3.png";
import Jet from "../../assets/fighter-jet-removebg-preview(2).png";
import { useQuote, QuoteProps } from "../quote-getter/QuoteGetter";
import { useAnimate, motion } from "framer-motion";
import "../landing-page/index.scss"
export interface AnimatedQuoteProps {
  readonly quote: QuoteProps | null;
}
export function AnimatedQuote({ quote }: AnimatedQuoteProps) {
  if (!quote) {
    return <></>;
  }
  return (
    <motion.blockquote
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="image-text">{quote.quote}</h1>
      <footer className="image-text">{`-${quote.author}`}</footer>
    </motion.blockquote>
  );
}
export function SkyAnimation() {
  const quote = useQuote();
  const [scope, animate] = useAnimate();
  const [jetAnimationComplete, setJetAnimationComplete] = useState<boolean>(false);
  const AnimatableContainer = motion(Container);
  useEffect(() => {
    function setup_jet() {
      animate(scope.current, { x: [0, 1500] }, { duration: 1 }).then(() => {
        setJetAnimationComplete(true);
      });
    }
    setup_jet();
  }, [animate,scope]);
  return (
    <AnimatableContainer fluid layout>
      <Row>
        <Col>
          <div className="thumbnail">
            <img src={Sky} alt="sky" className="big-image" />
            <div className="caption">
              {!jetAnimationComplete && (
                <img src={Jet} className="fill-image" ref={scope} alt="jet" />
              )}
              {jetAnimationComplete && quote ? (
                <AnimatedQuote quote={quote} />
              ) : null}
            </div>
          </div>
        </Col>
      </Row>
    </AnimatableContainer>
  );
}
