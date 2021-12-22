# TODO: NPM_AUTH_TOKEN moet in .npmrc opgenomen worden. Gebruik nu nog hardcoding

build:
	docker build -f Dockerfile.builder --build-arg NPM_AUTH_TOKEN -t web3 .

runtime: 
	docker build -f Dockerfile.runtime --build-arg NPM_AUTH_TOKEN -t web3run .

run: 
	docker run --rm -p 80:3000 --name web3test web3run 

publish:
	docker tag web3run  terraformtestcontainerregistry.azurecr.io/oslo2/webuniversum3:0.0.2
	docker push terraformtestcontainerregistry.azurecr.io/oslo2/webuniversum3:0.0.2 

