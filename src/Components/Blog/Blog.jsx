import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container blog'>
            <h3>When should you use context Api ?</h3>
            <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            <br />
            <h3>What is custom hooks in react ?</h3>
            <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
            <br />
            <h3>What is useRef and purpose of it ?</h3>
            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly</p>
            <br />
            <h3>What is use Memo and work ?</h3>
            <p>The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update. This can improve performance. The useMemo and useCallback Hooks are similar.</p>
        </div>
    );
};

export default Blog;