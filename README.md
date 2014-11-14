# konami.js
A JavaScript implementation of the [Konami code](http://en.wikipedia.org/wiki/Konami_Code). Keyboard only, no touch support.

## How to use

```javascript
konami(function () {
    // Do something when the Konami code has been entered...
});
```
or
```javascript
konami("http://www.konami.com/"); // Proceed to konami.com when the Konami code has been entered.
```

It's possible to add multiple callback functions by calling konami() multiple times:
```javascript
konami(myFirstCallback);
konami(mySecondCallback);
// Both myFirstCallback() and mySecondCallback() will get executed when the Konami code has been entered.
```
