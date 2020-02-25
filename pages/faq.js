import Header from "../partials/header";
import {Container, Row, Card, Accordion} from "react-bootstrap";
import React from "react";

const qa = [
    {
        q: "How many members can be on a team?",
        a: "A maximum of 4, though you may work in smaller groups (although we encourage groups of 4)."
    },
    {
        q: "Where can I park?",
        a: "You may park in ResMed's parking garage, though the parking compound opens at 7:00AM. Parking is free."
    },
    {
        q: "Where is the hackathon? Where should I sign in?",
        a: "The hackathon will take place in ResMed's HQ (9001 Spectrum Center Blvd, San Diego CA). You may check in at the lobby, where a sign-in sheet will be present."
    },
    {
        q: "Where can I hack in the venue?",
        a: "You are welcome to hack in the cafeteria and 5th level - the entire 5th floor has been reserved to our event."
    },
    {
        q: "I didn't RSVP, but I still want to come.",
        a: "We'll open up all sign-ins at 9:00PM, but if 100 participants who have RSVP'ed have entered, you cannot join our event."
    },
    {
        q: "How will judging work?",
        a: "Judging will work EXPO style: the groups will be divided on Slack based on the Devpost submissions. Half of the groups will present in the 5th floor conference room, while the other half will present in the cafeteria."
    },
    {
        q: "What food will be provided?",
        a: "We'll provide bagels for breakfast, a hefty lunch and dinner, as well as many snacks. You will not need to bring any food."
    },
    {
        q: "What should I bring?",
        a: "You should bring a laptop and a charger. We ask that you also bring your liability forms, and we recommend bringing a student ID."
    }
];

const FAQ = () => (
    <Header pageName="FAQ">
        <h1 className="title">
            Frequently Asked Questions
        </h1>
        <Container>
            <Row>
                {qa.map((item, _) => {
                    return (
                    <Accordion defaultActiveKey="0">
                    <Card className="accordion-card">
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="faq-header">
                            {item.q}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{item.a}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                    )
                })}

            </Row>
        </Container>

    </Header>
)

export default FAQ