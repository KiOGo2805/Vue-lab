<script setup lang="ts">
import { ref, computed } from 'vue';
import { mockUsers, type User } from '../data/users';

const users = ref<User[]>(mockUsers);

const genderFilter = ref<'all' | 'male' | 'female'>('all');
const ageFilter = ref<'all' | '18+'>('all');
const sortBy = ref<'none' | 'nameAsc' | 'nameDesc' | 'ageAsc' | 'ageDesc'>('none');

const filteredAndSortedUsers = computed(() => {
  let result = users.value;

  if (genderFilter.value !== 'all') {
    result = result.filter(u => u.gender === genderFilter.value);
  }

  if (ageFilter.value === '18+') {
    result = result.filter(u => u.dob.age >= 18);
  }

  if (sortBy.value !== 'none') {
    result = [...result].sort((a, b) => {
      if (sortBy.value === 'nameAsc') return a.name.first.localeCompare(b.name.first);
      if (sortBy.value === 'nameDesc') return b.name.first.localeCompare(a.name.first);
      if (sortBy.value === 'ageAsc') return a.dob.age - b.dob.age;
      if (sortBy.value === 'ageDesc') return b.dob.age - a.dob.age;
      return 0;
    });
  }

  return result;
});

const resetFilters = () => {
  genderFilter.value = 'all';
  ageFilter.value = 'all';
  sortBy.value = 'none';
};

const toggleDetails = (user: User) => {
  user.showDetails = !user.showDetails;
};
</script>

<template>
  <div class="users-container">
    <div class="toolbar">
      <div class="filter-group">
        <button @click="genderFilter = 'all'" :class="{ active: genderFilter === 'all' }">Всі</button>
        <button @click="genderFilter = 'male'" :class="{ active: genderFilter === 'male' }">Чоловіки</button>
        <button @click="genderFilter = 'female'" :class="{ active: genderFilter === 'female' }">Жінки</button>
      </div>

      <div class="filter-group">
        <button @click="ageFilter = 'all'" :class="{ active: ageFilter === 'all' }">Всі вікові групи</button>
        <button @click="ageFilter = '18+'" :class="{ active: ageFilter === '18+' }">18+</button>
      </div>

      <div class="filter-group">
        <button @click="sortBy = 'nameAsc'" :class="{ active: sortBy === 'nameAsc' }">Ім'я ⬆</button>
        <button @click="sortBy = 'nameDesc'" :class="{ active: sortBy === 'nameDesc' }">Ім'я ⬇</button>
        <button @click="sortBy = 'ageAsc'" :class="{ active: sortBy === 'ageAsc' }">Вік ⬆</button>
        <button @click="sortBy = 'ageDesc'" :class="{ active: sortBy === 'ageDesc' }">Вік ⬇</button>
      </div>

      <button class="reset-btn" @click="resetFilters">Очистити все</button>
    </div>

    <div v-if="filteredAndSortedUsers.length === 0" class="empty-state">
      <h2>Список юзерів пустий</h2>
    </div>

    <div class="users-list">
      <div 
        v-for="user in filteredAndSortedUsers" 
        :key="user.id" 
        class="user-card"
        :class="{
          minor: user.dob.age < 18,
          young: user.dob.age >= 18 && user.dob.age <= 30,
          adult: user.dob.age >= 31 && user.dob.age <= 50,
          senior: user.dob.age > 50
        }"
      >
        <div class="card-left">
          <img :src="user.picture" :alt="`${user.name.first} ${user.name.last}`" class="avatar" />
          <h3>{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</h3>
          <p class="gender">{{ user.gender }}</p>
          <p v-if="user.dob.age >= 18" class="age">{{ user.dob.age }} років</p>
        </div>

        <div class="card-right">
          <div class="info-section">
            <h4>Location</h4>
            <p>{{ user.location.street.number }} {{ user.location.street.name }}, {{ user.location.city }}</p>
            <p>{{ user.location.state }}, {{ user.location.country }}</p>
          </div>
          
          <div class="info-section">
            <h4>Contact</h4>
            <p>📧 {{ user.email }}</p>
            <p>📞 {{ user.phone }}</p>
          </div>

          <div class="info-section">
            <h4>Hobbies</h4>
            <ul class="hobbies-list">
              <li v-for="(hobby, index) in user.hobbies" :key="index" class="hobby-tag">
                {{ hobby }}
              </li>
            </ul>
          </div>

          <button class="details-btn" @click="toggleDetails(user)">
            {{ user.showDetails ? 'Приховати деталі' : 'Показати деталі' }}
          </button>
          
          <div v-show="user.showDetails" class="details-box">
            {{ user.details }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.users-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 25px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}

.filter-group {
  display: flex;
  gap: 5px;
  border-right: 2px solid #ddd;
  padding-right: 15px;
}

button {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover { background: #e9ecef; }
button.active { background: #0d6efd; color: white; border-color: #0d6efd; }
.reset-btn { background: #dc3545; color: white; border-color: #dc3545; }
.reset-btn:hover { background: #c82333; }

.empty-state {
  text-align: center;
  padding: 40px;
  color: #6c757d;
}

.users-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.user-card {
  display: flex;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  border-left: 8px solid #ccc;
}

.user-card.minor { border-left-color: #ffc107; }
.user-card.young { border-left-color: #28a745; }
.user-card.adult { border-left-color: #0d6efd; }
.user-card.senior { border-left-color: #6f42c1; }

.card-left {
  padding: 20px;
  background: #f8f9fa;
  text-align: center;
  width: 250px;
}

.avatar {
  width: 120px;   
  height: 120px;    
  object-fit: cover;    
  object-position: center;
  display: block;          
  margin: 0 auto 15px;
  border-radius: 8px;
}

.card-right {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.info-section h4 {
  margin: 0 0 8px 0;
  color: #495057;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

.hobbies-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.hobby-tag {
  background: #e2e3e5;
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 0.85em;
}

.details-btn {
  align-self: flex-start;
  margin-top: 10px;
  background: #f8f9fa;
  border: 1px solid #ced4da;
}

.details-box {
  margin-top: 10px;
  padding: 15px;
  background: #e9ecef;
  border-radius: 6px;
  font-style: italic;
}
</style>