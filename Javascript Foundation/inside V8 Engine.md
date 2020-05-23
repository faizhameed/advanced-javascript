## Interpreters and Compilers

Compiler is going to take time to get up running and but once its starts it going to work efficently
While Interpreters start running on the go, but the efficiency slows down slowly

So what if we compile the best of two JIT compiler. Best of both

How v8 engine does it to make the best of both

Initially the code gets send to Interpreter, called ignition takes the AST and spits out the byte code
then we have a profiler(monitor) , see how we can optimise the code.
If same code is run more time, some of the code is passed to the compiler
Then it give out optimized code.
This means execution speed of the javascript increases

JIT - Just in time

previous version compilers had two compilers now more optimise method is followed
