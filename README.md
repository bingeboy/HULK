<h1>HULK JS</h1>

<em>"PUNY HUMANS"</em>

<img src="http://www.leaderslair.com/marveluniverse/marvelfanfare29pic1.gif" style="float:right;">

<h2>Overview</h2>

JavaScript Application Architecture based on "mediator" pattern. Backend is running on MongoDB and Node.

<h4>Backend</h4>

<ul>
	<li>MongoDB
	<li>NodeJS + Express + Other NPMs see package.json for running list.
	<li>Templates w/Jade
	<li>LESS for CSS on top of Bootstrap
</ul>

<h4>Client</h4>
<ul>
	<li>headJS
	<li>jQuery
	<li>HULK Boiler Plate
	<li>HULK JS Controllers
	<li>UI Widgets from Bootstrap
</uL>

<h3>Clientside JavaScript Code Based on</h3>
Concepts from Nicholas C. Zakas's, <a href="https://twitter.com/slicknet">@slicknet</a> presentation on "Scalable JavaScript Application Architecture".
<a href="http://youtu.be/mKouqShWI4o">Watch Presentation</a>

Syntax of client side framework originally taken from Tutsplus.com examples and modified. 



<!-- API modules to consider making:
twitter
gmaps
dropbox -->
<h4>Flow</h4>
Base > Core > Sandbox > Module
<pre>//TODO ad a service layer that works between Sandbox and Modules.</pre>

TODO List
<pre>
//TODO Create a client data-attr service for hiding and show DOM elements. Refer to events.js for this.
//TODO create settings to flag dev, prod, etc
//TODO App core should handle all errors.
</pre>



<h2>Documentation</h2>
<h3>Making Modules</h3>
Modules never speak to other directly modules, routing though sandbox required.

<h3>MongoDB</h3>
MongoDB is being used with Mongoose. See app.js for connction script and DB schema.

<h4>Methods Workgin with DB</h4>
See "user" section of myApp. 
<ul>
<li>POST
<li>GET
<li>PUT
<li>DELETE
</ul>

Methods are all working.

<h4>Muliti Image Uploader</h4>
Mulit image uploader is working and optionally keeping original uploaded file name.
See /upload on running instance to view. All code for this section is in app.js and/or common folder in routes.


<footer>
The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</footer>
