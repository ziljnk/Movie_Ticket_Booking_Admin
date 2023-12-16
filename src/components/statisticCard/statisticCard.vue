<style src="./statisticCard.css"></style>

<script lang="ts" src="./statisticCard.ts"></script>

<template>
    <div class="statisticCard-container">
        <h2 class="title-statistic">{{ title }}</h2>
        <p class="value-statistic">{{ value }}</p>
    </div>
    <!-- <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Title</h5>
            <div class="value-container">
            <p class="value">value</p>
            <div v-if="percent !== null" class="percent-container">
            <p
              class="percent"
              :class="{ 'text-[#14FF00]': percent >= 0, 'text-[#FF0000]': percent < 0 }"
            >
              {{ percent >= 0 ? `+${percent}` : percent }}%
            </p>
            <img
              v-if="percent >= 0"
              src="@/assets/arrow-up.svg"
              alt="up arrow"
            />
            <img
                v-else
                src="@/assets/arrow-down.svg"
                alt="down arrow"
            />
          </div>
        </div>
        </div>
    </div> -->
</template>