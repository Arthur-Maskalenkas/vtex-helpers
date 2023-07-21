```javascript
const obj1 = {"a": 1, "b": 2};
const obj2 = {"b": 2, "a": 1};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // false
```