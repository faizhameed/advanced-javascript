### why is promise has more priority that DOM api's

Promise was released later in JS, So in order to add this, Javascript created a high priority microtask, where this is handled. This is part of javascript not of webapi.
micro task Queue- This will be checked first before checking the usual Callback back Queue

so therefore setTimeout even though get resolved initially will have less priority than Call back queue
