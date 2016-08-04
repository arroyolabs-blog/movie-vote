# Movie Vote

[![Build Status](https://travis-ci.org/arroyolabs-blog/movie-vote.svg?branch=master)](https://travis-ci.org/arroyolabs-blog/movie-vote)

Quick demo JS class and HTML to explore karma and Travis CI based heavily on Brad Braithwaite's [karma-seed example](https://github.com/bbraithwaite/karma-seed).

I wanted to create a very basic JS app, add some karma unit tests and use Travis CI to run these tests automatically.

## Basic Concepts

* Simple JS Class to allow a Upvoting and Downvoting a movie.
* KarmaJS tests to cover the JS Movie class and it's basic functions
* A TravisCI config file allowing us to run the Karma tests on every build
* Quick HTML Page to Demo the JS class

## Movie JS Class

A very basic class that models a single movie's popularity with votes. Seriously, this is a VERY simple example class meant for following along, not for real data modeling.

## Karma Tests

I created some very basic KarmaJS tests to test the basic functionality of the Movie class. We really only test three things: init, upvote and downvote.

## Travis CI

I wanted to show a very basic, and working, TravisCI instance where we could run the tests automatically. See the badge above for a link to my instance.


