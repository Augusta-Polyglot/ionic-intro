# Getting Started with Ionic

This is a base repository for getting started with the [Ionic](http://ionicframework.com/) framework.

The project will build a small interactive chat application using [Firebase](https://www.firebase.com/) that will allow
users to chat in real time.

## Vagrant Setup
If you don't already, you should have [Vagrant](https://www.vagrantup.com/) and [Virtual Box](https://www.virtualbox.org/)
installed.

Open a command prompt to the directory you cloned this repository to and type `vagrant up` to load the vagrant box for
this project.

Then type `vagrant ssh` to load up a command prompt to the machine with the entire stack already installed.

## Preview the Project
While ssh'd into your vagrant machine, go to the directory `/vagrant/ChatApp` and type `ionic serve`

Then, open a browser window to [http://localhost:8100/](http://localhost:8100) and this should show the Ionic project
as you're working on it!

## Things we are covering in this project
1. Angular JS Basics
  * Routing
  * Controllers
  * Services
2. Basic Ionic Components
3. Installing an APK on an Android device

## Challenges
1. Add validation so we don't send blank data to the server.
2. Add Emoji support
  * http://www.emojione.com/developers
3. Make the app show a gravatar image if the name is an e-mail address
  * Just check for something simple like the existence of @ and . in the name.
4. Alter the firebase service to store and retrieve a timestamp for messages

