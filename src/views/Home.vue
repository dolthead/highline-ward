<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <img src="/assets/Christus.png" />
        <!-- <img src="/assets/maryjesus.jpeg" /> -->
        <div class="title">Highline Ward</div>
        <div class="title">Sacrament Meeting</div>
        <div>January 16, 2022</div>
        <div class="table">
          <div></div>
          <div><span>Presiding</span><span>Bishop Glen Ostler</span></div>
          <div><span>Conducting</span><span>Brother Kayle Smith</span></div>

          <!-- <div><span>Music Director</span><span>Sister Sherry Chapman</span></div> -->
          <div><span>Music Director</span><span>Sister Tatiana Bennett</span></div>

          <!-- <div><span>Organist</span><span>Sister Kaylene DeMasi</span></div> -->
          <div><span>Organist</span><span>Sister Shellie Vanfleet</span></div>
          <!-- <div><span>Organist</span><span>Brother Vince Butterfield</span></div> -->
          <!-- <div><span>Organist</span><span>Sister Rachel Broderick</span></div> -->

          <div></div>
          <div>
            <span>Opening Hymn</span>
            <span>
              <a href="https://www.churchofjesuschrist.org/music/library/hymns/adam-ondi-ahman">
                49 Adam-ondi-Ahman
              </a>
            </span>
          </div>
          <div><span>Invocation</span><span>Sister Sherry Chapman</span></div>
          <!-- <div><span>Invocation</span><span>Sister Debbie Brock</span></div> -->
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
              <a href="https://www.churchofjesuschrist.org/music/library/hymns/in-memory-of-the-crucified">
                190 In Memory of the Crucified
              </a>
            </span>
          </div>
          <div><b>Administration of the Sacrament</b></div>
          <div></div>

          <!-- <div><span>Testimonies</span><span></span></div>
          <div></div> -->

          <!-- <div><span>Youth Speaker</span><span>TBD</span></div> -->
          <div><span>Speaker</span><span>Brother Judd Hansen</span></div>
          <div><span></span><span><i>Stake YM 2nd Counselor</i></span></div>
          <div></div>

          <div>
            <span>Congregational Hymn</span>
            <span>
              <a href="https://www.churchofjesuschrist.org/music/library/hymns/does-the-journey-seem-long">
                127 Does the Journey Seem Long?
              </a>
            </span>
          </div>
          <div></div>

          <!-- <div><span>Music Number</span><span>I Feel My Savior's Love</span></div>
          <div><span></span><span>Sister Tiffany Sackley & Hailey Peay</span></div>
          <div></div> -->

          <div><span>Speaker</span><span>Brother Mike Kunz</span></div>
          <div><span></span><span><i>Stake High Councilor</i></span></div>
          <div></div>


          <div>
            <span>Closing Hymn</span>
            <span style='text-align: right;'>
              <!-- <a href="" @click.stop.prevent="scrollMe"> -->
              <a href="https://www.churchofjesuschrist.org/music/library/hymns/the-day-dawn-is-breaking">
                52 The Day Dawn Is Breaking
                <!-- <br /><span style="margin-bottom:6px">(not available online)</span> -->
              </a>
            </span>
          </div>

          <div><span>Benediction</span><span>Brother Roger Brock</span></div>
          <!-- <div><span>Benediction</span><span>Brother Joseph Chapman</span></div> -->
        </div>

        <!-- <hr id="music" />
<pre>
"My Own Sacred Grove"
...
I will find my own sacred grove.
</pre>
<a href="https://www.angiekillian.com/shop?Collection=My+Own+Sacred+Grove&page=3" class="smaller">
  ©2021 by Angie Killian Music | All Rights Reserved.
</a> -->
        <hr />

        <div>
          Upcoming events and leadership contact information are listed in
          <a href="https://docs.google.com/document/d/1F_U2DQ9kuWxroPF3CBEBRspZXj_uCbxQE7BxDJ91LwY/edit?usp=sharing">
            the ward newsletter
          </a>.
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
          <!-- <a href="http://mywebcast.churchofjesuschrist.org/Events/paysonutahsouthstake">watch online</a>. -->
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
  // setup() {
  //   const scrollMe = () => {
  //       document.querySelector('#music')?.scrollIntoView({
  //           behavior: 'smooth'
  //       });
  //   };
  //   return {
  //     scrollMe
  //   }
  // }
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
pre {
  font-family: Roboto, "Helvetica Neue", sans-serif;
}
.smaller {
  font-size: x-small;
}
.program div {
  margin: 6px;
}
</style>