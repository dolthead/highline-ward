<template>
    <div>
        <span><slot></slot></span>
        <span>
            <a v-if="hymn.url" :href="baseUrl + hymn.url">{{ hymn.hymno }} {{ hymn.title }}</a>
            <span v-else>
              {{ hymn.hymno }} {{ hymn.title }}<br />
              <span style="margin-bottom:6px">(not available online)</span>
            </span>
            
        </span>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
import { Hymn, baseUrl } from '@/data/hymns';
const props = defineProps({
  hymn: {
      type: Object as PropType<Hymn>,
      required: true
    }
});
</script>

<style scoped>
div.table div {
  width: 100%;
}
div.table span:last-child {
  float: right;
}
div.table span:first-child {
  clear: both;
  float: left;
}
</style>