<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
       <!-- We can use v-slot:default="slotProps" instead of the shorthand #default -->
      <template #default="slotProps">
        <h2>{{slotProps.item}}</h2>
        <p>{{slotProps.anotherProp}}</p>
      </template>
    </course-goals>
    <button @click="setActiveComp('active-goals')">Active Goals</button>
    <button @click="setActiveComp('manage-goals')">Manage Goals</button>
    <!-- <active-goals></active-goals>
    <manage-goals></manage-goals> -->
    <keep-alive>
       <component :is="activeComp"></component>
    </keep-alive>

  </div>
</template>

<script>
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import TheHeader from './components/TheHeader.vue';
import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals  from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      activeComp : 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setActiveComp(cmp) {
      this.activeComp = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>