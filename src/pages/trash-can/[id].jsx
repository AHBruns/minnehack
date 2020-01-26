import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";

const getDescriptor = length => {
  return length > 300 ? "large" : length > 200 ? "medium sized" : "small";
};

export const Details = ({}) => {
  const router = useRouter();
  const fakeData = {
    breaks24hours: 23,
    breaks7days: 147,
    allBreaks: 23460,
    timeLeftFull: 2354,
    location: {
      latitude: 44.9728205,
      longitude: -93.2364423
    },
    breaks: [
      {
        timestamp: 1244534,
        length: 300
      },
      {
        timestamp: 1243534,
        length: 256
      },
      {
        timestamp: 1244514,
        length: 290
      },
      {
        timestamp: 1244534,
        length: 300
      },
      {
        timestamp: 1243534,
        length: 256
      },
      {
        timestamp: 1244514,
        length: 290
      },
      {
        timestamp: 1244534,
        length: 300
      },
      {
        timestamp: 1243534,
        length: 256
      },
      {
        timestamp: 1244514,
        length: 290
      },
      {
        timestamp: 1244534,
        length: 300
      },
      {
        timestamp: 1243534,
        length: 256
      },
      {
        timestamp: 1244514,
        length: 290
      }
    ]
  };
  const fakeCoordinates = [
    {
      latitude: 44.9728205,
      longitude: -93.2364423
    },
    {
      latitude: -71,
      longitude: 44
    },
    {
      latitude: -71,
      longitude: 18
    },
    {
      latitude: -84,
      longitude: -1
    },
    {
      latitude: 50,
      longitude: 8
    },
    {
      latitude: 64,
      longitude: -47
    },
    {
      latitude: 51,
      longitude: 3
    },
    {
      latitude: 26,
      longitude: 82
    },
    {
      latitude: -60,
      longitude: 8
    },
    {
      latitude: -42,
      longitude: -63
    },
    {
      latitude: 69,
      longitude: -9
    }
  ];
  // const [addrStrings, setAddrStrings] = useState([]);
  // useEffect(() => {
  //   setAddrStrings(
  //     fakeCoordinates.map(async cords => {
  //       const resp = await axios.get(
  //         `https://geocode.xyz/${cords.latitude},${cords.longitude}?geoit=json`
  //       );
  //       const jsonResp = resp.data;
  //       return `${jsonResp?.alt?.loc[0]?.stnumber} ${jsonResp?.alt?.loc[0]?.staddress}, ${jsonResp?.alt?.loc[0]?.city} ${jsonResp?.alt?.loc[0]?.prov}`;
  //     })
  //   );
  // }, []);
  const [isMinimized, setIsMinimized] = useState(false);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: fakeData.location.latitude,
    longitude: fakeData.location.longitude,
    zoom: 5
  });
  const TOKEN =
    "pk.eyJ1IjoidG9wbCIsImEiOiJjazUycjRteXkwMHQwM2tyNXlyZWV6c21mIn0.qa9ZJMXqGBgfT--iIqn80w";

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
          {fakeCoordinates.map((cords, _) => (
            <Marker
              latitude={cords.latitude}
              longitude={cords.longitude}
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
                  ...(isMinimized
                    ? {
                        filter:
                          "drop-shadow(0 2px 5px rgba(0, 150, 0, 0.5)) drop-shadow(0 0px 2px rgba(0, 150, 0, 0.75))"
                      }
                    : {})
                }}
                onClick={async () => {
                  const resp = (
                    await axios.get(
                      `https://geocode.xyz/${cords.latitude},${cords.longitude}?geoit=json`
                    )
                  ).data;
                  alert(
                    `This trash can's location is: ${resp.stnumber} ${resp.staddress}`
                  );
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
                    {fakeData.breaks24hours
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h2>
                  <div className="metric-spacer" />
                  <h2 className="breaks-7-days metric">
                    Last 7 Days:{" "}
                    {fakeData.breaks7days
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h2>
                  <div className="metric-spacer" />

                  <h2 className="all-breaks metric">
                    Total:{" "}
                    {fakeData.allBreaks
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h2>
                  <div className="metric-spacer" />
                  <h2 className="left-full metric">
                    Time Left Full: {fakeData.timeLeftFull}s
                  </h2>
                </div>
              </div>
              <div style={{ width: "30px" }} />
              <div className="breaks">
                <h1 className="heading">Breaks</h1>
                <ol className="list">
                  {fakeData.breaks.map(b => {
                    return (
                      <li className="line-item">
                        Something {getDescriptor(b.length)} was thrown away on{" "}
                        {new Date(b.timestamp).toDateString()}
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
