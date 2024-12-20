import axios from "axios";
import React from "react";

export const Listrender = ({ todos, fetchTodos }) => {
  const deleteTodo = async (index) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirmed) {
      // console.log(todos)
      await axios.delete(
        `http://localhost:3000/api/delete/${todos[index]._id}`
      );
      fetchTodos();
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-center text-center mt-20">
      {todos.map((ele, index) => {
        return (
          <div
            key={index}
            className="card w-96 bg-base-300 shadow-xl m-2 mx-auto"
          >
            <div className="card-body p-5 flex flex-row justify-between items-center">
              <div className="flex items-center space-x-5">
                <p className={`text-lg text-start font-semibold`}>{ele.text}</p>
              </div>
              <button
                className="btn btn-accent"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
