import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Zoom } from "react-awesome-reveal";
import flight_day from "../../Images/trip/voyage/image1.jpeg";
import day1 from "../../Images/trip/Day1/image12.jpeg";
import day2 from "../../Images/trip/church/image5.jpeg";
import day3 from "../../Images/trip/Day3/image0.jpg";
import day4 from "../../Images/trip/Day4/image0.jpg";
import day5 from "../../Images/trip/Day5/image0.jpg";
import day7 from "../../Images/trip/Day7/image6.jpg";
import day8 from "../../Images/trip/Day8/image1.jpg";
import day9 from "../../Images/trip/Day9/image3.jpg";
import arrival_day from "../../Images/trip/ArrivalDay/image4.JPG";
import { NavLink } from "react-router-dom";
import "./Trip.css";

function Media({ ...props }) {
  return (
    <NavLink className="tripCards" to={props.linkTo}>
      <div style={{ width: "300px" }}>
        <Zoom triggerOnce={true}>
          <Card sx={{ maxWidth: 345, width: "100%" }}>
            <Suspense
              fallback={
                <Skeleton
                  sx={{ height: 190 }}
                  animation="wave"
                  variant="rectangular"
                />
              }
            >
              <CardMedia
                component="img"
                height="300"
                image={props.img}
                alt="Error"
              />
            </Suspense>

            <CardContent>
              <Suspense
                fallback={
                  <React.Fragment>
                    <Skeleton
                      animation="wave"
                      height={10}
                      style={{ marginBottom: 6 }}
                    />
                    <Skeleton animation="wave" height={10} width="80%" />
                  </React.Fragment>
                }
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p"
                >
                  {props.text}
                </Typography>
              </Suspense>
            </CardContent>
          </Card>
        </Zoom>
      </div>
    </NavLink>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Trip() {
  return (
    <div
      id="flex_container"
      style={{
        margin: "50px auto",
        width: "100%",
        maxWidth: "1260px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <Media
        img={flight_day}
        text="Departure day (Porto)"
        linkTo={"/departure_day"}
      />
      <Media img={day1} text="Day 1 (Dom Luis I Bridge)" linkTo={"/day1"} />
      <Media
        img={day2}
        text="Day 2 (Church Saint Ildefonso)"
        linkTo={"/day2"}
      />
      <Media img={day3} text="Day 3 (Panda Gathering Time)" linkTo={"/day3"} />
      <Media img={day4} text="Day 4 (Panda Plays Football)" linkTo={"/day4"} />
      <Media img={day5} text="Day 5 (What is Metyis)" linkTo={"/day5"} />
      <Media img={day7} text="Day 7 (Boat tour in Aveiro)" linkTo={"/day7"} />
      <Media img={day8} text="Day 8 (Panda and Dragon)" linkTo={"/day8"} />
      <Media img={day9} text="Day 9 (CISCO/CCNA DAY)" linkTo={"/day9"} />
      <Media
        img={arrival_day}
        text="Arrival Day (Toulouse)"
        linkTo={"/arrival_day"}
      />

      {/* <Media /> */}
    </div>
  );
}
