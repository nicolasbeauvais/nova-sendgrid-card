<style lang="scss" scoped>
.nova-sendgrid-card-title {
  color: #489be8;

  .nova-sendgrid-card-title-logo {
    width: 1.8rem;
    margin-right: .2rem;
    display: inline;
    vertical-align: middle;
  }
}
</style>

<template>
  <div class="card relative metric px-6 py-4 relative card-panel">

    <div class="flex mb-4">
      <h3 class="text-lg font-bold nova-sendgrid-card-title">
        <svg class="nova-sendgrid-card-title-logo" viewBox="0 0 185 173.7" style="enable-background:new 0 0 185 173.7;" xml:space="preserve">
          <style type="text/css">.st0{fill:#99E1F4;}.st1{fill:#009DD9;}.st2{fill:#00B3E3;}.st3{fill:#1A82E2;}</style>
          <g>
            <rect id="_x39_9E1F4" x="71.2" y="108.1" class="st0" width="42.4" height="42.4"/>
            <rect id="_x39_9E1F4_1_" x="28.8" y="65.6" class="st0" width="42.4" height="42.4"/>
            <rect id="_x30_09DD9" x="71.2" y="65.6" class="st1" width="42.4" height="42.4"/>
            <rect id="_x30_0B3E3_1_" x="71.2" y="23.2" class="st2" width="42.4" height="42.4"/>
            <rect id="_x31_a82e2" x="28.8" y="108.1" class="st3" width="42.4" height="42.4"/>
            <rect id="_x30_0B3E3" x="113.6" y="65.6" class="st2" width="42.4" height="42.4"/>
            <rect id="_x31_a82e2_1_" x="113.6" y="23.2" class="st3" width="42.4" height="42.4"/>
          </g>
        </svg>
        Sendgrid
      </h3>
    </div>

    <p class="flex items-center text-4xl mb-4">
      {{ formattedCount }}
    </p>

    <div class="flex items-center">
      <p class="text-80 font-bold">
        <span>Total recipients</span>
      </p>
    </div>
  </div>
</template>

<script>
 import numeral from 'numeral'

 export default {
   props: ['card'],

   data() {
     return {
       count: null
     }
   },

   mounted() {
     Nova.request().get('/nova-vendor/nicolasbeauvais/nova-sendgrid-card/').then(({data}) => {
       this.count = data.count
     })
   },

   computed: {
     formattedCount() {
       const numeralCount = numeral(this.count)

       return numeralCount.value() > 1000
            ? numeralCount.format('(0.00a)')
            : this.count
     }
   }
 }
</script>
