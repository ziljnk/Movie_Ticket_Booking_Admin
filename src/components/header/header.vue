
<style scoped src="./header.css"></style>
<script lang="ts" src="./header.ts"></script>

<template>
    <div id="header-container" class="d-flex flex-row justify-content-between align-items-center">
        <div class="d-flex flex-row align-items-center" style="gap:8px;">
            <img src="@/assets/movie-logo.png" style="height:8vh; object-fit:contain"/>
        </div>
        <p style="font-size:24px; font-weight:600; color:#ffffff">{{ pageTitle }}</p>
        <div v-if="userData"  class="d-flex flex-row align-items-center" style="gap:8px; height: 100%;">
            <i class="bi-person-circle d-flex align-items-center" style="font-size: 30px; color: #ffffff;"></i>
            <p style="color: #ffffff;
                text-align: right;
                font-size: 14px;
                font-style: normal;
            ">
                {{ userData }}
            </p>
        </div>
        <router-link to="/login" v-else> 
            <button class="button-solid">Sign In</button>
         </router-link>
    </div>
</template>