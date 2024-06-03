<script lang="ts" setup>
import { IonContent, IonPage } from "@ionic/vue";
import HymnRow from "./HymnRow.vue";
import { getHymn } from '@/data/hymns';

const nextSunday = new Date();
nextSunday.setDate(nextSunday.getDate() - nextSunday.getDay() + (nextSunday.getDay() >= 2 ? 7 : 0)); // 2 = TUESDAY
const sundate = nextSunday.toLocaleDateString(['en-US'], { month: 'long', day: '2-digit', year: 'numeric' });
const isDecember = nextSunday.getMonth() === 11;
const image = isDecember
  ? { path: '/assets/maryjesus.jpeg', alt: 'Mary holding baby Jesus' }
  : { path: '/assets/Christus.png', alt: 'Statue of Christ' };
  // : { path: '/assets/ChristPraying.png', alt: 'Christ Kneeling in Prayer' };
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <img :src="image.path" :alt="image.alt" />
        <div class="title">Highline Ward</div>
        <div class="title">Sacrament Meeting</div>
        <!-- <div class="title"><em>Easter Sunday</em></div> -->
        <div>{{ sundate }}</div>
        <div class="table">
          <div></div>
          <!-- <div><span>Presiding</span><span>Bishop Glen Ostler</span></div> -->
          <div><span>Presiding</span><span>Brother Kayle Smith</span></div>

          <div><span>Conducting</span><span>Brother Brent Oakeson</span></div>

          <div><span>Music Director</span><span>Sister Carina Sackley</span></div>
          <!-- <div><span>Music Director</span><span>Sister LeAnn Ostler</span></div> -->

          <!-- <div><span>Organist</span><span>Sister Kaylene DeMasi</span></div> -->
          <div><span>Organist</span><span>Sister Shellie Vanfleet</span></div>

          <div></div>
          <hymn-row :hymn="getHymn(258)">Opening Hymn</hymn-row>
          <div><span>Invocation</span><span>Sister Rachel Broderick</span></div>
          <div></div>

          <div>
            <span>Ward & Stake Items</span>
          </div>
          <div></div>

          <hymn-row :hymn="getHymn(187)">Sacrament Hymn</hymn-row>
          <div><strong>Administration of the Lord's Sacrament</strong></div>
          <div></div>

          <div><span>Testimonies</span></div>
          <div></div>

          <!-- <div><span>Speakers</span><span>Gadd Webber</span></div>
          <div><span></span><span>Molly Webber</span></div>
          <div><span></span><span>Bryton Webber</span></div>
          <div></div> -->

          <!-- <div><span>Speaker</span><span>Sister Becky Jensen</span></div> -->
          <!-- <div><span></span><span>Tallin Kunz</span></div> -->
          <!-- <div></div> -->

          <!-- <hymn-row :hymn="getHymn(113)">Congregational Hymn</hymn-row>
          <div></div> -->
          <!-- <div><span>Ward Choir</span><span>Abide With Me; 'Tis Eventide</span></div>
          <div class="smaller"><em>Dir. by Brother Michael Lambert, Accomp. by Sister Shellie Vanfleet</em></div>
          <div></div> -->
          <!-- <div><span>Priesthood Musical Number</span><span>Rise Up, O Men of God</span></div>
          <div class="smaller"><em>Dir. by Brother Mike Lambert, Accomp. by Sister Shellie Vanfleet</em></div>
          <div></div> -->

          <!-- <div><span>Speaker</span><span>Brother Jesse Webber</span></div> -->
          <!-- <div><span></span><span>Mike Kunz</span></div> -->
          <!-- <div class="smaller"><span></span><span>Stake High Councilor</span></div> -->
          <!-- <div></div> -->

          <hymn-row :hymn="getHymn(308)">Closing Hymn</hymn-row>
          <div><span>Benediction</span><span>Brother Matt Broderick</span></div>

          <!-- <div></div>
          <div></div>
          <div><em>Linger longer today: visiting and snacks<br>in the pavilion after church.</em></div> -->

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
        <div class="announcements">
          <hr />

          <!-- <div>
            ♡ <em>Happy Mothers Day!</em> ♡
          </div>
          <div></div> -->

          <!-- <div>
            Sign up for tithing declarations with Bishop Ostler on
            <a href="https://docs.google.com/document/d/1oChAm94PKdQl9Gauts96YNsDHyNCNSZmnCxt43_Aujw/edit?usp=sharing">this sign-up sheet</a>.
          </div>
          <div></div> -->
          <div>
            Weekly lesson topics, upcoming events, and leadership contact information are available on
            <a href="https://sites.google.com/view/highlineward/home">the ward website</a>.
          </div>
          <div>
            <a href="https://sites.google.com/view/highlineward/home#h.6m577x3v5gg5" target="_blank">
              <button class="clean-button">View upcoming ward events →</button>
            </a>
          </div>
          <div></div>
          <div>
            The <a href="https://highlineward.org/sacrament">live stream for Sacrament meeting</a> requires a
            password, which can be requested from Bishop Ostler.
          </div>
          <div></div>
          <div>
            Easily share this program by
            <a href="sms:?&body=https://highline-ward.web.app">sending a text message</a>,
            or by having the person point their phone camera at this QR code:
          </div>
          <div></div>
          <img src="/assets/qrcode.png" alt="QR code for this church program" />
          <div></div>
          <div class="smaller">
            This is not an official website of <a href="https://www.churchofjesuschrist.org/">The Church of Jesus Christ
              of Latter-day Saints</a>.
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.container {
  margin: 20px;
  text-align: center;
  font-size: 3.0vw;
}

@media print {
  .container {
    font-size: 14pt;
    max-width: 75%;
    margin: 0 auto;
  }

  .container img:nth-child(1),
  .announcements {
    display: none;
  }
}

img {
  width: 30vw;
  /* width: 40vw; */
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
  clear: both;
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
  font-size: 2.6vw;
  margin-top: -1px;
  margin-bottom: 3px;
}

.program div {
  margin: 6px;
}

.clean-button {
  background: none;
  border: none;
  border-radius: 6px;
  padding: 6px;
  margin-top: 6px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
</style>