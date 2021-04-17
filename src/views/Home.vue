<template>
  <div class="home">
    <div>
      <p>
        <router-link :to="{name: 'Tax810'}">消費税用の計算機をつくる</router-link>
      </p>
      <p>
        <router-link :to="{name: 'CalcMonth'}">稼働月を計算する</router-link>
      </p>
      <p>
        <router-link :to="{name: 'CalcWarikan'}">割り勘の計算をする</router-link>
      </p>
      <p>
        <router-link :to="{name: 'Chintai'}">賃貸費用を計算する</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
