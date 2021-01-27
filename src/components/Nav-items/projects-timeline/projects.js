import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';

import "./projects.css";


import L_HTML5 from "../../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../../assets/img/skills/css3.svg";
import L_REACT from "../../../assets/img/skills/react.svg";
import L_REACT_BOOTSTRAP from "../../../assets/img/skills/react-bootstrap.svg";
import L_STYLED_COMPONENTS from "../../../assets/img/skills/styled-components.svg";
import L_NODE_JS from "../../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../../assets/img/skills/express.svg";
import L_MONGODB from "../../../assets/img/skills/mongodb.svg";
import L_POSTGRESQL from "../../../assets/img/skills/postgresql.svg";
import L_SOCKET from '../../../assets/img/projects/scoket.svg'
import L_ChatBot from '../../../assets/img/projects/chatbot.jpg'
import L_TAXI from '../../../assets/img/projects/taxi.jpg'
import Profile from '../../../assets/img/projects/portfolio.webp'
import ToDoApp from '../../../assets/img/projects/todoapp.jpeg'

const Project = () => {
    return (

        <div id = "projects">

            <h1 className="pt-3 text-center font-details-b pb-3 custom">PROJECTS</h1>
            <Timeline>
                <Events>

                    {/* Project: Todo List With Express and Mongodb */}
                    <ImageEvent
                            // date="01/10/2020"
                            className="text-center custom"
                            text="ToDo App"
                            src={ToDoApp}
                            alt="ME ToDo App"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    className="p-2 text-center accordian-main"
                                    >
                                    PROJECT DETAILS
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" className="text-left">
                                    <Card.Body>
                                        <strong>Description:</strong> This is a Todo app created with MongoDB and Express that keeps a track of your Todos
                                        <hr />
                                        <strong>Features:</strong>
                                        <ul className="list-styles pt-1">
                                    
                                            <li>Keeps track of your Todos</li>
                                            <li>Powered by MongoDB and Express</li>
                                            <li> Flexibility of updating or removing Todos </li>
                                        
                                        </ul>
                                        <hr />
                                        <strong>Tech used:</strong>
                                        <ul>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_HTML5}
                                                alt="HTML 5"
                                                rounded
                                                className="image-style m-1"
                                            ></Image>{" "}
                                            HTML5
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_CSS3}
                                                alt="CSS 3"
                                                rounded
                                                className="image-style m-1"
                                            ></Image>{" "}
                                            CSS3
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_MONGODB}
                                                alt="mongoDB"
                                                rounded
                                                className="image-style1 m-1"
                                            ></Image>{" "}
                                            MongoDB
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_EXPRESS}
                                                alt="Express.js"
                                                rounded
                                                className="image-style1 m-1"
                                            ></Image>{" "}
                                            Express.js
                                            </span>
                                        </li>
                                        
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">

                                <UrlButton
                                href="https://github.com/reapedjuggler/ToDoList-with-MongoDB"
                                target="_blank"
                                >
                                Gihtub Repository
                                </UrlButton>

                            </div>
                            </div>
                    </ImageEvent>


                    {/* Project: React Chat App */}
                    <ImageEvent
                                className="text-center custom"
                                text="Chat Bot"
                                src={L_ChatBot}
                                alt="Chat bot using React and Socketio"
                            >
                                <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey="0"
                                        className="p-2 text-center accordian-main"
                                        >
                                        PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left"> 
                                        <Card.Body>
                                            <strong>Description:</strong> A chat app made for hassle free chating
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                            <li>Custom Room numbers</li>
                                            <li>Real-time chats with SocketIo</li>
                                            <li> Hassle free chating </li>
                                            </ul>
                                            <hr />
                                            <strong>Tech used:</strong>
                                            <ul>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_REACT}
                                                    alt="React"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                React
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_SOCKET}
                                                    alt="scoketio"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                SOCKET IO
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_EXPRESS}
                                                    alt="Express"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                Express
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_NODE_JS}
                                                    alt="Nodejs"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                Nodejs
                                                </span>
                                            </li>
                                            </ul>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                  
                                    <UrlButton
                                    href="https://github.com/reapedjuggler/Chat-Application"
                                    target="_blank"
                                    >
                                    Gihtub Repository
                                    </UrlButton>
    
                                </div>
                                </div>
                            </ImageEvent>


                    {/* Project: XRides */}
                    <ImageEvent
                                className="text-center custom"
                                text="XRides"
                                src={L_TAXI}
                                alt="Xrides"
                            >
                                <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey="0"
                                        className="p-2 text-center accordian-main"
                                        >
                                        PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left"> 
                                        <Card.Body>
                                            <strong>Description:</strong> A Back-End API made with PostgreSQL and Expres.js for vehicle allocation, also proposed a efficient solution to handle a burst of requests using Load Balancing
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                            <li>Proper Response about </li>
                                            <li>Built on REST architecture hence provides CRUD functionalities</li>
                                            <li> A solution for peak time requests </li>
                                            </ul>
                                            <hr />
                                            <strong>Tech used:</strong>

                                            <ul>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_POSTGRESQL}
                                                    alt="PostgreSQL"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                PostgreSQL
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_EXPRESS}
                                                    alt="Expressjs"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                Express.js
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_NODE_JS}
                                                    alt="Nodejs"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                Node.js
                                                </span>
                                            </li>
                                            </ul>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                  
                                    <UrlButton
                                    href="https://github.com/reapedjuggler/XRides"
                                    target="_blank"
                                    >
                                    Github Repository
                                    </UrlButton>
    
                                </div>
                                </div>
                            </ImageEvent>

                    {/* Project: PortFolio */}
                    <ImageEvent
                                className="text-center custom"
                                text="Portfolio"
                                src={Profile}
                                alt="My Portfolio"
                            >
                                <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey="0"
                                        className="p-2 text-center accordian-main"
                                        >
                                        PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left"> 
                                        <Card.Body>
                                            <strong>Description:</strong> Portfolio built on top of React
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                            <li>Contains CV and all other required information </li>
                                            <li> Contains all the Projects </li>
                                            </ul>
                                            <hr />
                                            <strong>Tech used:</strong>

                                            <ul>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_REACT}
                                                    alt="React"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                React
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_REACT_BOOTSTRAP}
                                                    alt="react-bootstrap"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                React-Boostrap
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_STYLED_COMPONENTS}
                                                    alt="Nodejs"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                Styled-Components
                                                </span>
                                            </li>
                                            </ul>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                  
                                    <UrlButton
                                    href="https://github.com/reapedjuggler/Portfolio"
                                    target="_blank"
                                    >
                                    Github Repository
                                    </UrlButton>
    
                                </div>
                                </div>
                            </ImageEvent>




                </Events>
            </Timeline>
        </div>

    )
}

export default Project;