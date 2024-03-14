<script setup lang="ts">
// Types
import type { RouteLocationRaw } from 'vue-router'
import type { Prop } from 'vue'

export interface Item {
  title: string
  appendIcon?: string
  activeIcon?: string
  inactiveIcon?: string
  divider?: boolean
  to?: RouteLocationRaw
  href?: string
  disabled?: boolean
  onClick?: () => void
}

const props = defineProps({
  items: {
    type: Array,
    default: () => ([]),
  } as Prop<Item[]>,
  nav: Boolean,
})

function generateListItem(item: string | Item): any {
  const isString = typeof item === 'string'
  const isLink = !isString && (item.to || item.href)
  const isType = !isString && item.divider
  if (isString || (!isLink && !isType)) {
    const liItem = isString ? { title: item } : item

    const to = liItem.to

    return {
      title: liItem.title,
      emphasized: false,
      to,
      disabled: !route,
    }
  }
  else if (item.divider) {
    return {
      type: 'divider',
    }
  }

  return item
}

const opened = ref<string[]>([])

const computedItems = computed(() => props.items?.map((item) => {
  if (item.divider)
    return generateListItem(item)

  const title = t(item.title)
  return {
    ...generateListItem({
      title,
      to: item?.to,
      href: item?.href,
    }),
    onClick: item?.onClick,
    rel: item.href ? 'noopener noreferrer' : undefined,
    target: item.href ? '_blank' : undefined,
    prependIcon: opened.value.includes(title ?? '') ? item.activeIcon : item.inactiveIcon,
    value: title,
    appendIcon: item.appendIcon,
    disabled: item.disabled,
  }
}))
</script>

<template>
  <v-list
    v-model:opened="opened"
    :items="computedItems"
    :lines="false"
    :nav="nav"
    color="primary"
    density="compact"
    item-props
    slim
  />
</template>
