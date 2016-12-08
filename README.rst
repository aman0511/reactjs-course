T2B Web skeleton with ReactJs

Required changes to use this skeleton :-
1) clone repo
2) Change folder name from skeleton to your <project name>
3) cd <project_name> Change all occurences of skeleton to <project_name>

To Run Project locally :- 
1) cd <project_name>
2) npm install
3) npm start

Conventions :-

* Modules 
	- These are business functionality modules.
	- Noun e.g. accounts, dashboard
	- camelCase convention for the directory names
	- CamelCase for file names

* Containers
	- One container per URL
	- It will only use components directly, no other HTML or CSS
	- folder structure - <module>/<entity>/<Action.jsx> e.g. masterData/country/List.jsx

* Components
	- This has to be truely dumb component.
	- Each component will have its CSS along with it.
	- folder structure - <module>/<entity>/<containerName/List>/<componentName>
	  e.g. masterData/country/List/componentName1.jsx
	  masterData/country/List/style.jsx
	- Follow state management from
	  http://brewhouse.io/blog/2015/03/24/best-practices-for-component-state-in-reactjs.html
	- core module contains generic Reusable components e.g. like Input, Checkbox etc.

* Actions
	- Naming - <module>/<entity>.actions.js
	  e.g. accounts/user.actions.js
	- each module will wrap its constants.js & actionTypes.js too

* Reducers:
	- Naming - <module>/<entity>.reducers.js
	- each module will wrap its index.js too

* Utils
	- Contains the utilities like Interceptor, configureStore, middlewares etc.

* Constants
	- It will wrap all constants from various modules.
