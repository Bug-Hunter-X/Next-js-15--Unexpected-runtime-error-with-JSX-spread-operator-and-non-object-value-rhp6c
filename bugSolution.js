```javascript
// pages/index.js

export default function Home() {
  const myProps = { prop: 'correct value' }; //Corrected to use an object
  return (
    <div>
      <h1>Hello, world!</h1>
      <MyComponent {...myProps}/>
    </div>
  );
}

function MyComponent({ prop }) {
  return <p>{prop}</p>;
}
```