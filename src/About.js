import { Card, ListGroup} from "react-bootstrap";
import Capture from "./Capture.JPG";

export default function About() {
  return (
    <>
    <br />
    <Card border ="dark" style={{ width: "70rem" }}>
          <Card.Header>
        <Card.Title>About</Card.Title>
        <Card.Text>All about me - the developer.</Card.Text>
        <ListGroup><ListGroup.Item style={{ backgroundColor: "lemonchiffon" }}>I have earned a Google Digital Unlocked certificate for successful completion of Google digital marketing course.</ListGroup.Item>
        </ListGroup>
        <Card.Img variant="middle" src={Capture} />
        <br />
        <br />
        <ListGroup.Item style={{ backgroundColor: "lemonchiffon" }}><Card.Link href="https://jenish-patel-web.netlify.app/">Want to know more about me&#10067; Have a look to my website.&#128521;</Card.Link>
        </ListGroup.Item>
        <br />
        <br />
        <ListGroup.Item style={{ backgroundColor: "lemonchiffon" }}><Card.Link href="https://thawing-waters-16455.herokuapp.com/">Have a look to my Web-322 app&#128526;</Card.Link>
        </ListGroup.Item>
       
        </Card.Header>
    </Card>
    </>
  );
}
