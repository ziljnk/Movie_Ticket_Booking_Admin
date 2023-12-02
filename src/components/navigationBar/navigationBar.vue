<style src="./navigationBar.css"></style>

<script lang="ts" src="./navigationBar.ts"></script>

<template>
    <div class="d-flex flex-column justify-content-between" style="padding:24px; background-color: #fcf7f2; border-right: solid 1px #E5E6E6; height: calc( 100vh - 66px);">
        <div class="d-flex flex-column align-items-start" style="gap:4px; margin-top: 8px;">
            <p class="big-title">Basic tools</p>
            <div :class="[ pageName==='/' ? 'menu-item-active' : '', 'menu-item']" @click="handleChangeTab('/')">
                <i class="bi-grid menu-item-icon"></i>
                <p class="text-start menu-item-title">Dashboard</p>
            </div>
            <div :class="[ pageName==='/movie-management' ? 'menu-item-active' : '', 'menu-item']" @click="handleChangeTab('/movie-management')">
                <i class="bi-film menu-item-icon"></i>
                <p class="text-start menu-item-title">Manage Movies</p>
            </div>
            <div :class="[ pageName==='/schedule-management' ? 'menu-item-active' : '', 'menu-item']" @click="handleChangeTab('/schedule-management')">
                <i class="bi-calendar-check menu-item-icon"></i>
                <p class="text-start menu-item-title">Manage Schedules</p>
            </div>
            <div :class="[ pageName==='/theatre-management' ? 'menu-item-active' : '', 'menu-item']" @click="handleChangeTab('/theatre-management')">
                <i class="bi-building menu-item-icon"></i>
                <p class="text-start menu-item-title">Manage Theatres</p>
            </div>
            <div :class="[ pageName==='/new-management' ? 'menu-item-active' : '', 'menu-item']" @click="handleChangeTab('/new-management')">
                <i class="bi-newspaper menu-item-icon"></i>
                <p class="text-start menu-item-title">Manage News</p>
            </div>
            <hr style="width:100%; border: 0.5px solid #E5E6E6; opacity: 1;"/>
            <p class="big-title">Finance Management</p>
            <div :class="[ pageName==='/voucher-management' ? 'menu-item-active' : '', 'menu-item']" @click="handleChangeTab('/voucher-management')">
                <i class="bi-percent menu-item-icon"></i>
                <p class="text-start menu-item-title">Manage Vouchers</p>
            </div>
            <div :class="[ pageName==='/ticket-management' ? 'menu-item-active' : '', 'menu-item']" @click="handleChangeTab('/ticket-management')">
                <i class="bi-ticket-perforated menu-item-icon"></i>
                <p class="text-start menu-item-title">Manage Tickets</p>
            </div>
        </div>
        <div class="logout d-flex flex-column" style="gap:16px">
            <div class="menu-item" @click="handleChangeTab('/login')">
                <i class="bi-box-arrow-left menu-item-icon"></i>
                <p class="text-start menu-item-title">Log out</p>
            </div>
        </div>
    </div>
</template>
