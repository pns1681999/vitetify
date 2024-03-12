import { useNProgress } from '@vueuse/integrations/useNProgress'

const { progress } = useNProgress(null, {
  minimum: 0.1,
  easing: 'ease',
  speed: 500,
  showSpinner: true,
})

export function doneProgress() {
  progress.value = 1.0
}

export function startProgress() {
  progress.value = 0.1
}
