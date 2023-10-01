import React from "react";
import { Container, Grid, Typography, Paper, Card, CardContent,Button } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
import "./styles/About.css";

const About = () => {
  // Sample data for client testimonials
  const testimonials = [
    {
      fname: "John",
      lname: "Doe",
      review: "What a great experience with Our Airways!",
    },
    {
      fname: "Jane",
      lname: "Smith",
      review: "I highly recommend flying with Our Airways. Excellent service!",
    },
    {
      fname: "Alice",
      lname: "Johnson",
      review: "Comfortable and luxurious flights. Loved it!",
    },
  ];

  return (
    <div>
      <section>
        <div className="row py-4" style={{ backgroundColor: "rgb(246, 246, 246)" }}>
          <div className="col-lg-12 align-items-center d-flex justify-content-center">
            <Typography variant="h4">About Us</Typography>
          </div>
        </div>
      </section>

      <section>
        <Container>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                About Our Airways
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Our goals and values
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6} align="center">
              <img
                // src={require("").default}
                alt="Airhostess"
                width="950"
                height="650"
                style={{ borderRadius: '20px' }}
              />
            </Grid>

            <Grid item xs={12} md={6} style={{ paddingTop: "150px" }}>
              <Typography variant="body1" style={{ fontSize: "25px", marginLeft: "10px" }}>
                Our focus is on your overall well-being and helping you avail luxurious flights at minimal costs. We provide state-of-the-art facilities in all our airways.
              </Typography>
              <br />
              <br />
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <img
                    // src={require("../../images/nc1.png").default}
                    alt="Mission Icon"
                    height="80px"
                    width="70px"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" style={{ fontSize: "25px" }}>Our Missions</Typography>
                  <Typography variant="body1" style={{ fontSize: "20px" }}>
                    To make our flights easy, comfortable, and reliable for you
                  </Typography>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
              <br />
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <img
                    // src={require("../../images/nc4.png").default}
                    alt="Professionals Icon"
                    height="65px"
                    width="70px"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" style={{ fontSize: "25px" }}>Professionals in our Airways</Typography>
                  <Typography variant="body1" style={{ fontSize: "20px" }}>
                    Has provided a high-class facility for every journey
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section style={{ paddingBottom: "20px" }}>
        <Container>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6} align="center">
              <Typography variant="h4" style={{ textAlign: 'center' }}>
                Come fly with us and<br />you could win the<br />TRIP OF A LIFETIME
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} align="center">
              {/* <img
                src={require("../../images/about1.jpg").default}
                alt="About"
                width="1200px"
                style={{ borderRadius: "20px" }}
              /> */}
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} align="center">
              <Typography variant="h4" style={{ fontSize: "35px" }}>
                Our Happy Clients
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} align="center">
              <Typography variant="h6" style={{ color: "grey", fontSize: '30px' }}>What people say about us</Typography>
            </Grid>
          </Grid>
        </Container>

        <Carousel style={{ height: '200px' }}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index} interval={1000}>
              <Typography variant="body1" align="center" style={{ fontSize: '25px' }}>
                {`${testimonial.fname} ${testimonial.lname}: ${testimonial.review}`}
              </Typography>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} align="center">
              <video className="w-100" autoPlay loop muted>
                {/* <source
                  src={require("../../images/InsideTheWorldsBiggestPassengerPlane.mp4").default}
                  type="video/mp4"
                /> */}
              </video>
            </Grid>
            <Grid item xs={12} md={6} align="center">
              <Card style={{ width: "35rem" }}>
                <CardContent>
                  <Typography variant="h4" style={{ fontSize: "35px", marginLeft: "0px" }}>
                    Your comfort is our priority
                  </Typography>
                  <Typography variant="body1" style={{ fontSize: "22px" }}>
                    We are providing you the most comfortable flights ever. You will feel at home when you board the flight. Our staff will treat you as their home members.
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    style={{ fontSize: "22px", padding: "10px" }}
                  >
                    More Information
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default About;
