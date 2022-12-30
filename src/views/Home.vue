<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <img :src="image.path" :alt="image.alt" />
        <div class="title">Highline Ward</div>
        <div class="title">Sacrament Meeting</div>
        <div>{{ sundate }}</div>
        <div class="table">
          <div></div>
          <div><span>Presiding</span><span>Bishop Glen Ostler</span></div>
          <!-- <div><span>Presiding</span><span>Brother Jason Manning</span></div> -->
          <!-- <div><span>Conducting</span><span>Brother Jason Manning</span></div> -->
          <div><span>Conducting</span><span>Bishop Glen Ostler</span></div>

          <!-- <div><span>Music Director</span><span>Sister Sherry Chapman</span></div> -->
          <div><span>Music Director</span><span>Sister Tatiana Bennett</span></div>
          <!-- <div><span>Music Director</span><span>Brother Michael Lambert</span></div> -->

          <!-- <div><span>Organist</span><span>Sister Kaylene DeMasi</span></div> -->
          <!-- <div><span>Organist</span><span>Sister Shellie Vanfleet</span></div> -->
          <div><span>Organist</span><span>Brother Vince Butterfield</span></div>
          <!-- <div><span>Organist</span><span>Sister Michele Eggleston</span></div> -->

          <div></div>
          <hymn-row :hymn="getHymn(215)">Opening Hymn</hymn-row>
          <div><span>Invocation</span><span>Brother Corwin Bennett</span></div>
          <div></div>

          <div>
            <span>Ward & Stake Items</span>
          </div>
          <div></div>
          <!-- <div><em>The video feed for those at home will resume after the sacrament</em></div>
          <div></div> -->

          <hymn-row :hymn="getHymn(188)">Sacrament Hymn</hymn-row>
          <div><strong>Administration of the Lord's Sacrament</strong></div>
          <div></div>

          <!-- <div><span>Testimonies</span></div>
          <div></div> -->

          <!-- <div><span>Youth Speakers</span><span>Parker Sackley</span></div>
          <div><span></span><span>Cale Sackley</span></div>
          <div></div> -->

          <div><span>Speaker</span><span>Brother Kayle Smith</span></div>
          <div></div>

          <div><span>Speaker</span><span>Brother Jason Manning</span></div>
          <div></div>

          <hymn-row :hymn="getHymn(308)">Congregational Hymn</hymn-row>
          <div></div>

          <!-- <div><span>Choir Number</span><span>Ward Choir</span></div>
          <div><em>Thanksgiving Hymn Medley</em></div>
          <div></div> -->

          <div><span>Speaker</span><span>Bishop Glen Ostler</span></div>
          <div></div>

          <hymn-row :hymn="getHymn(217)">Closing Hymn</hymn-row>
          <div><span>Benediction</span><span>Brother Roger Brock</span></div>
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
          <em>Happy New Year!</em>
          <!-- ♡ <em>Merry Christmas!</em> ♡ -->
        </div>
        <div></div> 
        
        <!-- <div>
          Sign up for tithing declarations with Bishop Ostler on
          <a href="https://docs.google.com/document/d/1oChAm94PKdQl9Gauts96YNsDHyNCNSZmnCxt43_Aujw/edit?usp=sharing">this sign-up sheet</a>.
        </div>
        <div></div> -->
        <div>
          Upcoming events and leadership contact information are listed on
          <a href="https://sites.google.com/view/highlineward/home">the ward website</a>.
        </div>
        <div></div>
        <div>
          Easily share this program with others by 
          <a href="sms:?&body=https://highline-ward.web.app">sending them a text message</a>,
          or by having them point their phone camera at this QR code:
        </div>
        <div></div>
        <img src="/assets/qrcode.png" alt="QR code for this church program" />
        <div></div>
        <div>
          The live stream is no longer available for general use. Bishop Ostler will give out the new link, as deemed necessary.
        </div>
        <div></div>
        <div class="smaller">
          This is not an official website of <a href="https://www.churchofjesuschrist.org/">The Church of Jesus Christ of Latter-day Saints</a>.
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
  nextSunday.setDate(nextSunday.getDate() - nextSunday.getDay() + (nextSunday.getDay() >= 2 ? 7 : 0)); // 2 = TUESDAY
  const sundate = nextSunday.toLocaleDateString(['en-US'], {month: 'long', day: '2-digit', year: 'numeric'});
  const isDecember = nextSunday.getMonth() === 11;
  const image = isDecember 
    ? { path: '/assets/maryjesus.jpeg', alt: 'Mary holding baby Jesus' }
    : { path: '/assets/Christus.png', alt: 'Statue of Christ' };
</script>

<style scoped>
  .container {
    margin: 20px;
    text-align: center;
    font-size: 3.2vw;
  }
  @media print {
    .container {
      font-size: 13pt;
      max-width: 70%;
      margin: 0 auto;
    }
    .container img:nth-child(1) {
      display: none;
    }
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
    font-size: 2.4vw;
  }
  .program div {
    margin: 6px;
  }
</style>