<script>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { toast } from 'vue3-toastify';
import * as config from '../config.ts';
import * as notifications from '../notifications.ts';
import 'vue3-toastify/dist/index.css';
import '../assets/scss/lead-delete-box.scss';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || config.API_BASE_URL || 'http://localhost:3000/api/';
console.log('API_BASE_URL:', API_BASE_URL);


const leadId = ref(0);
async function deleteLead() {
  if (!confirm("Are you sure you want to delete this lead?")) {
    return; // User cancelled the deletion
  }
  try {
    await axios.delete(`${API_BASE_URL}leads/${leadId.value}`);
    notifications.success("Lead deleted successfully!");
    setTimeout(() => {
      window.location.href = '/'; // Redirect to leads list
    }, 1200);
  } catch (error) {
    console.error('Error deleting lead:', error);
    notifications.error("Error deleting lead");
  }
}


export default {
  name: 'LeadDeleteBox',
  props: {
    leadId: Number,
  },
  setup(props) {
    leadId.value = props.leadId;
    return {
      deleteLead,
      leadId: props.leadId,
    }
  }
}
</script>

<template>
  <div class="lead-delete-box" v-if="leadId">
    <h3>Delete Section</h3>
    <button type="button" @click="deleteLead">Delete Lead</button>
  </div>
</template>
