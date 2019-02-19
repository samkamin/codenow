# codenow

## Code relating to weekend 1 - 2/16-18

Guys, I wanted to fill in some stuff that we *almost* got to, namely the
JavaScript.  If you recall, the last thing we got running was a script
that popped up (or rather, dropped down) a message when you clicked on
a checkbox.  You may still have this in your code on Cloud9 but anyway
here is what was involved:

1. In `index.html`, we added a checkbox in our tables, with this line:

```
    <input type="checkbox" onclick="showmessage()">
```
  
  (We didn't call it `showmessage` but I can't remember what it was; anyway
  we can call it whatever we want.)
  
2. We added a file `index.js` that contained the following "function definition":

```
    function showmessage() {
       alert("Important message!");
    }
```

When we clicked on the checkbox, it "called" the `showmessage` function.  That
in turn called `alert`, which is a function built into JavaScript that pops up a message,
in this case containing `Important message`.  When the clickbox was clicked, the screen
popped up:

![Drop-down message box](screenshot1.png)


