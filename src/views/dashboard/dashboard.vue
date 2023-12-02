<style src="./dashboard.css"></style>

<script lang="ts" src="./dashboard.ts"></script>

<template>
    <div class="dashboard-container">
        <div class="background-feature d-flex flex-column">
            <Header />
            <div class="d-flex flex-row" style="height: calc( 100vh - 66px)">
                <NavigationBar class="col-2" />
                Dashboard
            </div>
        </div>

    </div>
</template>
