<style src="./dashboard.css"></style>

<script lang="ts" src="./dashboard.ts"></script>

<template>
    <div class="dashboard-container">
        <div class="background-feature d-flex flex-column">
            <Header />
            <div class="d-flex flex-row" style="height: calc( 100vh - 66px)">
                <NavigationBar class="col-2" />
                <div>
                    <div class="container overflow-hidden text-center">
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3"><statistic-card/></div>
                            </div>
                            <div class="col">
                                <div class="p-3"><statistic-card/></div>
                            </div>
                            <div class="col">
                                <div class="p-3"><statistic-card/></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <monthly-revenue/>
                    </div>
                    <div style="display: flex;">
                        <bookings-amount/>
                        <pie-chart/>
                    </div>

                </div>
                
            </div>
        </div>

    </div>
</template>
