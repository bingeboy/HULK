Overview

Note this is a dated version of readme.MD find the full version here:
https://github.com/bingeboy/HULK/blob/master/README.md

JavaScript Application Architecture based on "mediator" pattern. Backend is running on MongoDB and Node.

Backend

MongoDB
NodeJS + Express + Other NPMs see package.json for running list.
Templates w/Jade
LESS for CSS on top of Bootstrap
Client

headJS
jQuery
HULK Boiler Plate
HULK JS Controllers
UI Widgets from Bootstrap
Clientside JavaScript Code Based on

Concepts from Nicholas C. Zakas's, @slicknet presentation on "Scalable JavaScript Application Architecture". Watch Presentation

Syntax of client side framework originally taken from Tutsplus.com examples and modified.

Flow

Base > Core > Sandbox > Module

//TODO ad a service layer that works between Sandbox and Modules.
TODO List

//TODO Create a client data-attr service for hiding and show DOM elements. Refer to events.js for this.
//TODO create settings to flag dev, prod, etc
//TODO App core should handle all errors.
Documentation

Making Modules

Modules never speak to other directly modules, routing though sandbox required.

MongoDB

MongoDB is being used with Mongoose. See app.js for connction script and DB schema.

Methods Workgin with DB

See "user" section of myApp.

POST
GET
PUT
DELETE
Methods are all working.

Muliti Image Uploader

Mulit image uploader is working and optionally keeping original uploaded file name. See /upload on running instance to view. All code for this section is in app.js and/or common folder in routes.

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

