<script setup>
import { useRoute } from 'vue-router'
import LeadFrom from '../../components/LeadForm.vue'
import LeadDeleteBox from '../../components/LeadDeleteBox.vue'

const route = useRoute()
const leadId = route.params.id
</script>

<template>
  <h1>Lead ID: {{ leadId }}</h1>
  <LeadFrom :lead-id="leadId" />
  <LeadDeleteBox :lead-id="leadId" />
</template>