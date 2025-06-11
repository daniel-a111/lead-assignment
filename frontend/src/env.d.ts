// src/env.d.ts (or just env.d.ts in root)

/// <reference types="vite/client" />

declare module 'virtual:generated-pages' {
  import type { RouteRecordRaw } from 'vue-router'
  const routes: RouteRecordRaw[]
  export default routes
}
