import School from "../../assets/School-Premises.png";
import School2 from "../../assets/school-image-2.jpg";
import "./index.scss";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { CarouselCard, TextBox } from "../text-box/TextBox";
import { overview } from "./overview";
import { history } from "./HistoryOfSchool";
import { AboutEnglishVersion } from "./EnglishVersion";
import { generateUID } from "../../utils/utils";
import { offerings } from "./offerings";
import { bangla_version } from "./BanglaVersion";
import BanglaVersionImage from "../../assets/bangla-version.png"
import CollegeImage from "../../assets/college-campus.png"
import { CollegeCampus } from "./CollegeCampus";
import MainImage from "../../assets/MainImage.png"
export function LandingPage() {
  const row_spacing = "my-3";
  const AnimatableContainer = motion(Container);
  return (
    <>
    <AnimatableContainer layout fluid>
      <Row>
        <Col>
          <motion.div className="thumbnail" layout>
            <img src={MainImage} alt="main-img" width={"100%"} height={"100%"} />
          </motion.div>
        </Col>
      </Row>
    </AnimatableContainer>
    <AnimatableContainer layout>
      <Row className={row_spacing}>
        <Col>
          <TextBox body={history} title="History" />
        </Col>
      </Row>
      <Row className={row_spacing}>
        <Col>
          <TextBox body={overview} title="Overview" />
        </Col>
      </Row>
      <Row className={row_spacing}>
        <Col>
          <TextBox body={offerings} title="Offerings" />
        </Col>
      </Row>
      <Row className="mt-3 spacing-for-animation" >
        <Col>
          <TextBox body={AboutEnglishVersion} title="English Version" />
        </Col>
      </Row>
      <Row className={row_spacing}>
        <Col>
          <TextBox body={bangla_version} title="Bangla Version" image={BanglaVersionImage} />
        </Col>
      </Row>
      <Row className={row_spacing}>
        <Col>
          <TextBox body={CollegeCampus} title="College" image={CollegeImage} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CarouselCard
            images={[
              <img
                src={School}
                style={{ height: "auto", width: "100%" }}
                alt="school"
                key={generateUID()}
              />,
              <img src={School2} alt="school2" key={generateUID()} />,
            ]}
          ></CarouselCard>
        </Col>
      </Row>
    </AnimatableContainer>
    </>
  );
}
