/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
