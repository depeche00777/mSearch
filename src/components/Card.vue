<template>
  <div class="p-3">
    <article class="card shadow">
      
      <a :href="'https://www.themoviedb.org/movie/' + movie.id">
        <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path" class="card-img-top" alt="...">
        <img v-else src="/picture.svg" alt="" class="emptyImg">


        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
        </div>
      </a>
      
    </article>
  </div>      
</template>

<script setup>
  const props = defineProps(['movie'])
  
</script>

<style scoped>


  .card { padding-right: 0; padding-left: 0;} 
  .card a { text-decoration: none; color:#5a5a5a }
  .card a:hover { color:#000; text-decoration:underline; }
  .card-body { height: 80px;}
  .card-title { 
    display:-webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    }

  .emptyImg { 
    width:100%; 
    aspect-ratio: 2 / 3;   /* 비율: 가로 / 세로 */
    background: #e9e9e9;
    }
</style>