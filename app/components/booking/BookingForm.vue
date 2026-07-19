<template>
  <form class="booking-form" novalidate @submit.prevent="submitForm">
    <p class="booking-form__notice">Це демонстраційна форма. Дані не надсилаються на сервер і не зберігаються.</p>

    <div class="booking-form__grid">
      <label>
        Ім’я
        <input v-model.trim="form.name" type="text" autocomplete="name" :aria-invalid="Boolean(errors.name)">
        <span v-if="errors.name">{{ errors.name }}</span>
      </label>
      <label>
        Телефон
        <input v-model.trim="form.phone" type="tel" autocomplete="tel" :aria-invalid="Boolean(errors.phone)">
        <span v-if="errors.phone">{{ errors.phone }}</span>
      </label>
      <label>
        Дата
        <input v-model="form.date" type="date" :aria-invalid="Boolean(errors.date)">
        <span v-if="errors.date">{{ errors.date }}</span>
      </label>
      <label>
        Кількість гостей
        <input v-model.number="form.guests" type="number" min="1" max="16" :aria-invalid="Boolean(errors.guests)">
        <span v-if="errors.guests">{{ errors.guests }}</span>
      </label>
    </div>

    <label>
      Коментар
      <textarea v-model.trim="form.comment" rows="4" placeholder="Наприклад: цікавить сімейна гра на вихідні" />
    </label>

    <BaseButton type="submit" wide>Забронювати сеанс</BaseButton>
    <p v-if="success" class="booking-form__success" role="status">
      Дякуємо. Демонстраційну заявку перевірено локально, зовнішня відправка не виконувалась.
    </p>
  </form>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'

const form = reactive({
  name: '',
  phone: '',
  date: '',
  guests: 2,
  comment: ''
})

const errors = reactive<Record<string, string>>({})
const success = ref(false)

const submitForm = () => {
  errors.name = form.name ? '' : 'Вкажіть ім’я.'
  errors.phone = form.phone ? '' : 'Вкажіть телефон.'
  errors.date = form.date ? '' : 'Оберіть дату.'
  errors.guests = form.guests > 0 ? '' : 'Вкажіть кількість гостей.'

  success.value = !Object.values(errors).some(Boolean)
}
</script>

<style scoped lang="scss">
.booking-form {
  display: grid;
  gap: 18px;
}

.booking-form__notice,
.booking-form__success {
  padding: 14px;
  border-radius: var(--radius-small);
  background: rgb(32 217 194 / 10%);
  color: var(--color-text);
}

.booking-form__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

label {
  display: grid;
  gap: 8px;
  color: var(--color-text);
  font-weight: 800;
}

input,
textarea {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-small);
  background: rgb(255 255 255 / 6%);
  color: var(--color-text);
  padding: 13px 14px;

  &[aria-invalid="true"] {
    border-color: var(--color-danger);
  }
}

textarea {
  resize: vertical;
}

span {
  color: var(--color-danger);
  font-size: 0.88rem;
  font-weight: 700;
}

@media (width <= 560px) {
  .booking-form__grid {
    grid-template-columns: 1fr;
  }
}
</style>
