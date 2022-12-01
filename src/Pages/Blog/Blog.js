import React from 'react';

const Blog = () => {
    return (
        <div className='mx-24 my-10'>
            <h2 className='text-4xl text-center font-bold my-5'>Some Important Topics</h2>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p> There are four main types of state you need to properly manage in your React app. <b>Local (UI) state – </b>Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <b>Global (UI) state – </b>Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. <b>Server state – </b>Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <b>URL state – </b> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. The prototype inheritance not only inherits the properties of the object, it also inherits the methods of the object. We can define a function in the parent class and call the function using the child class. We can also add a getter and setter method to the parent class which can be used by the child class.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. The key is: when you write test you take the perspective of the one that will consume your code. It forces you to have an holistic approach of the behavior to implement. This way ambiguities you get from requirements become obvious and are immediately taken account when code is written the first time.  </p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular. React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. Each framework is component-based and allows the rapid creation of UI features. However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them. React doesn’t enforce a specific project structure.React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework. The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework. Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

 </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;