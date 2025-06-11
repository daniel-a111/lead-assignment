<script>
import axios from 'axios'
import { ref, reactive } from 'vue'
import { onMounted } from 'vue'
import * as config from '../config.js'
import "../assets/scss/lead-list.scss"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || config.API_BASE_URL || 'http://localhost:3000/api/';
console.log('API_BASE_URL:', API_BASE_URL);

const leads = reactive([]);
const sort = ref('score');
async function loadLeads() {
  try {
    console.log(`${API_BASE_URL}leads`);
    const response = await axios.get(`${API_BASE_URL}leads`, {
      params: {
        sort: sort.value
      }
    });
    leads.splice(0, leads.length); // Clear existing leads
    leads.push(...response.data.leads);
  } catch (error) {
    console.error('Error loading leads:', error);
  }
}

function sortByName() {
  sort.value = 'name';
  loadLeads(); // Reload leads after sorting
}

function sortByScore() {
  sort.value = 'score';
  loadLeads(); // Reload leads after sorting
}

export default {
  name: 'LeadList',
  props: {
    msg: String
  },
  setup() {
    loadLeads();
    return {
      leads, sort, sortByName, sortByScore
    }
  }
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th @click="sortByName">Name <i v-if="sort === 'name'" class="arrow down"></i></th>
          <th>Email</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Source</th>
          <th @click="sortByScore">Score <i v-if="sort === 'score'" class="arrow down"></i></th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lead in leads" :key="lead.id">
          <td>{{ lead.id }}</td>
          <td>{{ lead.name }}</td>
          <td>{{ lead.email }}</td>
          <td>{{ lead.company }}</td>
          <td>{{ lead.phone }}</td>
          <td>{{ lead.source }}</td>
          <td>{{ lead.score }}</td>
          <td>{{ lead.created_at }}</td>
          <td>
            <router-link :to="`/leads/${lead.id}`">Manage</router-link>
            
            <!-- <button @click="editLead(lead.id)">Edit</button>
            <button @click="deleteLead(lead.id)">Delete</button> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
