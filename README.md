# Mardi film @mutualab

### Requirements
You must have docker installed on your machine

### Install the project
`make install`

Looks at your root folder with `ls`, if you have a `typings` folder, then you're good to go.

If it does not exists, run: `make typings`

### Access the application
`make start` will run a server in your terminal, which is reachable on [localhost:3000](http://loalhost:3000) or on external url (look at the logs provided by npm in your terminal)

##### Tips
You can install [docker-hostmanager](https://hub.docker.com/r/iamluc/docker-hostmanager/) in order to access the application with a custom and local domain name

If you use it, the application should be accessible [here](mardi.mardifilm_default)
