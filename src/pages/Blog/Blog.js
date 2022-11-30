import React from "react";

const Blog = () => {
  return (
    <div className=" w-full md:w-11/12 lg:w-10/12 mx-auto my-5">
      <h1 className=" text-center text-3xl font-semibold underline text-purple-800">
        Some Important Qustion about React
      </h1>

      <div className=" my-5">
        <h2 className=" text-xl my-3 font-semibold text-purple-600">
          {" "}
          Question : What are the different ways to manage a state in a React
          application?
        </h2>
        <div className=" text-justify text-gray-800 text-lg">
          <p>
            There are four main types of state you need to properly manage in
            your React apps:
          </p>
          <ol className="list-decimal ml-10 my-5">
            <li> Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ol>

          <p className=" my-2">
            <span className=" text-xl font-semibold text-purple-800">
              Local (UI) state –
            </span>{" "}
            Local state is data we manage in one or another component.
          </p>
          <p className=" my-2">
            <span className=" text-xl font-semibold text-purple-800">
              Global (UI) state –
            </span>{" "}
            Global state is data we manage across multiple components.
          </p>
          <p className=" my-2">
            <span className=" text-xl font-semibold text-purple-800">
              Server state –
            </span>{" "}
            Data that comes from an external server that must be integrated with
            our UI state.{" "}
          </p>
          <p className=" my-2">
            <span className=" text-xl font-semibold text-purple-800">
              URL state –{" "}
            </span>{" "}
            Data that exists on our URLs, including the pathname and query
            parameters.
          </p>
        </div>
      </div>
      <div className="divider"></div>

      <div>
        <h2 className=" text-xl my-3 font-semibold text-purple-600">
          {" "}
          Question : How does prototypical inheritance work?
        </h2>

        <div className=" text-justify text-gray-800 text-lg">
          <p className="my-2">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>

      <div>
      <h2 className=" text-xl my-3 font-semibold text-purple-600">
          {" "}
          Question : What is a unit test? Why should we write unit tests?
        </h2>
      
      </div>
    </div>
  );
};

export default Blog;
