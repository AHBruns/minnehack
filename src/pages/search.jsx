import React, { useState } from "react";
import { useRouter } from "next/router";

export const Search = ({}) => {
  const [state, setState] = useState({
    userInput: ""
  });
  const router = useRouter();

  return (
    <>
      <div className="spacer" />
      <div className="container">
        <label className="input-label">What's your trash can's code?</label>
        <div className="field-and-button">
          <input
            type="text"
            className="input-field"
            value={state.userInput}
            onChange={e => setState({ userInput: e.target.value })}
          />
          <div style={{ width: "30px" }} />
          <button
            className="submit"
            onClick={() => {
              if (state.userInput === "") {
                alert("Please type in a valid trash can id");
              } else {
                router.push(`/trash-can/${state.userInput}`);
              }
            }}
          >
            Do It
          </button>
        </div>
      </div>
      <style jsx>{`
        .spacer {
          flex: 1;
        }
        .container {
          width: 500px;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .input-label {
          font-size: 3vh;
          padding: 30px;
        }
        .field-and-button {
          display: flex;
        }
        .submit {
          width: 150px;
          font-size: 4vh;
          border-radius: 10px;
          border: none;
          background-color: rgba(0, 150, 0, 0.5);
          box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
          color: black;
          cursor: pointer;
          border: 2px solid black;
        }
        .submit:hover {
          box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.5);
          transition: 0.3s ease all;
        }
        .submit:focus {
          outline: none;
        }
        .input-field {
          width: 350px;
          padding: 10px 30px;
          font-size: 4vh;
          border-radius: 10px;
          border: none;
          box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
          border: 2px solid black;
        }
        .input-field:focus {
          outline: none;
          box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.5);
          transition: 0.3s ease all;
        }
      `}</style>
    </>
  );
};

export default Search;
