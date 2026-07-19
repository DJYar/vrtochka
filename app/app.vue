<template>
  <div class="page">
    <NuxtRouteAnnouncer />
    <AppHeader @booking="openBooking" />
    <main id="main-content">
      <NuxtPage />
    </main>
    <AppFooter />
    <BookingModal :open="isBookingOpen" @close="closeBooking" />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layout/AppFooter.vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import BookingModal from '~/components/booking/BookingModal.vue'

const { isBookingOpen, openBooking, closeBooking } = useBookingModal()
</script>
