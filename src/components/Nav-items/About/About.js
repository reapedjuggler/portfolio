import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Profile from "../../../assets/img/profile/profile.jpg";
import "./about.css";

function About() {
	return (
		<div id="about">
			<div className="about">
				<h1 className="pt-3 text-center font-details pb-3"> ABOUT ME! </h1>

				<Container>
					<Row className="pt-3 pb-5 align-items-center">
						{/* Profile Pic */}
						<Col xs={12} md={6}>
							<Row className="justify-content-center mb-2 mr-2 ">
								<Image
									className="profile justify-content-end"
									src={Profile}
									thumbnail
								/>
							</Row>
						</Col>

						{/* -- Buttons -- */}
						<Col>
							<Row className=" align-items-start p-2 my-details rounded">
								<div className="desc">
									<h3>
										<strong>Hello folks! I'm Vibhav</strong>
									</h3>
									<br /> A curious programmer with an endless appetite for
									learning, currently I'm completing my B.tech in Computer
									Science from Jaypee Institute of Information Technology, I am
									skilled in Data structures, Algorithms and Back-end
									development, I primarily work on MERN stack but I am always
									open to work with new technologies.
									<br /> <br />
									Along with Sport Programming I also take part in hackathons
									and I've also won American Express Codestreet 2021 hackathon.
									<br /> <br /> Being always involved in something, I am always
									curious to learn about new technology and leverage it to solve
									real world problems.
									<br />
									Feel free to contact me through my resume or social-handles
									provided below. I would be glad if I can help you in any
									possible way.
									<br />
									<Col className="d-flex justify-content-center flex-wrap">
										<div>
											<a
												href="https://drive.google.com/file/d/1gASdynwVCVMlp956o7C2OGXfFjfs8A0H/view?usp=sharing"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button
													className="m-2"
													variant="outline-primary"
													size="lg"
												>
													My Resume
												</Button>
											</a>
										</div>

										<div>
											<a
												href="https://github.com/reapedjuggler"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button
													className="m-2 fab fa-github-square"
													variant="outline-dark"
													size="lg"
												>
													&nbsp; GitHub
												</Button>
											</a>
										</div>

										<div>
											<a
												href="https://www.linkedin.com/in/vibhav-tomar-883282178/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button
													className="m-2"
													variant="outline-info"
													size="lg"
												>
													LinkedIn
												</Button>
											</a>
										</div>

										<div>
											<a
												href="https://twitter.com/reapedjuggler"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button
													className="m-2 fab fa-twitter"
													variant="outline-primary"
													size="lg"
												>
													&nbsp; Twitter
												</Button>
											</a>
										</div>

										<div>
											<a
												href="https://codeforces.com/profile/s0ber_"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button
													className="m-2"
													variant="outline-info"
													size="lg"
												>
													&nbsp; CodeForces
												</Button>
											</a>
										</div>

										<div>
											<a
												href="https://www.codechef.com/users/reaped_juggler"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button
													className="m-2 fab"
													variant="outline-primary"
													size="lg"
												>
													&nbsp; Code Chef
												</Button>
											</a>
										</div>

										<div>
											<a
												href="https://www.hackerrank.com/reaped_juggler"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button
													className="m-2 fab"
													variant="outline-primary"
													size="lg"
												>
													&nbsp; HackerRank
												</Button>
											</a>
										</div>
									</Col>
								</div>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default About;
