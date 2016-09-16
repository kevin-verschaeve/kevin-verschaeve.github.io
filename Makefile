COMPOSE=docker-compose
NPM=$(COMPOSE) run --rm tools npm

install:
	$(NPM) install

typings:
	$(NPM) run typings install

start:
	$(COMPOSE) up -d

clean:
	$(COMPOSE) stop
	$(COMPOSE) rm -fv

restart: clean start
