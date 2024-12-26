# Next.js 15 JSX Spread Operator Bug

This repository demonstrates a subtle bug in Next.js 15 related to the JSX spread operator when used with a non-object value in component props. The error can be difficult to track down due to the lack of clear error messaging.

## Bug Description

The bug occurs when attempting to use the JSX spread syntax (`...`) with a non-object value (e.g., a string, number, or boolean) as a prop to a component. This results in a runtime error. The error message may not clearly identify the root cause, making it challenging to find the solution.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the error in the browser console.

## Solution

The solution is to ensure that you are only using the JSX spread operator with object values.  Check carefully that the values passed as props are indeed objects before using the spread operator.
