<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <img src="/assets/Christus.png" />
        <div class="title">Highline Ward</div>
        <div class="title">Sacrament Meeting</div>
        <div>October 31, 2021</div>
        <div class="table">
          <div></div>
          <div><span>Presiding</span><span>Bishop Glen Ostler</span></div>
          <!-- <div><span>Conducting</span><span>Brother Jason Manning</span></div> -->
          <div><span>Conducting</span><span>Brother Kayle Smith</span></div>

          <!-- <div><span>Music Director</span><span>Brother Ian Hopper</span></div> -->
          <div><span>Music Director</span><span>Sister Tatiana Bennett</span></div>

          <div><span>Organist</span><span>Sister Kaylene DeMasi</span></div>
          <!-- <div><span>Organist</span><span>Sister Shellie Vanfleet</span></div> -->
          <!-- <div><span>Organist</span><span>Brother Vince Butterfield</span></div> -->
          <!-- <div><span>Organist</span><span>Sister Rachel Broderick</span></div> -->

          <div></div>
          <div>
            <span>Opening Hymn</span>
            <span>
              <a
                href="https://www.churchofjesuschrist.org/music/library/hymns/the-spirit-of-god"
              >
                2 The Spirit of God
              </a>
            </span>
          </div>
          <div><span>Invocation</span><span>Sister Jen Stetser</span></div>
          <div></div>
          <div>
            <span>Ward & Stake Business</span>
          </div>
          <div></div>
          <div><i>The video feed for those at home will resume after the sacrament</i></div>
          <div></div>
          <div>
            <span>Sacrament Hymn</span>
            <span>
              <a
                href="https://www.churchofjesuschrist.org/music/library/hymns/o-god-the-eternal-father"
              >
                175 O God, the Eternal Father
              </a>
            </span>
          </div>
          <div><b>Administration of the Sacrament</b></div>
          <div></div>

          <div><span>Speaker</span><span>Kadence Aagard</span></div>
          <div><span>Speaker</span><span>Derek Adams</span></div>
          <div></div>

          <div>
            <span>Congregational Hymn</span>
            <span><a 
              href="https://www.churchofjesuschrist.org/music/library/hymns/let-the-holy-spirit-guide"
            >
              143 Let the Holy Spirit Guide
            </a></span>
          </div>
          <div></div>

          <!-- <div><span>Music Number</span><span>Come Thou Fount of Every Blessing</span></div>
          <div><span></span><span>Alyssa Gowans</span></div>
          <div></div> -->

          <!-- <div><span>Testimonies</span></div> -->

          <div><span>Speaker</span><span>Sister Cheri Allred</span></div>
          <div><span>Speaker</span><span>Brother Keith Allred</span></div>
          <div></div>

          <div>
            <span>Closing Hymn</span>
            <span>
              <a
                href="https://www.churchofjesuschrist.org/music/library/hymns/as-the-shadows-fall"
              >
                168 As the Shadows Fall
              </a>
            </span>
          </div>
          <!-- <div><span></span><span>(not available online)</span></div> -->

          <div><span>Benediction</span><span>Brother Dennis Adams</span></div>
        </div>

        <hr />

        <div>
          Upcoming events and leadership contact information are listed in
          <a
            href="https://docs.google.com/document/d/1F_U2DQ9kuWxroPF3CBEBRspZXj_uCbxQE7BxDJ91LwY/edit?usp=sharing"
          >
          the ward newsletter</a>.
        </div>
        <div></div>
        <div>
          Easily share this program with others by having them point their phone
          camera at this "QR code":
        </div>
        <div></div>
        <img src="/assets/qrcode.png" alt="QR code for this church program" />
        <div></div>
        <div>
          Those at home can 
          <a href="http://highlineward.org/sacrament">watch online</a>.
        </div>
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