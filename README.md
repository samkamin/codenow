# codenow

## Code relating to weekend 1 - 2/16-18

Guys, I wanted to fill in some stuff that we *almost* got to, namely the
JavaScript.  If you recall, the last thing we got running was a script
that popped up (or rather, dropped down) a message when you clicked on
a checkbox.  You may still have this in your code on Cloud9 but anyway
here is what was involved:

1. In `index.html`, we added a checkbox in our tables, with this line:

```
    <td><input type="checkbox" onclick="showmessage()"></td>
```
  
  (We didn't call it `showmessage` but I can't remember what name we used; anyway
  we can call it whatever we want, as long as it matches the name in `index.js`.)
  
2. We added a file `index.js` that contained the following "function definition":

```
    function showmessage() {
       alert("Important message!");
    }
```

When we clicked on the checkbox, it "called" the `showmessage` function.  That
in turn called `alert`, which is a function built into JavaScript that pops up a message,
in this case containing `Important message`.  When the clickbox was clicked, the message
popped up:

<img src="screenshot1.png" height=300>

So that's where we got to on Sunday; all of you got that working and it should be in your
Cloud9 files and also saved in your github repo.

The next step is trickier: we need to have the JavaScript code *make changes in the html*.
We'll do that next.  We want to do two things: (1) When we click on the checkbox in a row,
change the formatting of that row; I'm going to set the text color to gray.  This part we
started on but didn't finish.  (2) Add a new row to the table, i.e. a new todo.  We didn't
discuss that, but I've put it in here.






