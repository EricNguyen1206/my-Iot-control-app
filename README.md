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
  ├── app                   # App config store <br>
  │   ├── hooks.ts          # Export useAppReducer && useAppSelector <br>
  │   ├── rootSaga.ts       # Combile app side effects handler <br>
  │   └── store.ts          # Config store <br>
  ├── components            # App global components <br>
  │   ├── */index.ts        # Components code and export index.ts files <br>
  │   └── README.md         # Components documentation <br>
  ├── hooks                 # App global hooks <br>
  ├── models                # App data models <br>
  │   ├── */                # <br>
  │   ├── effects.ts        # Side effects handlers <br>
  │   │   ├── index.ts      # Model export <br>
  │   │   ├── reducers.ts   # Reducers code spliting <br>
  │   │   └── state.ts      # Define Model data fields and initial states <br>
  │   └── index.ts          # Define Model<> patterns <br>
  ├── pages                 # App pages <br>
  │   ├── */                # Page folder <br>
  │   │   ├── components    # Page's components (can be not reusable) <br>
  │   │   ├── hooks         # Page's hooks (implement logic of page here, can be not reusable) <br>
  │   │   ├── */.ts         # UI code <br>
  │   │   └── index.ts      # Export index.ts file <br>
  ├── routes                # Export app routes <br>
  ├── services              # App services <br>
  │   ├── axiosClient.ts    # Modify axios rules for services <br>
  │   ├── */.ts             # Modify services logic <br>
  │   ├── index.ts          # Export all services <br>
  │   └──  README.md        # Services documentation <br>
  ├── styles                # Global styles variables and mixins... <br>
  ├── utils                 # Global utilities function <br>
  ├── App.tsx               # App interface and routing <br>
  │... 
