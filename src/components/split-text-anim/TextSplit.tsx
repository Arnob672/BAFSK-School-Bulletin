import { ReactNode } from "react";
import { Container, Row,Col } from "react-bootstrap";
export interface SplitTextProps {
    readonly text1:ReactNode;
    readonly text2:ReactNode
}
export function SplitText({text1,text2}:SplitTextProps) {
    return (
        <Container>
            <Row>
                <Col>
                    <span>{text1}</span>
                    <span>{text2}</span>
                </Col>
            </Row>
        </Container>
    )
}