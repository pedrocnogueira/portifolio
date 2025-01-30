<script setup lang="ts">
import AppStoreBadgeBlack from "./components/AppStoreBadgeBlack.vue";
</script>

<template>
  <div class="hero">
    <img class="pfp" src="@assets/pfp_pedro.jpeg" />
    <div clas="text">
      <p class="title">Hello there! I'm Pedro Nogueira</p>
      <p class="description">
        I'm a Computer Engineering student using software engineering to solve
        problems. I'm skilled in problem-solving, teamwork, and continuous
        learning, with a commitment to delivering innovative, user-centric
        solutions.
      </p>
    </div>
  </div>

  <div class="ADA">
    <div class="info">
      <img src="@assets/ADA_PUC_logo.png" alt="" class="logo" />
      <p class="title">Apple Developer Academy | PUC-Rio</p>
      <p class="desc">
        I currently work as an iOS Developer in Apple Developer Academy, where
        I:
      </p>
      <ul>
        <li>
          Develop, launch, and maintain iOS apps in alignment with Apple's
          guidelines, emphasizing user-centric, clean, and accessible solutions
        </li>
        <li>
          Collaborate with cross-functional teams to continuously refine app
          features and ensure high-quality user experiences
        </li>
      </ul>
    </div>

    <div class="projects">
      <div class="tilte">Projects</div>

      <div class="pinspot">
        <div class="main">
          <div class="appstore">
            <img src="@assets/PinSpotIcon.png" />
            <a href="https://apple.co/4hg4jCC">
              <AppStoreBadgeBlack />
            </a>
          </div>
          <div class="desc">
            <img class="PSLogo" src="@assets/PinSpotLogo.png" />
            <p>
              PinSpot is an app designed and developed to compile all the places
              you find on social media in a practical way.
            </p>
            <p>
              Using AI, the app extracts the core information of Reels and
              TikToks, such as the place's name, description and address, and
              displays it in a simple and searchable format.
            </p>
            <p>
              As one of the founders of the project, and I was responsible for
              implementing most of the app's Interface and database.
            </p>
            <p>
              Since it's release in the App Store, in September 2024, PinSpot
              has achieved almost 3k impressions and 178 downloads.
            </p>
          </div>
        </div>
        <div class="images" style="font-size: xx-large; color: red">
          <i>Inserir imagens mostrando o PinSpot</i>
        </div>
      </div>
    </div>
  </div>
</template>
