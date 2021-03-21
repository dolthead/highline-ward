<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <img src="/assets/Christus.png" />
        <div class="title">Highline Ward</div>
        <div class="title">Sacrament Meeting</div>
        <div>March 21, 2021</div>
        <div class="table">
          <div></div>
          <div><span>Presiding</span><span>Bishop Glen Ostler</span></div>
          <div><span>Conducting</span><span>Brother Jason Manning</span></div>
          <div><span>Chorister</span><span>Sister Sydney Lane</span></div>
          <div><span>Organist</span><span>Sister Shellie Vanfleet</span></div>
          <div></div>
          <div>
            <span>Opening Hymn</span>
            <span>
              <a
                href="https://www.churchofjesuschrist.org/music/library/hymns/rejoice-the-lord-is-king?lang=eng"
              >
                #66 Rejoice, the Lord is King!
              </a>
            </span>
          </div>
          <div><span>Invocation</span><span>Sister Kim Kunz</span></div>
          <div></div>
          <div>
            <span>Ward & Stake Business</span>
          </div>
          <div></div>
          <div><span>Speaker</span><span>Sister Andrea Mitchell</span></div>
          <div><span>Music number</span><span>Sister Tiffany Sackley</span></div>
          <div><span>High Council Speaker</span><span>Brother Nathan Dunford</span></div>
          <div></div>
          <div>
            <span>Closing Hymn</span>
            <span>
              <a
                href="https://www.churchofjesuschrist.org/music/library/hymns/hark-all-ye-nations?lang=eng"
              >
                #264 Hark All Ye Nations
              </a>
            </span>
          </div>
          <div><span>Benediction</span><span>Brother Matthew Nielsen</span></div>
          <div></div>
          <div><i>- End of broadcast -</i></div>
          <div></div>
          <div>
            <span>Sacrament Hymn</span>
            <span>
              <a
                href="https://www.churchofjesuschrist.org/music/library/hymns/he-died-the-great-redeemer-died?lang=eng"
              >
                #192 He Died! The Great Redeemer Died
              </a>
            </span>
          </div>
          <div>Administration of the Sacrament</div>
        </div>

        <hr />

        <div>
          Upcoming events and leadership contact information are listed in
          <a
            href="https://docs.google.com/document/d/1F_U2DQ9kuWxroPF3CBEBRspZXj_uCbxQE7BxDJ91LwY/edit?usp=sharing"
          >
            the ward newsletter</a
          >.
        </div>
        <div></div>
        <div>
          Easily share this program with others by having them point their phone
          camera at this "QR code":
        </div>
        <div></div>
        <img src="/assets/qrcode.png" alt="QR code for this church program" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
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
  font-size: 3.2vw;
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
hr {
  border-top: 1px navy solid;
  margin: 2em 0;
}
</style>