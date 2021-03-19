<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <img src="/assets/Christus.png" />
        <div class="title">
          Highline Ward
        </div>
        <div class="title">
          Sacrament Meeting
        </div>
        <div>
          March 21, 2021
        </div>
        <div class="table">
          <div></div>
          <div>
            <span>Presiding</span>
            <span>Bishop Glen Ostler</span>
          </div>
          <div>
            <span>Conducting</span>
            <span>Brother Jason Manning</span>
          </div>
          <div></div>
          <div>
            <span>Opening Hymn</span>
            <span>#58 Come, Ye Children of the Lord</span>
          </div>
          <div>
            <span>Invocation</span>
            <span>Sister Kim Kunz</span>
          </div>
          <div></div>
          <div>
            <span>Ward & Stake Business</span>
          </div>
          <div></div>
          <div>
            <span>Speaker</span>
            <span>Sister Andrea Mitchell</span>
          </div>
          <div>
            <span>High Council Speaker</span>
            <span>Brother Gary Miyasaki</span>
          </div>
          <div></div>
          <div>
            <span>Closing Hymn</span>
            <span>#333 Hymn name</span>
          </div>
          <div>
            <span>Benediction</span>
            <span>Brother Matthew Nielsen</span>
          </div>
          <div></div>
          <div>- End of broadcast -</div>
          <div></div>
          <div>
            <span>Sacrament Hymn</span>
            <span>#333 Hymn name</span>
          </div>
          <div></div>
          <div>Administration of the Sacrament</div>
        </div>

        <hr>

        <div>
          <a href="">View the ward newsletter</a>
        </div>
           
        <div>
          Share this program with someone by having them point their phone camera at this "QR code":
        </div>
        <img src="/assets/qrcode.png" alt="QR code for this church program">

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage,  } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage,
  },
});
</script>

<style scoped>
.container {
  margin: 20px;
  text-align: center;
}
img {
  width: 30vw;
}
div {
  min-height: 1.6em;
}
.title {
  text-align: center;
  font-weight: bold;
}
/* div.table {
  display: table;
  width: 100%;
  margin: 5px 10px;
} */
div.table div {
  /* display: table-row; */
  width: 100%;
}
div.table span {
  /* display: table-cell; */
}
div.table span:last-child {
  float: right;
}
div.table span:first-child {
  clear: both;
  float: left;
}
</style>