import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-10 md:mb-24 mb-10'>
            <h1 className='text-5xl text-slate-500 font-semibold mb-5'>Blogs Section</h1>
            <p className='text-xl text-slate-500 mb-10 font-bold'>Some Important <span className='font-bold bg-purple-400 text-white pl-5 pr-5 p-1 rounded-lg'>Question & Answer</span></p>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                <div className="collapse-title text-xl font-medium bg-slate-300">
                    Q1# What is the purpose of react router?
                </div>
                <div className="collapse-content text-left">
                    <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p><br/>
                    <p>
                        React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                <div className="collapse-title text-xl font-medium bg-slate-300">
                    Q2# How does context API works? 
                </div>
                <div className="collapse-content text-left">
                    <p>Context allows passing data through the component tree without passing props down manually at every level.</p><br/>
                    <p>In React application, we passed data in a top-down approach via props. Sometimes it is inconvenient for certain types of props that are required by many components in the React application. Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-3/4 mx-auto">
                <div className="collapse-title text-xl font-medium bg-slate-300">
                    Q3# What is useRef?
                </div>
                <div className="collapse-content text-left">
                    <p className='font-semibold text-justify'>const refContainer = useRef(initialValue);</p>
                    <p>useRef is a React Hook. It can be used to store a mutable value that does not cause a re-render when updated. useRef only returns one item. It returns an Object called current.<br />
                    The useRef Hook can also be used to keep track of previous state values.<br />
                    Essentially, useRef is like a “box” that can hold a mutable value in its .current property.<br />
                    useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).<br />
                    However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;