# Pino

Simple reproduction case where data are not sent if the TCP server wasn't available when the logger initialized.

## Install

    $ npm i

Open a terminal, and execute the following command:

    $ node index.js

You should see a bunch of error messages:

```
connect ECONNREFUSED 127.0.0.1:13370connect ECONNREFUSED 127.0.0.1:13370connect ECONNREFUSED 127.0.0.1:13370connect ECONNREFUSED 127.0.0.1:13370{"level":30,"time":1657290983798,"pid":57075,"hostname":"xb64","count":1,"msg":"Keep alive!"}
```

That's expected because the server isn't up and running.
Now, open a new terminal and start the TCP server using:

    $ node server.js

As you can see, `connect ECONNREFUSED 127.0.0.1:13370` does not show anymore but the server does not receive any data!

If you start the server first then it's working.
It's also working if you restart the server as long as the server was up and running when the logger was initialized.
