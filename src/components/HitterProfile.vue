<template>
    <div class="hitter-prof-wrapper" @click="open">
        <div :class="this.stats.people[0].nameSlug" v-if="this.stats.people">
            <div class="header-wrapper">
                <h5 v-if="this.stats.people[0].primaryNumber">{{ this.stats.people[0].primaryNumber }}</h5>
                <h5 v-else>NA</h5>
                <h4>{{ this.stats.people[0].fullName }} <p>{{ this.stats.people[0].primaryPosition.abbreviation }}</p></h4>
                <!-- {{ mlbDataRef.people ? mlbDataRef.people[0] : mlbDataRef }} -->
                <svg></svg>
            </div>
        </div>
        <ModalsContainer />
    </div>
</template>
<script>
import { useModal } from 'vue-final-modal'
import ModalConfirm from './ModalConfirm.vue'
import { ref, toRefs, onMounted } from 'vue';
import * as d3 from "d3";

export default {
    props: {
        stats: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        const { stats } = toRefs(props);
        const mlbDataRef = ref({});
        // Use vue-final-modal
        const { open, close } = useModal({
            component: ModalConfirm,
            attrs: {
                title: stats.value.people[0].fullName,
                average: mlbDataRef.value,
                onConfirm() {
                    // Temporarily show hitter data in hitterProfile on modal close for purposes of reading data easily
                    close()
                },
            },
            slots: {
                default: stats.value.people[0].link,
            },
        })

        onMounted(() => {
            loadHitterData();
        });
        // Load Hitter data from 2024
        // TODO: Allow user to choose the year
        const loadHitterData = async () => {
            const width = "100%";
            const height = "100%";
            const fillColor = "#010101";

            var dataset = [],
            i = 0;

            // Random number once so only one circle created per player
            for(i=0; i<1; i++){
                dataset.push(Math.round(Math.random()*100));
            }   

            const svg = d3.selectAll("." + stats.value.people[0].nameSlug + " svg").attr("width", width).attr("height", height).attr("background", fillColor);
            const homeRuns = stats.value.people[0].stats[0].splits[0].stat.homeRuns;

            // Set circles to homeruns by default
            svg.selectAll("circle")
                .data(dataset)
                .enter().append("circle")
                .style("stroke", "black")
                .style("fill", "black")
                .attr("r", homeRuns)
                .attr("cx", 50)
                .attr("cy", 50);
            
            const g = svg.append("g");
        };
        return {
            open,
            close,
            loadHitterData
        };
    },
    methods: {
        changeCircle() {
            if (this.stats.people[0].stats?.[0]?.splits?.[0]?.stat?.avg) {
                const svg = d3.selectAll("." + this.stats.people[0].nameSlug + " svg");
                const avg = parseFloat(this.stats.people[0].stats[0].splits[0].stat.avg) * 100;
                //console.log(parseFloat(avg) * 100);
                var dataset = [],
                i = 0;

                // Random number once so only one circle created per player
                for(i=0; i<1; i++){
                    dataset.push(Math.round(Math.random()*100));
                }

                svg.selectAll("circle")
                    .transition()
                    .style("stroke", "black")
                    .style("fill", "blue")
                    .attr("r", avg)
                    .attr("cx", 50)
                    .attr("cy", 50);
            } else {
                //console.log("Does not have avg for current split");
            }
        }
    },
    computed: {
        console: () => console,
        window: () => window
    }
}
</script>
<style scoped lang="scss">
.hitter-prof-wrapper {
    padding: 12px 20px;
    border: 1px solid black;
    border-radius: 2.5px;
}
.hitter-prof-wrapper:hover {
    cursor: pointer;
    border: 1px solid magenta;
}

.hitter-prof-wrapper:hover h4, .hitter-prof-wrapper:hover h5 {
    color: magenta;
}

p {
    display: inline;
}

h4 p {
    padding-left: 8px;
    min-width: 30px;
}

h5 {
    width: fit-content;
    display: inline;
    float: right;
}

.modal-btn {
    z-index: 99;
    &:hover {
        color: yellow;
    }
}
</style>