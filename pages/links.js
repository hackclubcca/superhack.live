import Header from "../partials/header";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import React from "react";

const Links = () => (
    <Header pageName="Links">
        <h1 className="title">
            Links
        </h1>
        <div className="schedule">
            <Container>
                <Row>
                    <Col className="link">
                        <Card className="item-card">
                            <Card.Img variant="top" src="slack.svg"/>
                            <Card.Body>
                                <Card.Title>Slack Invite Link</Card.Title>
                                <Card.Text>
                                    We encourage you to use our Slack before and during our event for synchronized updates and communication.
                                </Card.Text>
                                <a className="btn" variant="primary" href="https://join.slack.com/t/super-hack/shared_invite/enQtODA0ODI2ODkyOTc3LTMyNzMxNjRlM2ZiYjc5OTAxNDQ4Y2JkY2RmZmRjYjI2Y2UzMDg2YzIxNGMzNzkyMGUzM2M1YTgyMWJlODBkYmE">Join Here</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="link">
                        <Card className="item-card">
                            <Card.Img variant="top" src="devpost.svg"/>
                            <Card.Body>
                                <Card.Title>Project Submission</Card.Title>
                                <Card.Text>
                                    You'll need to create a Devpost account for our hackathon located below. This will let you create a submission for our judges. <a href="https://youtu.be/gTFljExPOZc">Here's our registration tutorial.</a>
                                </Card.Text>
                                <a className="btn" variant="primary" href="https://super.devpost.com">Submit Here</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="link">
                        <Card className="item-card">
                            <Card.Img variant="top" src="www.svg"/>
                            <Card.Body>
                                <Card.Title>Main Website</Card.Title>
                                <Card.Text>
                                    Our main website will walk you through the key rundown of our event and its motives. It also has a brief FAQ section.
                                </Card.Text>
                                <a className="btn" variant="primary" href="https://superhack.org">Website</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    </Header>
)

export default Links