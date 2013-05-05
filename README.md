<h1>Totally BingedOUT!</h1>

<h2>Overview</h2>

JavaScript Application Architecture based on "mediator" pattern.

Stack

Serverside
NodeJS
Express
Jade
LESS
MongoDB

Client
headJS
jQuery
JS App Arch Framework (this repo)


Base > Core > Sandbox > Module
<pre>//TODO ad a service layer that works between Sandbox and Modules.</pre>


<h3>JavaScript Code Based on:</h3>
Concepts from Nicholas C. Zakas's, <a href="https://twitter.com/slicknet">@slicknet</a> presentation on "Scalable JavaScript Application Architecture".
<a href="http://youtu.be/mKouqShWI4o>Watch Presentation</a>

Tutsplus example code and the

<h3>HTML Boilerplate</h3>
Inspired from http://html5boilerplate.com/
<ul>
<li>Moderizr dropped for headJS</li>
<li>Twitter Bootstrap</li>
</ul>

TODO List
<pre>
//TODO Select JS templating service and create grunt build file.
//TODO Create a client data-attr service for hiding and show DOM elements. Refer to events.js for this.

Define observer pattern here
Define mediator pattern here

//TODO create settings to flag dev, prod, etc
//TODO App core should handle all errors.


API modules to consider making:
twitter
gmaps
dropbox

Create server side node stack

</pre>

<h2>Documentation</h2>
<h3>Making Modules</h3>
Modules never speak to other directly modules, routing though sandbox required.

Widgets
Boostrape.js supporting base UI widgets.