# Zedulr

Is a simple todo app. The main problem it is solving
is that whenever I am overwhelmed I want to split my time
with the list of stuff i want to do but a regular
to do app is too explicit, I just want an app to know
what I want to be doing and split the time available to
those tasks taking into account breaks and such.

## Abstract

I want it to be taking an input of what tasks I
want to be doing, and also how much time I have extrapolated
from an input of what time I start working and what time I stop,
which right now, would be; 12 hours probably from whatever time
I `wake up` or `start` if I want to procrastinate a bit before starting.

## Tech-stack

I'll probably have to save the data to a serverless MongoDB atlas, backed
by a serverless lambda function written in Go, but this for now i guess i could
live with just a javascript module that is really just an exported object since
I still don't know what the best data model looks like.

Obviously `html`, `css` and `js` for the front