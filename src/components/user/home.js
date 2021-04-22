import React, { useEffect, useState } from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import "./user.css";
import Axios from "axios";
import Navbar from "../navbar";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2),
    transition: "0.3s",
    boxShadow: "0px 14px 80px pink",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    backgroundImage: "linear-gradient(147deg, white 0%, black 74%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "pink",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(147deg, red 0%, pink 74%)",
      borderRadius: spacing(2),
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

const Home = () => {
  const [detailList, setDetail] = useState([]);

  useEffect(() => {
    Axios.get("https://bus-tickets-booking.herokuapp.com/update/details").then(
      (res) => {
        setDetail(res.data);
      }
    );
  }, []);

  const styles = useStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <>
      <div className="img1">
        <Navbar />
        <h1 className="welcome">
          <span>Hurry up!! Reserve your seats fast</span>
        </h1>
        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardMedia
            className={styles.media}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYavwaWqM3wftg6O9FFEHwjcVT_YjKwQXgQ&usqp=CAU"
            }
          />
          <CardContent>
            {detailList.map((val, key) => {
              return (
                <>
                  <h4 className="date">{val.StartTime}</h4>
                  <h1 style={{ textTransform: "uppercase" }} className="name">
                    {val.BusName}
                  </h1>
                  <p style={{ textTransform: "uppercase", color: "white" }}>
                    Cost:{val.Cost}
                  </p>
                  <p className="from">
                    <strong className="text">From: </strong>
                    {val.From}
                    <br />
                    <strong className="text">To: </strong>
                    {val.To}
                  </p>
                </>
              );
            })}

            <div className="button">
              <a>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a className="but" href="/book">
                  Book
                </a>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Home;
