<template>
  <div
    @click="increment()"
    class="MLBRoster"
  >
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      {{ teamId }}
      <div 
        :class="[{'team': true}, teamId ? 'team-' + teamId : '']"
        v-on:click.stop
        v-if="mlbDataRef && teamPitcherData"
      >
        <div v-if="teamHitterData">
          <div 
            v-for="(player, index) in getTeamHitting"
            class="team-hitter-wrapper"  
          >
            <div v-for="playerTwo in player" class="hitter">
              <div v-if="(typeof playerTwo) !== 'string'">
                <HitterProfile
                  :stats=playerTwo
                >
                </HitterProfile>
              </div>
            </div>
          </div>
        </div>
        <div v-if="teamPitcherData">
          <div 
            v-for="(player, index) in getTeamPitching"
            class="player"  
          >
              <div v-for="playerTwo in player">
                <div v-for="playerThree in playerTwo">
                  {{ playerThree[0].fullName }}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mlbDataAPI from '../api/resources/mlbData.js';
import HitterProfile from './HitterProfile.vue';
import { ref, toRefs } from 'vue';
import * as d3 from 'd3';

export default {
    props: {
        teamId: {
            type: String,
            required: true
        }
    },
    setup(props) {
        var showHideButton = ref({});
        const mlbDataRef = ref({});
        const playerData = ref({});
        const teamHitterData = ref({});
        const teamPitcherData = ref({});
        const { teamId } = toRefs(props);
        const loadMLBData = async () => {
            // TODO: move hasBeenClicked code to seperate function called in beforeMount
            if (!hasBeenClicked) {
                mlbDataRef.value = await mlbDataAPI.index("/api/v1/teams/" + teamId.value + "/roster");
                console.log("Made GET() request: " + mlbDataRef.value);
                const width = 800;
                const height = 500;
                hasBeenClicked = true;
                let tempHitterData = new Array();
                let tempPitcherData = new Array();
                // For each player in roster, load player data
                mlbDataRef.value.roster.forEach(async (player) => {
                    if (player.position.code == 1) { // If player is a pitcher
                        let pitcherStatistics = await mlbDataAPI.player_stats(player.person.id, "2022", "pitching");
                        tempPitcherData.push(pitcherStatistics);
                    }
                    else {
                        let playerStatistics = await mlbDataAPI.player_stats(player.person.id, "2022", "hitting");
                        tempHitterData.push(playerStatistics);
                    }
                });
                teamHitterData.value = tempHitterData;
                teamPitcherData.value = tempPitcherData;
            }
            else {
                if (showHideButton === "Show") {
                    document.querySelector(".team-" + teamId.value).style.display = "block"; // Show the player names wrapper
                    showHideButton = "Hide";
                }
                else {
                    document.querySelector(".team-" + teamId.value).style.display = "none"; // Hide the player names wrapper
                    showHideButton = "Show";
                }
                return;
            }
        };
        const loadPlayerData = async () => {
            playerData.value = await mlbDataAPI.player_stats("592450", "2022", "hitting");
            console.log("playerData.value: " + JSON.stringify(playerData.value));
        };
        showHideButton.value = "Show";
        var hasBeenClicked = false;
        var loadRosterData = false;
        return {
            mlbDataRef,
            loadMLBData,
            showHideButton,
            loadPlayerData,
            hasBeenClicked,
            teamHitterData,
            teamPitcherData,
            loadRosterData
        };
    },
    methods: {
        increment() {
            if (!this.loadRosterData) {
                let tempHitterStore = [this.teamHitterData, this.teamId];
                let tempPitcherStore = [this.teamPitcherData, this.teamId];
                this.$store.commit("addPlayers", tempHitterStore);
                this.$store.commit("addPlayers", tempPitcherStore);
                this.loadRosterData = true;
            }
            if (this.showHideButton === "Show") {
                document.querySelector(".team-" + this.teamId).style.display = "block"; // Show the player names wrapper
                this.showHideButton = "Hide";
            }
            else {
                document.querySelector(".team-" + this.teamId).style.display = "none"; // Hide the player names wrapper
                this.showHideButton = "Show";
            }
        }
    },
    computed: {
        console: () => console,
        window: () => window,
        getTeamHitting() {
            if (this.teamId == "119") {
                return this.$store.state.dodgers[0];
            }
            else if (this.teamId == "137") {
                return this.$store.state.giants[0];
            }
            else if (this.teamId == "135") {
                return this.$store.state.padres[0];
            }
            else if (this.teamId == "109") {
                return this.$store.state.dbacks[0];
            }
            else if (this.teamId == "115") {
                return this.$store.state.rockies[0];
            }
            else if (this.teamId == "138") {
                return this.$store.state.cardinals[0];
            }
            else if (this.teamId == "158") {
                return this.$store.state.brewers[0];
            }
            else if (this.teamId == "112") {
                return this.$store.state.cubs[0];
            }
            else if (this.teamId == "134") {
                return this.$store.state.pirates[0];
            }
            else if (this.teamId == "113") {
                return this.$store.state.reds[0];
            }
            else if (this.teamId == "120") {
                return this.$store.state.nationals[0];
            }
            else if (this.teamId == "121") {
                return this.$store.state.mets[0];
            }
            else if (this.teamId == "143") {
                return this.$store.state.phillies[0];
            }
            else if (this.teamId == "144") {
                return this.$store.state.braves[0];
            }
            else if (this.teamId == "146") {
                return this.$store.state.marlins[0];
            }
            else if (this.teamId == "136") {
                return this.$store.state.mariners[0];
            }
            else if (this.teamId == "117") {
                return this.$store.state.astros[0];
            }
            else if (this.teamId == "133") {
                return this.$store.state.athletics[0];
            }
            else if (this.teamId == "108") {
                return this.$store.state.angels[0];
            }
            else if (this.teamId == "140") {
                return this.$store.state.rangers[0];
            }
            else if (this.teamId == "142") {
                return this.$store.state.twins[0];
            }
            else if (this.teamId == "116") {
                return this.$store.state.tigers[0];
            }
            else if (this.teamId == "145") {
                return this.$store.state.whiteSox[0];
            }
            else if (this.teamId == "118") {
                return this.$store.state.royals[0];
            }
            else if (this.teamId == "114") {
                return this.$store.state.guardians[0];
            }
            else if (this.teamId == "141") {
                return this.$store.state.blueJays[0];
            }
            else if (this.teamId == "147") {
                return this.$store.state.yankees[0];
            }
            else if (this.teamId == "111") {
                return this.$store.state.redSox[0];
            }
            else if (this.teamId == "139") {
                return this.$store.state.rays[0];
            }
            else if (this.teamId == "110") {
                return this.$store.state.orioles[0];
            }
            return;
        },
        getTeamPitching() {
            if (this.teamId == "119") {
                return this.$store.state.dodgers[1];
            }
            else if (this.teamId == "137") {
                return this.$store.state.giants[1];
            }
            else if (this.teamId == "135") {
                return this.$store.state.padres[1];
            }
            else if (this.teamId == "109") {
                return this.$store.state.dbacks[1];
            }
            else if (this.teamId == "115") {
                return this.$store.state.rockies[1];
            }
            else if (this.teamId == "138") {
                return this.$store.state.cardinals[1];
            }
            else if (this.teamId == "158") {
                return this.$store.state.brewers[1];
            }
            else if (this.teamId == "112") {
                return this.$store.state.cubs[1];
            }
            else if (this.teamId == "134") {
                return this.$store.state.pirates[1];
            }
            else if (this.teamId == "113") {
                return this.$store.state.reds[1];
            }
            else if (this.teamId == "120") {
                return this.$store.state.nationals[1];
            }
            else if (this.teamId == "121") {
                return this.$store.state.mets[1];
            }
            else if (this.teamId == "143") {
                return this.$store.state.phillies[1];
            }
            else if (this.teamId == "144") {
                return this.$store.state.braves[1];
            }
            else if (this.teamId == "146") {
                return this.$store.state.marlins[1];
            }
            else if (this.teamId == "136") {
                return this.$store.state.mariners[1];
            }
            else if (this.teamId == "117") {
                return this.$store.state.astros[1];
            }
            else if (this.teamId == "133") {
                return this.$store.state.athletics[1];
            }
            else if (this.teamId == "108") {
                return this.$store.state.angels[1];
            }
            else if (this.teamId == "140") {
                return this.$store.state.rangers[1];
            }
            else if (this.teamId == "142") {
                return this.$store.state.twins[1];
            }
            else if (this.teamId == "116") {
                return this.$store.state.tigers[1];
            }
            else if (this.teamId == "145") {
                return this.$store.state.whiteSox[1];
            }
            else if (this.teamId == "118") {
                return this.$store.state.royals[1];
            }
            else if (this.teamId == "114") {
                return this.$store.state.guardians[1];
            }
            else if (this.teamId == "141") {
                return this.$store.state.blueJays[1];
            }
            else if (this.teamId == "147") {
                return this.$store.state.yankees[1];
            }
            else if (this.teamId == "111") {
                return this.$store.state.redSox[1];
            }
            else if (this.teamId == "139") {
                return this.$store.state.rays[1];
            }
            else if (this.teamId == "110") {
                return this.$store.state.orioles[1];
            }
            return;
        }
    },
    beforeMount() {
        this.loadMLBData();
    },
    components: { HitterProfile }
}
</script>

<style scoped lang="scss">
.hitter {
  width: 22%;
  min-width: 250px;
  margin-bottom: 8px;
}
.team-hitter-wrapper {
  display: flex;
  padding-right: 1rem;
  flex-wrap: wrap;
  column-gap: 8px;
}
.player {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid transparent;
}

.player:hover {
  border: 1px solid white;
}

.MLBRoster {
  display: flex;
  border-radius: 0.5rem;
}

.details {
  flex: 1;
  padding: 0.5rem calc(var(--section-gap) / 2);
  border: 1px solid blue;
  border-radius: 0.5rem;
  margin: 1rem 0;
  transition: all 0.7s ease-in-out;
}

#lad .details {
  border-color: var(--dodger-blue);
}

#sf .details {
  border-color: var(--giant-orange);
  .team-hitter-wrapper {
    background-color: orange;
  }
}

#sd .details {
  border-color: var(--padres-brown);
}

#ari .details {
  border-color: var(--dbacks-red);
}

#col .details {
  border-color: var(--rockies-purple);
}

#stl .details {
  border-color: var(--cardinals-red);
}

#mil .details {
  border-color: var(--brewers-blue);
}

#chc .details {
  border-color: var(--cubs-blue);
}

#pit .details {
  border-color: var(--pirates-yellow);
}

#cin .details {
  border-color: var(--reds-red);
}

#wsh .details {
  border-color: var(--nationals-red);
}

#nym .details {
  border-color: var(--mets-blue);
}

#phi .details {
  border-color: var(--phillies-red);
}

#atl .details {
  border-color: var(--braves-blue);
}

#mia .details {
  border-color: var(--marlins-blue);
}

#sea .details {
  border-color: var(--mariners-blue);
}

#hou .details {
  border-color: var(--astros-orange);
}

#oak .details {
  border-color: var(--athletics-green);
}

#laa .details {
  border-color: var(--angels-red);
}

#tex .details {
  border-color: var(--rangers-blue);
}

#min .details {
  border-color: var(--twins-blue);
}

#det .details {
  border-color: var(--tigers-blue);
}

#cws .details {
  border-color: var(--white-sox-black);
}

#kc .details {
  border-color: var(--royals-blue);
}

#cle .details {
  border-color: var(--guardians-red);
}

#tor .details {
  border-color: var(--blue-jays-blue);
}

#nyy .details {
  border-color: var(--yankees-blue);
}

#bos .details {
  border-color: var(--red-sox-red);
}

#tb .details {
  border-color: var(--rays-blue);
}

#bal .details {
  border-color: var(--orioles-orange);
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .MLBRoster {
    margin-top: 0;
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
    z-index: 2;
  }

  .MLBRoster:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .MLBRoster:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .MLBRoster:first-of-type:before {
    display: none;
  }

  .MLBRoster:last-of-type:after {
    display: none;
  }
}
</style>
