import react from "react";
import Navbar from "./navbar";
import Axios from "axios";

const Close = () => {
  const [Tickets, setTickets] = react.useState([]);

  react.useEffect(() => {
    Axios.get("http://localhost:3002/ticket/open").then((res) => {
      setTickets(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <h1
        style={{
          textAlign: "center",
          color: "rgb(78, 124, 124)",
          fontSize: "56px",
          fontWeight: "800",
          margin: "0%",
        }}
      >
        Available Seats
      </h1>
      {Tickets.map((i, j) => {
        return (
          <div className="card bg-light-pink dib br3 ma2 pa3 grow bw2 shadow-5">
            <h5>S.No:</h5>
            <h2>{i}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Close;
