@echo:
@echo ========================================
@echo This action will open 4 more consoles...
@echo ========================================
@echo:
timeout 5

cd node-server
start node app
timeout 2

cd ../vue
start npm start
timeout 10

cd ../angular
start npm start
timeout 15

cd ../react
start npm start

exit