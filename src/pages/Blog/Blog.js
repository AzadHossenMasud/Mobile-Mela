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
      <div className="divider"></div>

      <div>
        <h2 className=" text-xl my-3 font-semibold text-purple-600">
          {" "}
          Question : What is a unit test? Why should we write unit tests?
        </h2>
        <div className="text-justify text-gray-800 text-lg">
          <ul className=" list-disc ml-5">
            <li>
              <p className=" my-2">
                What is meant by unit test? A unit test is a way of testing a
                unit - the smallest piece of code that can be logically isolated
                in a system. In most programming languages, that is a function,
                a subroutine, a method or property. The isolated part of the
                definition is important.
              </p>
            </li>
            <li>
              <p className=" my-2">
                Unit testing ensures that all code meets quality standards
                before it's deployed. This ensures a reliable engineering
                environment where quality is paramount. Over the course of the
                product development life cycle, unit testing saves time and
                money, and helps developers write better code, more efficiently.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <h2 className=" text-xl my-3 font-semibold text-purple-600">
          {" "}
          Question : Give a overview on React vs. Angular vs. Vue.
        </h2>
        <div>
          <h3 className=" font-semibold text-lg text-purple-600">React</h3>
          <p className=" my-3">
            Facebook released React.js in March 2013 as a JavaScript library.
            Because React just provides one view, it is not appropriate for
            building an MVC architecture: you must solve the model and
            controller yourself. Besides this, there are only advantages and
            lots of advantages.
          </p>
          <h3 className=" font-semibold text-purple-600">Pros and Cons of React</h3>
          <h4 className="font-semibold text-purple-600"> Pros:</h4>
          <p className=" my-3">
            <ul className=" list-disc ml-5">
              <li>Fast loading of new data.</li>
              <li>One file contains both markup and logic (JSX).</li>
              <li>Enables the separation of data and presentation.</li>
              <li>
                It’s simple to get started and doesn’t take much practice.
              </li>
              <li>
                As a library, it doesn’t have that many presets, so it’s easy to
                learn.
              </li>
            </ul>
          </p>
          <h4 className="font-semibold my-3 text-purple-600"> Cons:</h4>
          <p className="my-3">
            <ul className="list-disc ml-5">
              <li> It is just a JavaScript library, not a framework.</li>
              <li>No possibility to implement MVC architecture.</li>
              <li>
                Frequently insufficient for developing a web app and
                necessitating the use of other libraries.
              </li>
              <li>
                Only worth using if web applications need to be highly
                interactive.
              </li>{" "}
            </ul>
          </p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg text-purple-600">Angular</h3>
          <p className=" my-3">
            AngularJS was developed in 2009 by Google. The first version was
            Angular.JS. Angular is currently known as a JavaScript framework.
            Obviously, all significant Google projects have been developed with
            Angular.
          </p>
          <h3 className=" font-semibold text-purple-600">Pros and Cons of React</h3>
          <h4 className="font-semibold text-purple-600"> Pros:</h4>
          <p className=" my-3">
            <ul className=" list-disc ml-5">
              <li> Allows MVC architecture.</li>
              <li>Good maintainability.</li>
              <li>Web applications built with Angular perform very well.</li>
              <li>Angular lets you manage microfrontend architecture</li>
              <li>
                Projects may now be developed, expanded, and generated more
                quickly thanks to technologies like the Angular-CLI command-line
                tool.
              </li>
              <li>
                Angular provides a basic framework for developing web
                applications and manages them without additional libraries.
              </li>
              <li>Easy unit and end-to-end testing.</li>
            </ul>
          </p>
          <h4 className="font-semibold my-3 text-purple-600"> Cons:</h4>
          <p className="my-3">
            <ul className="list-disc ml-5">
              <li> Reloads the complete HTML tags tree structure.</li>
              <li>Slow loading time due to the Ionic app.</li>
              <li>
                Because of the given framework, Angular is relatively stiff and
                inflexible.
              </li>
              <li>
                To work with Angular.js, you need a certain training period.
              </li>
              <li>
                If a user has deactivated JavaScript in the browser, using a
                JavaScript-based SPA is not possible. Furthermore, it does not
                always support outdated or unfamiliar browsers.
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg text-purple-600">Vue</h3>
          <p className=" my-3">
            Vue.js is a JavaScript-based progressive framework for creating
            single-page applications. It was created with scalability and
            incrementality in mind, as well as ease of integration with other
            view layer frameworks.
          </p>
          <h3 className=" font-semibold text-purple-600">Pros and Cons of React</h3>
          <h4 className="font-semibold text-purple-600"> Pros:</h4>
          <p className=" my-3">
            <ul className=" list-disc ml-5">
              <li>
                {" "}
                A list of tools and libraries (Vue.js official CLI, Development
                Tools, Vue Loader, Vue Router).
              </li>
              <li>Flexibility and simplicity in the utilization.</li>
              <li>Thorough documentation.</li>
              <li>
                Reusable in the terms of adding numerous reactive components to
                the existing code.
              </li>
              <li>The possibility of Component-Based Architecture (CBA)</li>
            </ul>
          </p>
          <h4 className="font-semibold my-3 text-purple-600"> Cons:</h4>
          <p className="my-3">
            <ul className="list-disc ml-5">
              <li> Limited community comparing to Angular and React</li>
              <li>The number of available plugins</li>
              <li>
                Language handicap because a large number of users are
                non-English speakers
              </li>
              <li>Overcomplications with flexibility</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
