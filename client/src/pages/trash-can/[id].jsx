import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";

const getDescriptor = length => {
  return length > 300 ? "large" : length > 200 ? "medium sized" : "small";
};

// 5e2d3c5cd4b21d97d25ddd73

export const Details = ({}) => {
  const router = useRouter();
  const [data, setData] = useState(undefined);
  const [otherCans, setOtherCans] = useState([]);
  useEffect(() => {
    (async () => {
      if (router.query.id === undefined) return;
      const resp = await axios.get(`http://127.0.0.1:5000/${router.query.id}`, {
        headers: { "Access-Control-Allow-Origin": "*" }
      });
      setData(resp.data);
      setViewport({
        ...viewport,
        latitude: resp.data.Location[0],
        longitude: resp.data.Location[1]
      });
    })();
  }, [router.query.id]);
  useEffect(() => {
    setInterval(async () => {
      console.log("running interval");
      // console.log(otherCans, data);
      try {
        if (router.query.id === undefined) return;
        const resp = await axios.get(
          `http://127.0.0.1:5000/${router.query.id}`,
          {
            headers: { "Access-Control-Allow-Origin": "*" }
          }
        );
        setData(resp.data);
        const resp2 = await axios.get(`http://127.0.0.1:5000/all`, {
          headers: { "Access-Control-Allow-Origin": "*" }
        });
        console.log(resp2.data);
        setOtherCans(resp2.data.data);
      } catch (err) {
        console.log(err);
      }
    }, 2000);
  }, [router.query.id]);

  const [isMinimized, setIsMinimized] = useState(false);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 5
  });
  const TOKEN =
    "pk.eyJ1IjoidG9wbCIsImEiOiJjazUycjRteXkwMHQwM2tyNXlyZWV6c21mIn0.qa9ZJMXqGBgfT--iIqn80w";

  if (data === undefined) return <div>loading</div>;

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "0",
          filter: !isMinimized ? "blur(2px)" : ""
        }}
      >
        <ReactMapGL
          {...viewport}
          onViewportChange={setViewport}
          mapboxApiAccessToken={TOKEN}
        >
          {otherCans.map((can, _) => (
            <Marker
              key={JSON.stringify(can)}
              latitude={can.Location[0]}
              longitude={can.Location[1]}
              offsetTop={-34}
              offsetLeft={-14}
            >
              <p
                style={{
                  filter: "",
                  fontSize: "3vh",
                  width: "28px",
                  height: "34px",
                  cursor: "pointer",
                  ...(isMinimized && can.Full
                    ? {
                        filter:
                          "drop-shadow(0 2px 5px rgba(150, 0, 0, 0.5)) drop-shadow(0 0px 2px rgba(150, 0, 0, 0.75))"
                      }
                    : isMinimized
                    ? {
                        filter:
                          "drop-shadow(0 2px 5px rgba(0, 150, 0, 0.5)) drop-shadow(0 0px 2px rgba(0, 150, 0, 0.75))"
                      }
                    : {})
                }}
                onClick={() => {
                  console.log(can._id);
                  router.push(`/trash-can/${can._id["$oid"]}`);
                }}
              >
                🗑
              </p>
            </Marker>
          ))}
        </ReactMapGL>
      </div>
      <div className="spacer" />
      {!isMinimized && (
        <>
          <p
            style={{
              fontSize: "2.5vh",
              zIndex: "1",
              margin: "0",
              margin: "auto",
              cursor: "pointer",
              padding: "10px",
              border: "solid 2px black",
              marginBottom: "10px",
              borderRadius: "10px",
              boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.25)",
              backgroundColor: "rgba(0, 150, 0, 0.5)"
            }}
            onClick={e => setIsMinimized(true)}
          >
            Minimize
          </p>
          <div className="das-app" style={{ zIndex: "1" }}>
            <h1 className="trash-can-id">
              Trash Can: {router?.query?.id?.toUpperCase()}
            </h1>
            <div className="metrics">
              <div className="singletons">
                <h1 className="heading">Metrics</h1>
                <div className="metrics-wrapper">
                  <h2 className="breaks-24-hours metric">
                    Last 24 Hours:{" "}
                    {/* {data["Breaks in 24 Hours"]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                  </h2>
                  <div className="metric-spacer" />
                  <h2 className="breaks-7-days metric">
                    Last 7 Days:{" "}
                    {/* {data["Breaks in 7 Days"]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                  </h2>
                  <div className="metric-spacer" />
                  <h2 className="all-breaks metric">
                    Total:{" "}
                    {data.Breaks.length
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h2>
                  {/* <div className="metric-spacer" />
                  <h2 className="left-full metric">
                    Time Left Full: {fakeData.timeLeftFull}s
                  </h2> */}
                </div>
              </div>
              <div style={{ width: "30px" }} />
              <div className="breaks">
                <h1 className="heading">Breaks</h1>
                <ol className="list">
                  {data.Breaks.map((b, i) => {
                    return (
                      <li className="line-item" key={i}>
                        Something {getDescriptor(b[1])} was thrown away on{" "}
                        {new Date(b[0]).toDateString()}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </>
      )}
      {isMinimized && (
        <>
          <p
            style={{
              fontSize: "2.5vh",
              zIndex: "1",
              margin: "0",
              margin: "auto",
              cursor: "pointer",
              padding: "10px",
              border: "solid 2px black",
              marginBottom: "10px",
              borderRadius: "10px",
              boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.25)",
              backgroundColor: "rgba(0, 150, 0, 0.5)",
              position: "absolute",
              top: "100px",
              left: "15px"
            }}
            onClick={e => setIsMinimized(false)}
          >
            Maximize
          </p>
        </>
      )}
      <style jsx>{`
        .spacer {
          flex: 1;
        }
        .metric-spacer {
          height: 20px;
        }
        .das-app {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 750px;
          margin: auto;
          background-color: rgba(0, 150, 0, 0.5);
          padding: 30px;
          border-radius: 20px;
          border: 2px solid black;
        }
        .metric {
          margin: 0;
        }
        .heading {
          margin: 10px;
          margin-bottom: 0;
        }
        .trash-can-id {
          padding: 20px;
          border-bottom: 4px solid black;
          align-self: flex-start;
          margin: auto;
          margin-bottom: 30px;
          width: calc(100% - 40px);
        }
        .list {
          padding: 0;
          margin: 0;
          max-height: 310px;
          overflow: scroll;
          border-bottom: 4px solid black;
          border-top: 4px solid black;
        }
        .metrics {
          width: 100%;
          display: flex;
        }
        .line-item {
          padding: 10px;
          border: 2px solid black;
          border-radius: 10px;
          margin: 10px;
          list-style-type: none;
        }
        .breaks {
          flex: 1;
        }
        .metrics-wrapper {
          border: 2px solid black;
          padding: 20px;
          border-radius: 20px;
        }
      `}</style>
    </>
  );
};

export default Details;
