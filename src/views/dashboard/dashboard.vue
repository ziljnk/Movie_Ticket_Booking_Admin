<style src="./dashboard.css"></style>

<script lang="ts" src="./dashboard.ts"></script>

<template>
    <div class="dashboard-container">
        <div class="background-feature d-flex flex-column">
            <Header />
            <div class="d-flex flex-row" style="height: calc( 100vh - 66px)">
                <NavigationBar class="col-2" />
                Dashboard
                <button @click="fetchUsers" class="btn-logout">Fetch users</button>
                <div v-if="userList.length > 0" v-for="(item, index) in userList" :key="index">
                    <p>id: {{ item.id }}</p>
                    <p>account: {{ item.account }}</p>
                    <p>password: {{ item.password }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
