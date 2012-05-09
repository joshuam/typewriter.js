typewriter.js
=============

A small js library that simulates a typewriter

Requires jQuery

Usage:

Initialize the typewriter and optionally provide the element you want to work with

    var tw = new TypeWriter('paper'); //paper is id of the element you want to 'type' on
    tw.type('typewriter.js', function(){
    //optional callback
    });

There are currently three methods that are built into typewriter:

*`type(word, [optional]callback)`
-> Type the word and fire an optional callback when typing is complete

*`setPaper(element)`
-> set the element you want to type on.

*`setCallback(callback)`
-> Modify the callback