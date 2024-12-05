<template>
  <div>
    <h1>Home</h1>
    <p>{{ $route }}</p>
    -현재 페이지에 대한 정보(내장객체)
    <p>{{ $route.path }}</p>
    <p> 컴포넌트 이름은-  {{ $route.name }}</p>
    <button @click="$router.push('/about')">About 페이지로 이동</button>
    <button @click="goPortfolio">Portfolio 페이지로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

  //스크립트에서 라우트 객체를 사용할때
  const go = useRouter();

  const goPortfolio = () => {
    go.push('/portfolio')
  }
</script>

