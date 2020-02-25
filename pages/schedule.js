import Head from 'next/head'
import {Badge, Row, Card, Container} from 'react-bootstrap'
import React from 'react'
import {Component} from 'react'
import Header from '../partials/header'

const schedule_items =  [
    {
        location: 'Main Lobby',
        title: 'Check-In',
        timeStart: '8:00',
        timeEnd: '11:00 AM'
    },
    {
        location: 'Main Lobby',
        title: 'Volunteer Check-In',
        timeStart: '8:00',
        timeEnd: '11:00 AM'
    },
    {
        location: 'Cafeteria',
        title: 'Welcome Ceremony',
        timeStart: '9:00',
        timeEnd: '10:00 AM'
    },
    {
        location: 'Cafeteria',
        title: 'Team Forming',
        timeStart: '10:00',
        timeEnd: '10:30 AM'
    },
    {
        location: 'General',
        title: 'Hacking Begins',
        timeStart: '10:00 AM',
    },
    {
        location: 'Fifth Floor - Workshop Room #1',
        title: 'Workshop #1: Intro to Python',
        timeStart: '10:00',
        timeEnd: '11:15 AM'
    },
    {
        location: 'Fifth Floor - Workshop Room #2',
        title: 'Workshop #2: Batman or Superman?',
        timeStart: '11:30',
        timeEnd: '12:15 PM'
    },
    {
        location: 'Cafeteria',
        title: 'Lunch',
        timeStart: '1:00',
        timeEnd: '2:00 PM'
    },
    {
        location: 'Fifth Floor - Workshop Room #2',
        title: 'Workshop #3: Intro to Git',
        timeStart: '2:00',
        timeEnd: '2:45 PM'
    },
    {
        location: 'Fifth Floor - Workshop Room #1',
        title: 'Workshop #4: Intro to Web Development',
        timeStart: '2:45',
        timeEnd: '3:30 PM'
    },
    {
        location: 'Cafeteria',
        title: 'Snacks',
        timeStart: '3:30 PM'
    },
    {
        location: 'Fifth Floor - Workshop Room #1',
        title: 'Gen.XYZ Website Workshop',
        timeStart: '3:45',
        timeEnd: '4:30 PM'
    },
    {
        location: 'Fifth Floor - Workshop Room #2',
        title: 'Workshop #5: Intro to Linux',
        timeStart: '3:45',
        timeEnd: '4:30 PM'
    },
    {
        location: 'General',
        title: 'Hacking Ends',
        timeStart: '5:00 PM',
    },
    {
        location: 'Fifth Floor & Cafeteria',
        title: 'Judging/Presenting',
        timeStart: '5:15',
        timeEnd: '6:00 PM'
    },
    {
        location: 'Cafeteria',
        title: 'Dinner / Keynote',
        timeStart: '7:00',
        timeEnd: '7:30 PM'
    },
];

class ScheduleCard extends Component {
    render() {
        return (
            <Card className="item-card">
                <Card.Body>
                    <span className="highlight">{this.props.timeStart}{this.props.timeEnd ? " - " + this.props.timeEnd: ""}</span>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Badge variant="primary">
                        {this.props.location || 'Main Lobby'}
                    </Badge>{''}
                    <br/>
                    {this.props.description}
                </Card.Body>
            </Card>
        )
    }
};

const Schedule = () => (
    <Header pageName="Schedule">
        <h1 className="title">
            Schedule
        </h1>
        <div className="schedule">
            <Container>
                {schedule_items.map((item, _) => {
                    return <Row>
                        <ScheduleCard title={item.title} location={item.location} timeStart={item.timeStart} timeEnd={item.timeEnd} description={item.description} />
                    </Row>;
                })}

            </Container>
        </div>

    </Header>
)

export default Schedule
