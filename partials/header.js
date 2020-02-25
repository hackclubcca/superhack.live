import Head from "next/dist/next-server/lib/head";
import {Card, Container, Nav, Navbar, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Component} from "react";
import React from "react";

function renderTooltip(message) {
    return <Tooltip>{message}</Tooltip>;
}

class Header extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Super Hack Live - {this.props.pageName}</title>

                    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/manifest.json"/>
                    <meta name="msapplication-TileColor" content="#017fbc"/>
                    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                    <meta name="theme-color" content="#017fbc"/>
                    <link rel="canonical" href="https://www.superhack.org/"/>
                    <meta name="keywords"
                          content="superhack, super hack, super, hack, superman, superhacks, super hacks, resmed, triton, triton hack, ravenhack, raven, hack, raven hack, canyon crest academy, cca, harris beg, harris, hackclub, hack, club, hackathon, high school, san diego high school hackathon"/>
                    <meta name="description"
                          content="Super Hack is a 12-hour high-school hackathon that will be held on March 21, 2020 at ResMed's HQ."/>
                    <meta name="subject" content="Super Hack"/>
                    <meta name="robots" content="index, follow"/>

                    <meta name="og:site_name" content="Super Hack - San Diego's Premier High-School Hackathon"/>
                    <meta name="og:image" content="https://www.superhack.org/images/brand/4x3.png"/>
                    <meta name="og:description"
                          content="Super Hack is a 12-hour hackathon that will be hosted on March 21, 2020 at ResMed's HQ."/>
                    <meta name="og:type" content="website"/>
                    <script type="application/ld+json">{`
                        {
                            "@context": "http://schema.org",
                            "@type": "Event",
                            "name": "Super Hack Live",
                            "description": "San Diego's premier high-school hackathon happening on March 21, 2020 that gathers hundreds of high-school hackers for 12 hours of activities!",
                            "image": [
                            "https://www.superhack.org/images/preview/1x1.png",
                            "https://www.superhack.org/images/preview/4x3.png",
                            "https://www.superhack.org/images/preview/16x9.png"
                            ],
                            "startDate": "2020-02-01T8:00",
                            "endDate": "2020-02-01T20:00",
                            "location": {
                            "@type": "Place",
                            "name": "ResMed HQ",
                            "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "9001 Spectrum Center Blvd",
                            "addressLocality": "San Diego",
                            "addressRegion": "CA",
                            "postalCode": "92123",
                            "addressCountry": "US"
                        }
                        },
                            "offers": {
                            "@type": "Offer",
                            "name": "Free Admission",
                            "price": "0",
                            "priceCurrency": "USD",
                            "validFrom": "2020-10-20T16:00-08:00",
                            "url": "https://superhack.org",
                            "availability": "http://schema.org/InStock"
                        },
                            "performer": {
                            "@type": "PerformingGroup",
                            "name": "High School Hackers"
                        }
                        }
                    `}</script>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                </Head>
                <Navbar className="nbar" collapseOnSelect expand="lg">
                    <Navbar.Brand href="https://www.superhack.org">
                        <div id="profile-image-container">
                            <img
                                id="profile-image"
                                alt=""
                                src="/superhack.png"
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                            />{' '}
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse className='navbar-links'
                                     id='responsive-navbar-nav'>
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{show: 250, hide: 400}}
                                    overlay={renderTooltip("Home")}>
                                    <Nav.Link href="/">
                                        <span className='mobile-text'>Home</span>
                                    </Nav.Link>

                                </OverlayTrigger>
                            </Nav.Item>
                            <Nav.Item>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{show: 250, hide: 400}}
                                    overlay={renderTooltip("Schedule")}>
                                    <Nav.Link href="/schedule">
                                        <span className='mobile-text'>Schedule</span>
                                    </Nav.Link>

                                </OverlayTrigger>
                            </Nav.Item>
                            <Nav.Item>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{show: 250, hide: 400}}
                                    overlay={renderTooltip("Links")}>
                                    <Nav.Link href="/links">
                                        <span className='mobile-text'>Links</span>
                                    </Nav.Link>
                                </OverlayTrigger>
                            </Nav.Item>
                            <Nav.Item>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{show: 250, hide: 400}}
                                    overlay={renderTooltip("FAQ")}>
                                    <Nav.Link href="/faq">
                                        <span className='mobile-text'>FAQ</span>
                                    </Nav.Link>
                                </OverlayTrigger>
                            </Nav.Item>
                            <Nav.Item>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{show: 250, hide: 400}}
                                    overlay={renderTooltip("Starter Pack")}>
                                    <Nav.Link
                                        href="https://docs.google.com/document/d/1RDOkY7Wtv3bt_VyzfIiczSEE5MC5xeO_E3fKICsQ41o/edit">
                                        <span className='mobile-text'>Starter Pack</span>
                                    </Nav.Link>
                                </OverlayTrigger>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                <main className="container">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Header