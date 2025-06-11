<script>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import * as config from '../config.ts';
import * as notifications from '../notifications.ts';
import '../assets/scss/lead-form.scss';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || config.API_BASE_URL || 'http://localhost:3000/api/';
console.log('API_BASE_URL:', API_BASE_URL);

const lead = reactive({});

async function fetchLead(leadId) {
  try {
    const response = await axios.get(`${API_BASE_URL}leads/${leadId}`);
    console.log('Leads fetched successfully:', response.data);
    Object.assign(lead, response.data.lead);
    console.log('Lead data:', lead);
  } catch (error) {
    console.error('Error fetching leads:', error);
  }
}

async function submitForm() {
  try {
    console.log('Submitting form with lead data:', lead);
    if (lead.id) {
      // If lead has an ID, update it
      await updateLead();
    } else {
      // If lead does not have an ID, create a new one
      await createLead();
    }
    const response = lead.id ? await updateLead() : await createLead();
    notifications.success("Lead saved successfully!");
    if (!lead.id) {
      // If it's a new lead, redirect to the lead details page
      setTimeout(() => {
        window.location.href = `/leads/${response.data.lead.id}`;
      }, 1200);
    } else {
      await fetchLead(lead.id); // Refresh the lead data after update
    }
  } catch (error) {
    notifications.error(error?.response?.data?.error || "Error saving lead");
  }
}

async function createLead() {
  return await axios.post(`${API_BASE_URL}leads`, lead);
}

async function updateLead() {
  return await axios.put(`${API_BASE_URL}leads/${lead.id}`, lead);
}

function formatTimestampToDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}
export default {
  name: 'LeadForm',
  props: {
    msg: String,
    leadId: String
  },
  setup(props) {
    if (props.leadId) {
      fetchLead(props.leadId);
    }
    return {
      lead, submitForm, formatTimestampToDate
    }
  }
}
</script>

<template>
  <h3>Lead #{{leadId}} | Score: {{ lead.score }} | Created At: {{ formatTimestampToDate(lead.created_at || lead.createdAt) }}</h3>
  <form :class="`lead-form${!leadId ? ' new-lead' : ''}`" @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="lead.name" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="lead.email" />
    </div>
    <div>
      <label for="company">Company:</label>
      <input type="text" id="company" v-model="lead.company" />
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="text" id="phone" v-model="lead.phone" />
    </div>
    <div>
      <label for="source">Source:</label>
      <input type="text" id="source" v-model="lead.source" />
    </div>
    <div>
      <button type="submit">Save</button>
      <button type="reset">Reset</button>
    </div>
  </form>
</template>
