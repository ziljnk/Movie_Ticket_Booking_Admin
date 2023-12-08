<style src="./login.css"></style>

<script lang="ts" src="./login.ts"></script>

<template>
    <div id="login-container" class="d-flex justify-content-center align-items-center">
        <div class="d-flex flex-row" id="login-content">
            <div id="left-login">
                <img src="@/assets/tickets.png" style="width: 85%; object-fit:contain" />
            </div>
            <div id="right-login">
                <h3 style="font-weight: bolder; color: #c35917; align-self: flex-start; margin-top: 15vh;">Welcome Back!
                </h3>
                <input class="input" v-model="username" style="height:5vh; width: 100%; padding: 1vw; margin: 2vh 0;"
                    type="text" placeholder="Enter your account" />
                <input class="input" v-model="password" style="height:5vh; width: 100%; padding: 1vw; margin: 2vh 0;"
                type="password" autocomplete="off" placeholder="Enter your password" />
                <button @click="handleSignIn" class="input btn-login" style="height:5vh; width: 100%; margin: 2vh 0;">Sign In</button>
            </div>
        </div>

    </div>
</template>