<template>
  <BaseModal :open="open" title="Забронювати сеанс" @close="$emit('close')">
    <BookingForm />
  </BaseModal>
</template>

<script setup lang="ts">
import BookingForm from './BookingForm.vue'
import BaseModal from '~/components/ui/BaseModal.vue'

defineProps<{
  open: boolean
}>()

defineEmits<{
  close: []
}>()
</script>
