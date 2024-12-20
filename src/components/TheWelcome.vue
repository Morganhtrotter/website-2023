<template>
  <div id="controls">
    <button @click="
      $refs.dodgersRoster.sayHello(),
      $refs.giantsRoster.sayHello(),
      $refs.padresRoster.sayHello(),
      $refs.dbacksRoster.sayHello(),
      $refs.rockiesRoster.sayHello(),
      $refs.cardsRoster.sayHello(),
      $refs.brewersRoster.sayHello(),
      $refs.cubsRoster.sayHello(),
      $refs.piratesRoster.sayHello(),
      $refs.redsRoster.sayHello(),
      $refs.nationalsRoster.sayHello(),
      $refs.metsRoster.sayHello(),
      $refs.philliesRoster.sayHello(),
      $refs.bravesRoster.sayHello(),
      $refs.marlinsRoster.sayHello(),
      $refs.marinersRoster.sayHello(),
      $refs.astrosRoster.sayHello(),
      $refs.athleticsRoster.sayHello(),
      $refs.angelsRoster.sayHello(),
      $refs.rangersRoster.sayHello(),
      $refs.twinsRoster.sayHello(),
      $refs.tigersRoster.sayHello(),
      $refs.whitesoxRoster.sayHello(),
      $refs.royalsRoster.sayHello(),
      $refs.guardiansRoster.sayHello(),
      $refs.jaysRoster.sayHello(),
      $refs.yankeesRoster.sayHello(),
      $refs.redsoxRoster.sayHello(),
      $refs.raysRoster.sayHello(),
      $refs.oriolesRoster.sayHello()
      ">
      AVG
    </button>
  </div>
  <div id="nlWest">
    <MLBRoster
      id="lad"
      teamId="119"
      ref="dodgersRoster"
    >
      <template #heading>Los Angeles Dodgers</template>
    </MLBRoster>

    <MLBRoster
      id="sf"
      teamId="137"
      ref="giantsRoster"
    >
      <template #heading>San Francisco Giants</template>
    </MLBRoster>

    <MLBRoster
      id="sd"
      teamId="135"
      ref="padresRoster"
    >
      <template #heading>San Diego Padres</template>
    </MLBRoster>

    <MLBRoster
      id="ari"
      teamId="109"
      ref="dbacksRoster"
    >
      <template #heading>Arizona D-backs</template>
    </MLBRoster>

    <MLBRoster
      id="col"
      teamId="115"
      ref="rockiesRoster"
    >
      <template #heading>Colorado Rockies</template>
    </MLBRoster>
  </div>
  <div id="nlCentral">
    <MLBRoster
      id="stl"
      teamId="138"
      ref="cardsRoster"
    >
      <template #heading>St. Louis Cardinals</template>
    </MLBRoster>

    <MLBRoster
      id="mil"
      teamId="158"
      ref="brewersRoster"
    >
      <template #heading>Milwakee Brewers</template>
    </MLBRoster>

    <MLBRoster
      id="chc"
      teamId="112"
      ref="cubsRoster"
    >
      <template #heading>Chicago Cubs</template>
    </MLBRoster>

    <MLBRoster
      id="pit"
      teamId="134"
      ref="piratesRoster"
    >
      <template #heading>Pittsburg Pirates</template>
    </MLBRoster>

    <MLBRoster
      id="cin"
      teamId="113"
      ref="redsRoster"
    >
      <template #heading>Cincinnati Reds</template>
    </MLBRoster>
  </div>
  <div id="nlEast">
    <MLBRoster
      id="wsh"
      teamId="120"
      ref="nationalsRoster"
    >
      <template #heading>Washington Nationals</template>
    </MLBRoster>

    <MLBRoster
      id="nym"
      teamId="121"
      ref="metsRoster"
    >
      <template #heading>New York Mets</template>
    </MLBRoster>

    <MLBRoster
      id="phi"
      teamId="143"
      ref="philliesRoster"
    >
      <template #heading>Philadelphia Phillies</template>
    </MLBRoster>

    <MLBRoster
      id="atl"
      teamId="144"
      ref="bravesRoster"
    >
      <template #heading>Atlanta Braves</template>
    </MLBRoster>

    <MLBRoster
      id="mia"
      teamId="146"
      ref="marlinsRoster"
    >
      <template #heading>Miami Marlins</template>
    </MLBRoster>
  </div>
  <div id="alWest">
    <MLBRoster
      id="sea"
      teamId="136"
      ref="marinersRoster"
    >
      <template #heading>Seattle Mariners</template>
    </MLBRoster>

    <MLBRoster
      id="hou"
      teamId="117"
      ref="astrosRoster"
    >
      <template #heading>Houston Astros</template>
    </MLBRoster>

    <MLBRoster
      id="oak"
      teamId="133"
      ref="athleticsRoster"
    >
      <template #heading>Oakland Athletics</template>
    </MLBRoster>

    <MLBRoster
      id="laa"
      teamId="108"
      ref="angelsRoster"
    >
      <template #heading>Los Angeles Angels</template>
    </MLBRoster>

    <MLBRoster
      id="tex"
      teamId="140"
      ref="rangersRoster"
    >
      <template #heading>Texas Rangers</template>
    </MLBRoster>
  </div>
  <div id="alCentral">
    <MLBRoster
      id="min"
      teamId="142"
      ref="twinsRoster"
    >
      <template #heading>Minnesota Twins</template>
    </MLBRoster>

    <MLBRoster
      id="det"
      teamId="116"
      ref="tigersRoster"
    >
      <template #heading>Detroit Tigers</template>
    </MLBRoster>

    <MLBRoster
      id="cws"
      teamId="145"
      ref="whitesoxRoster"
    >
      <template #heading>Chicago White Sox</template>
    </MLBRoster>

    <MLBRoster
      id="kc"
      teamId="118"
      ref="royalsRoster"
    >
      <template #heading>Kansas City Royals</template>
    </MLBRoster>

    <MLBRoster
      id="cle"
      teamId="114"
      ref="guardiansRoster"
    >
      <template #heading>Cleveland Guardians</template>
    </MLBRoster>
  </div>
  <div id="alEast">
    <MLBRoster
      id="tor"
      teamId="141"
      ref="jaysRoster"
    >
      <template #heading>Toronto Blue Jays</template>
    </MLBRoster>

    <MLBRoster
      id="nyy"
      teamId="147"
      ref="yankeesRoster"
    >
      <template #heading>New York Yankees</template>
    </MLBRoster>

    <MLBRoster
      id="bos"
      teamId="111"
      ref="redsoxRoster"
    >
      <template #heading>Boston Red Sox</template>
    </MLBRoster>

    <MLBRoster
      id="tb"
      teamId="139"
      ref="raysRoster"
    >
      <template #heading>Tampa Bay Rays</template>
    </MLBRoster>

    <MLBRoster
      id="bal"
      teamId="110"
      ref="oriolesRoster"
    >
      <template #heading>Baltimore Orioles</template>
    </MLBRoster>
  </div>
</template>

<script setup>
import MLBRoster from './MLBRoster.vue'
</script>


<style scoped lang="scss">
</style>