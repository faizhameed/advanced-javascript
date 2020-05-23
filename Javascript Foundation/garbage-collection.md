When javascript allocates memory. within a object we create an object and that object gets stored somewhere in the memory

It automatically clean the memory when the objects or variable in the function is not need for us

javascript automatically freeze up the memory that no longer needed
It gives a small sense of security that we need not worry about memory management

There is a chance of memory left

using something called mark and sweep algorithm

**Three types of memory leak**

- Global Variable
- Event Listeners
- Set Interval

Memory is limited, to write efficient code we have to be conscious not to have memory leaks, stackoverflow in our code
