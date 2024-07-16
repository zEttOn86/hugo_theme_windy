.PHONY: dev
dev:
	hugo server -s ./exampleSite --minify --gc --themesDir ../..

.PHONY: check-lint
check-lint:
	npx prettier --check ./layouts

.PHONY: write-lint
write-lint:
	npx prettier --write ./layouts