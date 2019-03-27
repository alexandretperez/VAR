cd node-server
@echo:
@echo ======= Installing 'node-server' dependencies =======
call npm install

cd ../vue
@echo:
@echo ======= Installing 'vue' dependencies =======
call npm install

cd ../angular
@echo:
@echo ======= Installing 'angular' dependencies =======
call npm install

cd ../react
@echo:
@echo ======= Installing 'react' dependencies =======
call npm install

@echo:
@echo ======= ALL DEPENDENCIES WAS GET INSTALLED =======
timeout 4