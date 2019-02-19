# codenow

## Code relating to weekend 1 - 2/16-18

Guys, I wanted to fill in some stuff that we *almost* got to, namely the
JavaScript.  If you recall, the last thing we got running was a script
that popped up (or rather, dropped down) a message when you clicked on
a checkbox.  You should still have this in your code on Cloud9 but anyway
here is what was involved:

1. In `index.html`, we added a checkbox in our table rows, with this line:

```
    <td><input type="checkbox" onclick="showmessage()"></td>
```
  
  (We didn't use the name `showmessage` but I can't remember what we used; anyway
  we can use whatever we want, as long as it matches the name in `index.js`.)
  
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

The github repo you're in now has, in addition to this `README` file, three files: `index.html`,
`index.css`, and `index.js`.  It contains code for both of the above features, and also an
intermediate feature, a simpler form of 2.  I'm going to explain each.

We'll mostly be looking at the JavaScript file `index.js`, so first let's go through the HTML and
CSS files; they don't contain anything you haven't seen, so this will be quick.

# Setup - HTML and CSS

For the HTML, I just wrote a simple table, just like the ones you already have.  Each row contains
the checkbox, with the attribute `onclick=markdone(this)`.  This is just like what we did on Sunday,
except for the word `this` inside the parens; I'll explain that below.  In addition, at the bottom
there are two buttons.

The buttons have an `onclick` action.  This works
just like the `onclick` for checkboxes: when the button is clicked, a function defined in `index.js`
is called.  These buttons add a new to-do to the table.  The first is "silly" - it just adds a
fixed to-do; it's there just to start things off.  The real "add to-do" button lets the user say
what the todo is and give a number of pomodoros.  Again, this is just like the checkbox, except the
onclick action doesn't have `this` in the call.

That's it for the html file.  The CSS file is super simple: it contains one ruleset, which gives
formatting associated with the `done` class.  If we were to add `class="done"` to a `td`, it would
set the text in that table item to light gray; if we added it to a `tr`, it would make all the text
in that table row light gray.  (Naturally, you can and should keep all the ruleset you already have;
I just left everything with no formatting to make the example as simple as possible.)

## Marking a to-do as done

So, to mark a to-do as done, we just need to add `class="done"` to the `tr` tag; that is, when we
click on the checkbox, the JavaScript function (`markdone`) needs to find the `tr` tag containing
this checkbox and add `class="done"`.

A specific occurrence of a tag in an html document is called a "node".  In `index.html`, there are
two `tr` nodes, and we need to find the one that contains the clicked node.  (When we get to adding
new to-dos, we will be adding more `tr` nodes; like the current two, each will have three `td` nodes
within it, and the third of these `td` nodes will have a clickbox.)

The `onclick` attribute says `onclick=markdone(this)`, which means, "when this box is clicked, call
the `markdone` function, and pass this clickbox as an argument."  Just like a mathematical function
like sin or square-root has an argument, JavaScript functions also have them.  The `markdone` function
will look for a `tr` node containing a clickbox node somewhere within it, but it can't do anything unless
we tell it which clickbox node we're talking about.  In an HTML tag, `this` refers to that node.

Let's look at the `markdone` function in `index.js`.  It has divided the work into two steps, each of
which is accomplished by calling built-in JavaScript functions:

```
function markdone(cb) {
   var row = cb.closest("tr");
   row.classList.toggle("done");
}
```

`cb` is the name used in the function to refer to its argument.  When `markdone` is called from the
html, it passes `this` - i.e. the clickbox node - as the argument; `markdone` refers to that by the
name `cb` (for "clickbox").  (We can choose any name we want, but it should be a name that is
somewhat descriptive of what the name refers to.)  The two steps in this function are:

1. Find the containing `tr` node.  We do this by calling the built-in function `closest`, which
looks at the parents and grandparents, and so on, of the `cb` node until it finds one that has
tag `tr`.  We call that node `row` (again, an arbitrary name that we've chosen descriptively).
(`closest` really has two arguments - the node it is starting from, in this case `cb`,
and the tag it is looking for, `"tr"`.  But instead of calling `closest(cb, "tr")`, we use this
"dot notation" for cb; it would unfortunately be too much for us to explain this distinction here;
all I can say is that if you look online at documentation for the various built-in functions, it is
always clear from examples how they are called.)

2. Now that we have the `tr` node, we want to add `class = "done"`.  We do that by using two more
built-in JavaScript functions: `row.classList` gives the class attribute of the `row` node (which in
this case is empty), and `toggle` says add the class `done` to that list.  (Actually, it "toggles" it;
if the row already has `class="done"`, it removes it.)

The todo list currently looks like this:

<img src="html1.png" height=300>

And here is how it looks after clicking in the first row:

<img src="html2.png" height=200>

Just one more thing:  Remember you can look inside the browser and see the details of each HTML
node.  Right-click on the first row of the html and select `inspect`.  You'll see a new pane
containing something like this:

<img src="inspect2.png" height=300>

Note that the first `tr` node has the `done` class, just as if we had entered it by hand in
the HTML.  The second one is just the way it was in the HTML, with no class attribute.


