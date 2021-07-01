import React from 'react';
import { Button, Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import BlogData from '../../FakeData/BlogData'
import { useState } from 'react';
import './Blog.css'

const Blog = () => {
    const styles = {
        fadeInUp: {
            animation: 'x 2s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        }
    }
    const [blogData, setBlogData] = useState(BlogData)
    console.log(blogData);
    return (
        <div className="background blogSide">
            <Container className="mt-5 text-white">
                <h2 style={{ borderBottom: "4px solid green" }} className="text-success">My Blog</h2>
                <CardDeck className="pt-4">
                    <Row>
                        {
                            blogData.map(blogInfo =>
                                <Col md={4}>
                                    <StyleRoot>
                                        <div className="test" style={styles.fadeInUp}>
                                            <Card className="mb-4 card">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <div className="inner">
                                                    <Card.Img className="img" variant="top" src={blogInfo.img} style={{ width: "100%", height: "200px" }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title className="text-success">{blogInfo.name}</Card.Title>
                                                </Card.Body>
                                                <Card.Footer className="footer text-center">
                                                    <a href={blogInfo.live} target="_blank">
                                                        <Button className="bg-success"> Live Site</Button>
                                                    </a>
                                                </Card.Footer>
                                            </Card>
                                        </div>
                                    </StyleRoot>
                                </Col>
                            )
                        }
                    </Row>
                </CardDeck>
            </Container>
        </div>
    );
};

export default Blog;