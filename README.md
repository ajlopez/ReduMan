# ReduMan

Reducer manager, it can be used as a replace for switch in Redux reducers

## Installation

Via npm on Node:

```
npm install reduman
```

In your browser:
TBD

## Usage

Reference in your program
```javascript
var reduman = require('reduman');
```

Reference in your browser

TBD

Creating a reducer using fluent API:

```js
var reducer = reduman()
    .when({ type: INCREMENT }, function (state, action) ... )
    .when({ type: INCREMENT}, function (state, action) ... )
    .otherwise(function (state, action) .. );
    
// using with a Redux store
var store = createStore(reducer);
```

The default action (if no otherwise is specified) is to return the original state.

When you use an object as first argument to `when` the incoming data is matches (property by property usign `===`) with
that object.

When you use a simple value as first argument to `when` the incoming data is compared using `===` with that value.
Example, you can use strings or numbers as action values:

```
var reducer = reduman()
    .when("INCREMENT", function (state, action) ... )
    .when("DECREMENT", function (state, action) ... )
    .otherwise(function (state, action) .. );
```

New (version 0.0.2): if you use a simple value as first argument to `when`, the action
is accepted if it is a simple value equals to the argument value, or if the action is an object with 
a `type` property equals to that argument.

You can use a predicate function with signature (action) => boolean:

```
reduman().when(function (action) ...,  function (state, action) ...)
```

Compose reducers:

```
var reducer0 = redman()
    .when(...)
var reducer = reduman()
    .use(reducer0)    // add reducer0 to the chain at this point
    .when(...)
```

`reducer0` will be invoked during the process of an action. You can mix `use` with `when`.
In this way, a reducer can be build isolated of other reducers.


See tests for use examples.

## Samples

TBD

## Versions

- 0.0.1 Published
- 0.0.2 Published, filter by implicit type property
- 0.0.3 Published, using use to compose reducers

## Contribution

Feel free to [file issues](https://github.com/ajlopez/ReduMan) and submit
[pull requests](https://github.com/ajlopez/ReduMan/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

