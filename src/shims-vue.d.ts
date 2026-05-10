declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module '*.css' {
  const content: string
  export default content
}

declare module '@ionic/vue/css/*.css' {
  const content: string
  export default content
}

// declare module 'virtual:pwa-register/vue' {
//   import type { Ref } from 'vue'
//   import type { RegisterSWOptions } from 'vite-plugin-pwa/types'

//   export type { RegisterSWOptions }

//   export function useRegisterSW(options?: RegisterSWOptions): {
//     needRefresh: Ref<boolean>
//     offlineReady: Ref<boolean>
//     updateServiceWorker: (reloadPage?: boolean) => Promise<void>
//   }
// }
