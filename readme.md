### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

## ======================== Answer to the Question =======================

### ANSWER 1:

*getElementById(): Selects a single element based on its unique *id* attribute.
*getElementsByClassName() : Selects all elements that have a specific class name.
*querySelector(): Selects the first element that matches CSS selector such as .className.
*querySelectorAll(): Selects all elements that match a CSS selector.

### ANSWER 2:

Creating the Element: document.createElement()
Inserting new Element: appendChild().

### ANSWER 3:

This means that if a user clicks a button inside a div, the click event will first trigger any event listeners on the button, then any listeners on the div, and finally listeners on the body or document.

### ANSWER 4:

Event delegation in JavaScript is an efficient pattern for handling events. When an event occurs on a child element, it 'bubbles up' to the parent, triggering the listener.

### ANSWER 5:

The preventDefault() method stops the default action.
The stopPropagation() method, on the other hand, prevents an event from bubbling up.
