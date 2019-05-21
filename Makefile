CLIPBOARD = $(shell pbpaste)
.PHONY: all clean 

# Bootstrap on a clean box: make
all: node_modules public/index.html

node_modules: package.json
	npm install
	touch node_modules

public/index.html: node_modules
	brunch build

server:
	brunch watch --server

clean:
	rm -rf public

nuke: clean
	rm -rf node_modules

deploy: 
	brunch build
	now -p public

alias:
	now alias ${CLIPBOARD} choosepicnic.com
	now alias choosepicnic.com www.choosepicnic.com
