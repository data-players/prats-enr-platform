.DEFAULT_GOAL := help
.PHONY: docker-build docker-up build start log stop restart

DOCKER_COMPOSE=docker-compose -f docker-compose.yaml
path-cron = $(shell pwd)/compact-cron.sh

# Docker
docker-build:
	$(DOCKER_COMPOSE) build

docker-up:
	$(DOCKER_COMPOSE) up -d

docker-stop:
	$(DOCKER_COMPOSE) kill
	$(DOCKER_COMPOSE) rm -fv

docker-clean:
	$(DOCKER_COMPOSE) kill
	$(DOCKER_COMPOSE) rm -fv

docker-start:
	$(DOCKER_COMPOSE) up -d --force-recreate

remove-secure-dataset:
	sudo rm -rf data/fuseki/databases/localData/
	sudo rm -rf data/fuseki/databases/aclData/

docker-restart:
	$(DOCKER_COMPOSE) up -d --force-recreate

log:
	$(DOCKER_COMPOSE) logs -f middleware frontend fuseki traefik

compact: 
	$(DOCKER_COMPOSE) down && $(DOCKER_COMPOSE) up fuseki_compact && $(DOCKER_COMPOSE) up -d

start: docker-start

stop: docker-stop

restart: docker-restart

init :
	make install
	make bootstrap

install :
	npm install --prefix ./client
	npm install --prefix ./server

build:docker-build

prettier:
	npm run prettier --prefix ./client
	npm run prettier --prefix ./server

bootstrap:
	npm run bootstrap --prefix ./src/frontend
	npm run bootstrap --prefix ./src/middleware

set-compact-cron: 
	(crontab -l 2>/dev/null; echo "0 4 * * * $(path-cron) >> /tmp/cronlog.txt") | crontab -
