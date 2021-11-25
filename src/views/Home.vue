<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <img src="/assets/Christus.png" />
        <div class="title">Highline Ward</div>
        <div class="title">Sacrament Meeting</div>
        <div>November 28, 2021</div>
        <div class="table">
          <div></div>
          <div><span>Presiding</span><span>Brother Jason Manning</span></div>
          <div><span>Conducting</span><span>Brother Jason Manning</span></div>
          <!-- <div><span>Presiding</span><span>Bishop Glen Ostler</span></div>
          <div><span>Conducting</span><span>Bishop Glen Ostler</span></div> -->

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
              <a
                href="https://www.churchofjesuschrist.org/music/library/hymns/for-the-beauty-of-the-earth"
              >
                92 For the Beauty of the Earth
              </a>
            </span>
          </div>
          <div><span>Invocation</span><span>Brother Ben Gowans</span></div>
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
                href="https://www.churchofjesuschrist.org/music/library/hymns/in-humility-our-savior"
              >
                172 In Humility, Our Savior
              </a>
            </span>
          </div>
          <div><b>Administration of the Sacrament</b></div>
          <div></div>

          <div><span>Testimonies</span><span>Sister Maughan</span></div>
          <div><span></span><span>Sister I</span></div>
          <div></div>

          <!-- <div>
            <span>Congregational Hymn</span>
            <span><a 
              href="https://www.churchofjesuschrist.org/music/library/hymns/let-the-holy-spirit-guide"
            >
              143 Let the Holy Spirit Guide
            </a></span>
          </div>
          <div></div> -->

          <div><span>Music Number</span><span>I Feel My Savior's Love</span></div>
          <div><span></span><span>Sister Tiffany Sackley & Hailey Peay</span></div>
          <div></div>

          <!-- <div><span>Primary Program</span></div>
          <div></div> -->

          <div><span>Speaker</span><span>Sister Debbie Brock</span></div>
          <div><span>Speaker</span><span>Brother Roger Brock</span></div>
          <div></div>

          <div>
            <span>Closing Hymn</span>
            <span>
              <!-- <a href="" @click.stop.prevent="scrollMe"> -->
              <a href="https://www.churchofjesuschrist.org/music/library/hymns/rejoice-the-lord-is-king">
                66 Rejoice, the Lord is King
              </a>
            </span>
          </div>
          <!-- <div><span></span><span>(not available online)</span></div> -->

          <div><span>Benediction</span><span>Sister Julie Gowans</span></div>
        </div>

        <!-- <hr id="music" />
<pre>
"My Own Sacred Grove"

Joseph Smith went to a grove full of trees.
Seeking God's wisdom, he fell to his knees.
As he pled with the heavens the sky filled with light,
And the Father appeared with His Son Jesus Christ
Standing above in the air,
Coming to answer his prayer.

I will find my own sacred grove
Away from all of the noise in the world.
I will turn to prayer,
For I know He's there.
I will find my own sacred grove.

So many choices with so much at stake.
Life's full of pathways, but which should I take?
If I lift up in prayer in the name of the Son,
Through the pow'r of the Holy Ghost answers will come.
Heavenly Father is there
Ready to answer my prayer.

I will find my own sacred grove
Away from all of the noise in the world.
I will turn to prayer,
For I know He's there.
I will find my own sacred grove.

Sometimes the answers take time,
So I'll listen in heart and mind.
Revelation will come my way
As I wait patiently in faith.

I will find my own sacred grove
Away from all of the noise in the world.
I will turn to prayer,
For I know He's there.
I will find my own sacred grove.

I will find my own sacred grove.
</pre>
<a href="https://www.angiekillian.com/shop?Collection=My+Own+Sacred+Grove&page=3" class="smaller">
  ©2021 by Angie Killian Music | All Rights Reserved.
</a> -->
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
  setup() {
    const scrollMe = () => {
        document.querySelector('#music')?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return {
      scrollMe
    }
  }
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
</style>