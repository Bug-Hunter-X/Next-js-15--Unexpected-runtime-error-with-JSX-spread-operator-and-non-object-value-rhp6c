```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      {/* This will cause an error because it's using a JSX spread operator with a non-object value */}
      <MyComponent {...'invalid-value'}/>
    </div>
  );
}

function MyComponent({ prop }) {
  return <p>{prop}</p>;
}
```