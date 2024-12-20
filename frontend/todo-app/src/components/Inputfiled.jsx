import React, { useState } from "react";
import axios from "axios";

export const Inputfiled = ({ fetchTodos }) => {
  const [txt, settxt] = useState("");

  const createtask = async () => {
    try {
      if (!txt || txt.trim() === "") {
        console.log("todo empty");
        return;
      }
      const response = await axios
        .post("http://localhost:3000/api/create", {
          text: txt,
        })
        .then((response) => {
          console.log(response);
        });
      console.log("created task");
      settxt("");
      fetchTodos();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-20 mr-10 ml-10 flex justify-center">
      <div className="flex flex-row space-x-5">
        <input
          type="text"
          value={txt}
          onChange={(e) => {
            settxt(e.target.value);
          }}
          placeholder="Write your todo..."
          className="input input-bordered w-80"
        />
        <button className="btn text-3xl bg-base-300" onClick={createtask}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="4" x2="12" y2="20" />
            <line x1="4" y1="12" x2="20" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
