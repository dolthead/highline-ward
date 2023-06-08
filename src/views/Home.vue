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
          <!-- <div><span>Presiding</span><span>President Matthew Hinton</span></div> -->
          <!-- <div><span>Presiding</span><span>Bishop Glen Ostler</span></div> -->
          <div><span>Presiding</span><span>Brother Kayle Smith</span></div>
          
          <div><span>Conducting</span><span>Brother Brent Oakeson</span></div>

          <!-- <div><span>Music Director</span><span>Sister Sherry Chapman</span></div> -->
          <div><span>Music Director</span><span>Sister Tatiana Bennett</span></div>
          <!-- <div><span>Music Director</span><span>Brother Michael Lambert</span></div> -->

          <div><span>Organist</span><span>Sister Kaylene DeMasi</span></div>
          <!-- <div><span>Organist</span><span>Sister Shellie Vanfleet</span></div> -->
          <!-- <div><span>Organist</span><span>Brother Vince Butterfield</span></div> -->

          <div></div>
          <hymn-row :hymn="getHymn(302)">Opening Hymn</hymn-row>
          <div><span>Invocation</span><span>TBD</span></div>
          <div></div>

          <div>
            <span>Ward & Stake Items</span>
          </div>
          <div></div>
          <!-- <div><em>The video feed for those at home will resume after the sacrament</em></div>
          <div></div> -->

          <hymn-row :hymn="getHymn(185)">Sacrament Hymn</hymn-row>
          <div><strong>Administration of the Lord's Sacrament</strong></div>
          <div></div>

          <!-- <div><span>Testimonies</span></div>
          <div></div> -->

          <div><span>Speakers</span><span>Sidonna Davis</span></div>
          <div><span></span><span>Cade Oakeson</span></div>
          <div><span></span><span>Kambri Muir</span></div>
          <div><span></span><span>Natali Bennett</span></div>
          <div><span></span><span>Tallon Harmon</span></div>
          <div></div>

          <hymn-row :hymn="getHymn(143)">Congregational Hymn</hymn-row>
          <div></div>

          <!-- <div><span>Choir Number</span><span>Consider the Lilies</span></div>
          <div class="smaller"><em>Dir by Brother Michael Lambert, Accomp by Sister Kaylene Demasi</em></div>
          <div></div> -->

          <!-- <div><span>Men's Choir</span><span><em>328 An Angel From on High</em></span></div>
          <div class="smaller">Directed by Brooke Porter, Accompanied by Shellie Vanfleet</div>
          <div></div> -->

          <div><span>Speakers</span><span>Sister Janette Park</span></div>
          <div><span></span><span>Brother Jon Park</span></div>
          <div></div>

          <!-- <div><span>Choir Number</span><span>On This Holy Easter Morning</span></div>
          <div><em>by Hamblin & Moffit, Dir. by Michael Lambert</em></div>
          <div></div> -->

          <hymn-row :hymn="getHymn(137)">Closing Hymn</hymn-row>
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
        <div class="announcements">
          <hr />

          <!-- <div>
            ♡ <em>Happy Mother's Day!</em> ♡
          </div>
          <div></div>  -->
          
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
            The <a href="https://highlineward.org/sacrament">live stream for Sacrament meeting</a> now requires a password, which can be requested from Bishop Ostler.
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
            This is not an official website of <a href="https://www.churchofjesuschrist.org/">The Church of Jesus Christ of Latter-day Saints</a>.
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
    font-size: 3.2vw;
  }
  @media print {
    .container {
      font-size: 14pt;
      max-width: 75%;
      margin: 0 auto;
    }
    .container img:nth-child(1), .announcements {
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