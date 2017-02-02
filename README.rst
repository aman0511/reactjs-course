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

* General
	- Always specify PropTypes on components as well as containers.
	http://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/
	- Do absolute imports only.

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
	- folder structure - <module>/<entity>/<containerName/<componentName>
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
	- Ensure that reducers always contains pure data. It don't have 

* Utils
	- Contains the utilities like Interceptor, configureStore, middlewares etc.

* Constants
	- It will wrap all constants from various modules.

* Selectors
	- Naming - <module>/<entity>.selector.js
	- Derived data from core state data.
	- Every kind of data derivation will result into selectors.
	- Don't ever access state.data instead use selector.getData.
	- These data derivations should be highly reusable.
	- directly access selectors in render from props and use it or they can be used in services.

* Services
	- Naming - <module>/<entity>.service.js
	- Services are simple JS functions which encapsulates Business logic and internally uses selectors.
	- e.g. user.service,js - getUserFromAPI
	Now getUserFromAPI encapsulates always must have business functionality e.g. call API and on success set to state via action or in error take certain other action.
