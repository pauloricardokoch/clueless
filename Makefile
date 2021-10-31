setup:
	@docker-compose build
	@docker-compose up -d

run:
	@docker-compose start

clean:
	@docker-compose down -v

	[ -d src/node_modules ] && rm -rf src/node_modules 
	[ -f src/yarn.lock ] && rm -rf src/yarn.lock

logs:
	@docker-compose logs -f

.PHONY: setup run clean logs