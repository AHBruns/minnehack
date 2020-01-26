import React from "react";
import { useRouter } from "next/router";

export const Details = ({}) => {
  const router = useRouter();

  const fakeData = {
    breaks24hours: 23,
    breaks7days: 147,
    allBreaks: 23460,
    location: {
      latitude: 45,
      longitude: 45
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
      }
    ]
  };

  return (
    <>
      <div className="spacer" />
      <div className="das-app">
        <h1 className="trash-can-id">
          Trash Can: {router?.query?.id?.toUpperCase()}
        </h1>
        <div className="metrics">
          <div className="singletons"></div>
          <ol>
            {fakeData.breaks.map(b => {
              return <li>{JSON.stringify(b)}</li>;
            })}
          </ol>
        </div>
      </div>
      <style jsx>{`
        .spacer {
          flex: 1;
        }
        .das-app {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .trash-can-id {
          padding: 20px;
          border: 2px solid black;
          border-radius: 20px;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Details;
