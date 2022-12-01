import React from 'react';

const Blog = () => {
    return (
        <div className='mx-24 my-10'>
            <h2 className='text-4xl text-center font-bold my-5'>Some Important Topics</h2>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p> There are four main types of state you need to properly manage in your React app. <b>Local (UI) state – </b>Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <b>Global (UI) state – </b>Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. <b>Server state – </b>Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <b>URL state – </b> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between Javascript and NodeJs
                </div>
                <div className="collapse-content">
                    <p>JavaScript is a popular programming language utilized by nearly every online application developer. Finding a resource on the subject to work on JavaScript and conduct critical development is straightforward. Although Node JS is a JavaScript framework extension, it also has other unnamed features, such as a non-blocking running control system, essential for attaining business objectives. It may also be visible to a user who has signed in from a different approach for security reasons. When it comes to a comparison of nest js vs. express, both are node js components.  </p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does NodeJs handle multiple request at the same time
                </div>
                <div className="collapse-content">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

 </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;