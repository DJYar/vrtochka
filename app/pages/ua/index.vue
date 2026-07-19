<template>
  <div>
    <HeroSection />
    <AdvantagesSection />
    <FeaturedGamesSection />
    <RoomsSection />
    <BirthdaySection />
    <GiftCardSection />
    <PricingSection />
    <CorporateSection />
    <FaqSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import AdvantagesSection from '~/components/home/AdvantagesSection.vue'
import BirthdaySection from '~/components/home/BirthdaySection.vue'
import ContactSection from '~/components/home/ContactSection.vue'
import CorporateSection from '~/components/home/CorporateSection.vue'
import FaqSection from '~/components/home/FaqSection.vue'
import FeaturedGamesSection from '~/components/home/FeaturedGamesSection.vue'
import GiftCardSection from '~/components/home/GiftCardSection.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import PricingSection from '~/components/home/PricingSection.vue'
import RoomsSection from '~/components/home/RoomsSection.vue'

buildSeo(
  '/ua',
  'VR Точка - клуб віртуальної реальності',
  'VR-ігри, формати для компаній, святкування та зручне бронювання у клубі VR Точка.'
)
</script>
