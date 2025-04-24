<script lang="ts" setup>
import { IonContent, IonPage } from "@ionic/vue";
import HymnRow from "./HymnRow.vue";
import { getHymn } from '@/data/hymns';
import { data } from '@/data/program';
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <img :src="data.image.url" :alt="data.image.description" />
        <div class="title">{{ data.unitName }}</div>
        <div class="title">{{ data.meetingName }}</div>
        <div v-if="data.holiday" class="title"><em>{{ data.holiday }}</em></div>
        <div>{{ data.meetingDate }}, {{ data.time }}</div>
        <div class="table">
          <div></div>
          <div><span>Presiding</span><span>{{ data.presidingName }}</span></div>
          <div><span>Conducting</span><span>{{ data.conductingName }}</span></div>
          <div><span>Music Director</span><span>{{ data.choristerName }}</span></div>
          <div><span>Organist</span><span>{{ data.organistName }}</span></div>

          <div></div>
          <hymn-row :hymn="getHymn(data.openingHymn)">Opening Hymn</hymn-row>
          <div><span>Invocation</span><span>{{ data.invocationName }}</span></div>
          <div></div>

          <div>
            <span>Ward & Stake Items</span>
          </div>
          <div></div>

          <hymn-row :hymn="getHymn(data.sacramentHymn)">Sacrament Hymn</hymn-row>
          <div><strong>Administration of the Lord's Sacrament</strong></div>
          <div></div>

          <div v-if="data.isTestimonyMeeting" class="space-after"><span>Testimonies</span></div>

          <div v-if="data.isPrimaryProgram" class="space-after"><span>Primary Program</span><span>Highline Ward Children</span></div>

          <template v-if="!data.isTestimonyMeeting && !data.isPrimaryProgram">
            
            <template v-if="data.youthSpeakers">
              <template v-for="(speaker, index) in data.youthSpeakers">
                <div>
                  <span>{{ index ? '' : data.youthSpeakers.length == 1 ? 'Youth Speaker' : 'Youth Speakers' }}</span>
                  <span>{{ speaker.name }}</span>
                </div>
              </template>
              <div></div>
            </template>
            
            <template v-if="data.speakers && data.speakers[0]">
              <template v-for="(speaker, index) in data.speakers[0]">
                <div>
                  <span>{{ index ? '' : data.speakers[0].length == 1 ? 'Speaker' : 'Speakers' }}</span>
                  <span>{{ speaker.name }}</span>
                </div>
                <div v-if="speaker.calling" class="smaller"><span></span><span>{{ speaker.calling }}</span></div>
              </template>
              <div></div>
            </template>
            
            <template v-if="data.intermediateHymn">
              <hymn-row :hymn="getHymn(data.intermediateHymn)">Congregational Hymn</hymn-row>
              <div></div>
            </template>

            <template v-if="data.musicNumber">
              <div><span>{{ data.musicNumber.label }}</span><span>{{ data.musicNumber.title }}</span></div>
              <div class="smaller"><em>{{ data.musicNumber.credits }}</em></div>
              <div></div>
            </template>

            <template v-if="data.musicNumbers?.length">
              <template v-for="song in data.musicNumbers">
                <hymn-row v-if="song.hymn" :hymn="getHymn(song.hymn)">Congregational Hymn</hymn-row>
                <div v-if="!song.hymn">
                  <span>Music Number</span>
                  <span>{{ song.title }}</span>
                </div>
                <div v-if="song.credits" class="smaller"><em>{{ song.credits }}</em></div>
              <div></div>
              </template>
            </template>

            <template v-if="data.speakers && data.speakers[1]">
              <template v-for="(speaker, index) in data.speakers[1]">
                <div>
                  <span>{{ index ? '' : data.speakers[1].length == 1 ? 'Speaker' : 'Speakers' }}</span>
                  <span>{{ speaker.name }}</span>
                </div>
                <div v-if="speaker.calling" class="smaller"><span></span><span>{{ speaker.calling }}</span></div>
              </template>
              <div></div>
            </template>

          </template>

          <template v-if="data.closingHymn">
            <hymn-row :hymn="getHymn(data.closingHymn)">Closing Hymn</hymn-row>
          </template>

          <div><span>Benediction</span><span>{{ data.benedictionName }}</span></div>

        </div>

        <div class="announcements">
          <hr />

          <template v-if="data.happyDay">
            <div>
              <em>{{ data.happyDay }}</em>
            </div>
            <div></div>
          </template>

          <template v-if="data.showLingerLonger">
            <div><em>Linger longer today: visiting and snacks<br>in the cultural hall after church.</em></div>
            <div></div>
          </template>

          <template v-if="data.showTithingDeclarations">
            <div>
              Sign up for tithing declarations with Bishop Ostler on
              <a href="https://docs.google.com/document/d/1nCVH1ES1DRA3CI4lq9ZL82oDm-yrS9FVDgY6WZ1YN5Q/edit?usp=sharing">this sign-up sheet</a>.
            </div>
            <div></div>
          </template>

          <div>
            Weekly lesson topics, upcoming events, and leadership contact information are available on
            <a href="https://sites.google.com/view/highlineward/home">the ward website</a>.
          </div>
          <div>
            <a href="https://sites.google.com/view/highlineward/home#h.6m577x3v5gg5">
              <button class="clean-button">View upcoming ward events →</button>
            </a>
          </div>
          <div></div>
          <!-- <div>
            Easily share this program by
            <a href="sms:?&body=https://highline-ward.web.app">sending a text message</a>,
            or by having the person point their phone camera at this QR code:
          </div>
          <div></div>
          <img src="/assets/qrcode.png" alt="QR code for this church program" /> -->
          <div>
            Easily share this program by
            <a href="sms:?&body=https://highline-ward.web.app">sending a text message</a>.
          </div>
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
  font-size: 3.2vw;
}
.space-after {
  margin-bottom: 16px;
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

  .smaller {
    font-size: 12pt !important;
  }
}

img {
  width: 20vw;
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