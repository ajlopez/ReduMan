# ReduMan

Reducer manager, it can be used as a replace for switch in Redux reducers, WIP

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
    .when({ type: INCREMENT }, function (state, data) ... )
    .when({ type: INCREMENT}, function (state, data) ... )
    .otherwise(function (state, data) .. );
    
// using with a Redux store
var store = createStore(reducer);
```

The default action (if no otherwise is specified) is to return the original state.

You can use a predicate function with signature (data) => boolean:

```
reduman().when(function (data) ...,  function (state, data) ...)
```


## Samples

TBD

## References

TBD

## Contribution

Feel free to [file issues](https://github.com/ajlopez/ReduMan) and submit
[pull requests](https://github.com/ajlopez/ReduMan/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

