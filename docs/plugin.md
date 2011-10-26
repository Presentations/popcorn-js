# plugin #

## Purpose ##

Creates a new Popcorn proto method of the name provided with the definitionObject.

All Popcorn instances will inherit this newly created method. See below for plugin authoring patterns; see the [Step-by-step instructions](http://popcornjs.org/creating-plugins) for creating Popcorn Plugins for detailed plugin authoring information.

## Options ##

* **pluginName** - will be the name for your newly created plugin.  Will also be the name of the instance method in which you plugin will be accessed through.
* **definitionObject** - an in which the setup, start, end, teardown functions will be implemented for the given plugin

## Use Cases ##

* Develop a plugin for a popular web service in order to extend additional content during a popcorn video

## Example ##

* create a basic plugin that simply does something on start and end [jsFiddle](http://jsfiddle.net/popcornjs/bEzge/)
