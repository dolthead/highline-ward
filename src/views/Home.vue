<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <img src="/assets/Christus.png" alt="Statue of Christ" />
        <!-- <img src="/assets/maryjesus.jpeg" alt="Mary holding baby Jesus" /> -->
        <div class="title">Highline Ward</div>
        <div class="title">Sacrament Meeting</div>
        <div>{{ sundate }}</div>
        <div class="table">
          <div></div>
          <div><span>Presiding</span><span>Bishop Glen Ostler</span></div>
          <div><span>Conducting</span><span>Brother Kayle Smith</span></div>

          <div><span>Music Director</span><span>Sister Sherry Chapman</span></div>
          <!-- <div><span>Music Director</span><span>Sister Tatiana Bennett</span></div> -->
          <!-- <div><span>Music Director</span><span>Brother Ian Hopper</span></div> -->

          <div><span>Organist</span><span>Sister Kaylene DeMasi</span></div>
          <!-- <div><span>Organist</span><span>Sister Shellie Vanfleet</span></div> -->
          <!-- <div><span>Organist</span><span>Brother Vince Butterfield</span></div> -->
          <!-- <div><span>Organist</span><span>Sister Rachel Broderick</span></div> -->

          <div></div>
          <hymn-row :hymn="getHymn(83)">Opening Hymn</hymn-row>
          <div><span>Invocation</span><span>Sister Janette Park</span></div>
          <div></div>

          <div>
            <span>Ward & Stake Business</span>
          </div>
          <div></div>
          <div><i>The video feed for those at home will resume after the sacrament</i></div>
          <div></div>

          <hymn-row :hymn="getHymn(190)">Sacrament Hymn</hymn-row>
          <div><b>Administration of the Sacrament</b></div>
          <div></div>

          <div><span>Testimonies</span></div>
          <div></div>

          <!-- <div><span>Youth Speaker</span><span>Mary Hinton</span></div> -->
          <!-- <div><span>Speaker</span><span>Sister Dansi Davis</span></div> -->
          <!-- <div><span></span><span><em>Elders Quorum 2nd Counselor</em></span></div> -->
          <!-- <div></div> -->

          <!-- <hymn-row :hymn="getHymn(308)">Congregational Hymn</hymn-row>
          <div></div> -->

          <!-- <div><span>Music Number</span><span>My Shepherd Will Supply My Need</span></div>
          <div><span></span><span>Double Quartet</span></div>
          <div></div> -->

          <!-- <div><span>Speaker</span><span>Brother Matt Callister</span></div> -->
          <!-- <div><span></span><span><em>Stake High Counselor</em></span></div> -->
          <!-- <div></div> -->

          <hymn-row :hymn="getHymn(7)">Closing Hymn</hymn-row>

          <div><span>Benediction</span><span>Brother Jon Park</span></div>
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
          <a href="http://mywebcast.churchofjesuschrist.org/Events/paysonutahsouthstake">watch online</a>.
          <!-- <a href="http://highlineward.org/sacrament">watch online</a>. -->
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
  import { IonContent, IonPage } from "@ionic/vue";
  import HymnRow from "./HymnRow.vue";
  import { getHymn } from '@/data/hymns';

  const nextSunday = new Date();
  nextSunday.setDate(nextSunday.getDate() - nextSunday.getDay() + (nextSunday.getDay() ? 7 : 0));
  const sundate = nextSunday.toLocaleDateString(['en-US'], {month: 'long', day: '2-digit', year: 'numeric'})
</script>

<style scoped>
  .container {
    margin: 20px;
    text-align: center;
    font-size: 3.2vw;
  }
  img {
    width: 30vw;
    max-width: 250px;
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