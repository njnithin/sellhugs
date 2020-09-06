<template>
   <div class="content-wrap">
    <div class="wrapper-404">
        <img src="@/assets/404.jpg" alt="Page Not Found" style=" max-width: 100%;
    height: auto;
    background-size: cover;">
    </div>
    <router-link class="home" to="/">Home</router-link>
    </div> 
</template>
<style scoped>
.home {
    width: 100%;
    text-align: center;
}
.content-wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
}
.wrapper-404 {
    max-width: 500px;
}
</style>