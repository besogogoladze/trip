import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Zoom } from "react-awesome-reveal";
import { useState } from "react";
import flight_day from "../../Images/trip/voyage/image1.jpeg";
import day1 from "../../Images/trip/Day1/image12.jpeg";
import day2 from "../../Images/trip/church/image5.jpeg";
import day3 from "../../Images/trip/Day3/image0.jpg";
import day4 from "../../Images/trip/Day4/image0.jpg";
import day5 from "../../Images/trip/Day5/image0.jpg";
import day7 from "../../Images/trip/Day7/image6.jpg";
import day8 from "../../Images/trip/Day8/image1.jpg";
import { NavLink } from "react-router-dom";
import "./Trip.css";

function Media({ ...props }) {
  return (
    <NavLink className="tripCards" to={props.linkTo}>
      <div style={{ width: "300px" }}>
        <Zoom triggerOnce={true}>
          <Card sx={{ maxWidth: 345, width: "100%" }}>
            {props.loading ? (
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
            ) : (
              <CardMedia
                component="img"
                height="300"
                image={props.img}
                alt="Error"
              />
            )}

            <CardContent>
              {props.loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p"
                >
                  {props.text}
                </Typography>
              )}
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div
      id="flex_container"
      style={{
        margin: "50px auto",
        width: "100%",
        maxWidth: "1400px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <Media
        loading={loading}
        img={flight_day}
        text="Departure day"
        linkTo={"/departure_day"}
      />
      <Media
        loading={loading}
        img={day1}
        text="Day 1 (Dom Luis I Bridge)"
        linkTo={"/day1"}
      />
      <Media
        loading={loading}
        img={day2}
        text="Day 2 (Church Saint Ildefonso)"
        linkTo={"/day2"}
      />
      <Media
        loading={loading}
        img={day3}
        text="Day 3 (Panda Gathering Time)"
        linkTo={"/day3"}
      />
      <Media
        loading={loading}
        img={day4}
        text="Day 4 (Panda Plays Football)"
        linkTo={"/day4"}
      />
      <Media
        loading={loading}
        img={day5}
        text="Day 5 (What is Metyis)"
        linkTo={"/day5"}
      />
      <Media
        loading={loading}
        img={day7}
        text="Day 7 (Boat tour in Aveiro)"
        linkTo={"/day7"}
      />
      <Media
        loading={loading}
        img={day8}
        text="Day 8 (Panda and Dragon)"
        linkTo={"/day8"}
      />

      {/* <Media /> */}
    </div>
  );
}
