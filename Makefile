NPM=docker-compose run node npm

install:
	$(NPM) install

typings:
	$(NPM) run typings install

start:
	$(NPM) start