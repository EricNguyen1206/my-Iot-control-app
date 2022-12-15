# Iot control react app

## Technical

-   Language: Typescript
-   State management: Redux (toolkit)
-   Midleware: Redux-saga
-   Routing: react-router-dom (v6)
-   UIKit framework: Material UI (use UI component only)
-   Style: Scss
-   Third party storage: Firbase Storage

## Folder stucture

src
|--app # App config store
| |--hooks.ts # Export useAppReducer && useAppSelector
| |--rootSaga.ts # Combile app side effects handler
| |--store.ts # Config store
|
|--components # App global components
| |--\*/index.ts # Components code and export index.ts files
| |--README.md # Components documentation
|
|--hooks # App global hooks
|
|--models # App data models
| |--\*/
| | |--effects.ts # Side effects handlers
| | |--index.ts # Model export
| | |--reducers.ts # Reducers code spliting
| | |--state.ts # Define Model data fields and initial states
| |--index.ts # Define Model<> patterns
|
|--pages # App pages
| |--\*/ # Page folder
| | |--components # Page's components (can be not reusable)
| | |--hooks # Page's hooks (implement logic of page here, can be not reusable)
| | |--\*/.ts # UI code
| | |--index.ts # Export index.ts file
|
|--routes # Export app routes
|
|--services # App services
| |--axiosClient.ts # Modify axios rules for services
| |--\*/.ts # Modify services logic
| |--index.ts # Export all services
| |--README.md # Services documentation
|
|--styles # Global styles variables and mixins...
|--utils # Global utilities function
|--App.tsx # App interface and routing
