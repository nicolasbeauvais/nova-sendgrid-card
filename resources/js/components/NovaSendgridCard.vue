<style lang="scss" scoped>
.nova-sendgrid-card-title {
    color: #489be8;

    .nova-sendgrid-card-title-logo {
        width: 1.8rem;
        margin-right: 0.2rem;
        display: inline;
        vertical-align: middle;
    }
}
</style>

<template>
  <div class="card relative metric px-6 py-4 relative card-panel">

    <div class="flex mb-4">
      <h3 class="text-lg font-bold nova-sendgrid-card-title">
        <svg class="nova-sendgrid-card-title-logo" viewBox="0 0 185 173.7">
          <g>
            <rect x="71.2" y="108.1" fill="#99E1F4" width="42.4" height="42.4"></rect>
            <rect x="28.8" y="65.6" fill="#99E1F4" width="42.4" height="42.4"></rect>
            <rect x="71.2" y="65.6" fill="#009DD9" width="42.4" height="42.4"></rect>
            <rect x="71.2" y="23.2" fill="#00B3E3" width="42.4" height="42.4"></rect>
            <rect x="28.8" y="108.1" fill="#1A82E2" width="42.4" height="42.4"></rect>
            <rect x="113.6" y="65.6" fill="#00B3E3" width="42.4" height="42.4"></rect>
            <rect x="113.6" y="23.2" fill="#1A82E2" width="42.4" height="42.4"></rect>
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
import numeral from 'numeral';

export default {
    props: ['card'],

    data() {
        return {
            count: null
        };
    },

    mounted() {
        Nova.request()
            .get('/nova-vendor/nicolasbeauvais/nova-sendgrid-card/')
            .then(({ data }) => {
                this.count = data.count;
            });
    },

    computed: {
        formattedCount() {
            const numeralCount = numeral(this.count);

            return numeralCount.value() > 1000 ? numeralCount.format('(0.00a)') : this.count;
        }
    }
};
</script>
