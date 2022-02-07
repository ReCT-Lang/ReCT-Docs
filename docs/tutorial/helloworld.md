# Hello World

## `Hello, world!`

**Objective**: Write "Hello, world!" to the console. Easy!

`sys` is a package that's built into ReCT, which has a bunch of useful features. Like `Print()`!

Import a package like this:

```
package sys;
```

We can also `use` the package, so we dont have to add `sys::` before any `sys` function we use (e.g. `sys::Print()`).

```
package sys; use sys;
```

Now, all we have to do is print `Hello, world!` to the console!

```
package sys; use sys;

Print("Hello, world!");
```

Pretty easy, right?

Now run it with `rctc run` and you'll see `Hello, world!` in the console.

## Echo

**Objective**: Let's make something that repeats everything the user types.

Since we want this program to run indefinitely, we need to create an infinite loop.

```
package sys; use sys;

while (true)
{

}
```

> The braces on things like `while` and `if` statements commonly go on a new line, but you can keep it on the current line if you'd like!

Now we have to get the user input, and store it for later use. We need variables!

```
package sys; use sys;

while (true)
{
    var input <- Input();
}
```

Yep, that's how you assign a variable in ReCT! Unusual, right? Anyways, the `Input()` function (in the `sys` package) waits for input, and once the user has pressed enter, it saves it to the variable.

So all that's left is printing what the user typed.

```
package sys; use sys;

while (true)
{
    var input <- Input();
    Print(input);
}
```

And there you go, you've made your first two ReCT projects!