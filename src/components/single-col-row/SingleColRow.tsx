import { ReactNode, forwardRef } from "react";
import { Row,Col } from "react-bootstrap";

interface RowProps {
	children?: ReactNode;
}
export const SingleColRow=forwardRef(({children}:RowProps,ref)=>{
		return (<Row ref={ref}>
		<Col>
			{children}
		</Col>
	</Row>)});
