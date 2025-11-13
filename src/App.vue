<template>
  <ion-app>
    <!-- <ion-router-outlet /> -->
  </ion-app>
</template>

<script lang="ts">
// import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    // IonRouterOutlet
  }
});

// forward user to https://docs.google.com/document/d/18TmnGSwRE5N31qJU0qVItQTTnFHnWz6HKm6WSBFR9qk/edit?usp=sharing
window.location.href = 'https://docs.google.com/document/d/18TmnGSwRE5N31qJU0qVItQTTnFHnWz6HKm6WSBFR9qk/edit?usp=sharing';
</script>