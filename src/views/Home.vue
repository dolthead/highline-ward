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
          <!-- <div><span>Presiding</span><span>Brother Jason Manning</span></div> -->
          <div><span>Conducting</span><span>Brother Kayle Smith</span></div>

          <!-- <div><span>Music Director</span><span>Sister Sherry Chapman</span></div> -->
          <div><span>Music Director</span><span>Sister Tatiana Bennett</span></div>
          <!-- <div><span>Music Director</span><span>Brother Michael Lambert</span></div> -->

          <!-- <div><span>Organist</span><span>Sister Kaylene DeMasi</span></div> -->
          <div><span>Organist</span><span>Sister Shellie Vanfleet</span></div>
          <!-- <div><span>Organist</span><span>Brother Vince Butterfield</span></div> -->
          <!-- <div><span>Organist</span><span>Sister Rachel Broderick</span></div> -->

          <div></div>
          <hymn-row :hymn="getHymn(239)">Opening Hymn</hymn-row>
          <div><span>Invocation</span><span>TBD</span></div>
          <div></div>

          <div>
            <span>Ward & Stake Business</span>
          </div>
          <div></div>
          <div><i>The video feed for those at home will resume after the sacrament</i></div>
          <div></div>

          <hymn-row :hymn="getHymn(197)">Sacrament Hymn</hymn-row>
          <div><b>Administration of the Sacrament</b></div>
          <div></div>

          <!-- <div><span>Testimonies</span></div>
          <div></div> -->

          <!-- <div><span>Music Number</span><span>Primary Children</span></div>
          <div></div> -->

          <div><span>Youth Speakers</span><span>Xane Harmon</span></div>
          <div><span></span><span>Kylie Christensen</span></div>
          <div></div>
          <div><span>Speaker</span><span>Sister Laurin Irons</span></div>
          <!-- <div><span></span><span><em>Full-time Missionary</em></span></div> -->
          <div></div>

          <!-- <hymn-row :hymn="getHymn(30)">Congregational Hymn</hymn-row>
          <div></div> -->

          <div><span>Music Number</span><span>Ward Choir</span></div>
          <div><i>Let the Mountains Shout For Joy</i></div>
          <div></div>

          <div><span>Speaker</span><span>Brother Casey Irons</span></div>
          <!-- <div><span></span><span><em>High Councilor</em></span></div> -->
          <div></div>

          <hymn-row :hymn="getHymn(237)">Closing Hymn</hymn-row>
          <div><span>Benediction</span><span>TBD</span></div>
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

        <!-- <div>
          ♡ <i>Happy Father's Day!</i> ♡
        </div>
        <div></div>  -->
        
        <div>
          Upcoming events and leadership contact information are listed on
          <a href="http://highlineward.org">the ward website</a>.
        </div>
        <div></div>
        <div><b>Please have your children use the restroom before Primary.</b> If your child does need to use the restroom during the second hour, a parent or legal guardian will need to take them per handbook guidelines. A member of the Primary presidency will locate the parent when needed. Thank you for your cooperation with this!</div>
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
          <!-- <a href="https://zoom.us/j/94316361881">watch online</a>. -->
          <a href="http://highlineward.org/sacrament">watch online</a> 
          (now using <a href="https://zoom.us/j/94316361881">Zoom</a>).
        </div>
        <div></div>
        <div class="smaller">
          This is not an official website of The Church of Jesus Christ of Latter-day Saints.
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