<script>
export default {
  name: "navbar-component",
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-home',
          to: '#home'
        },
        {
          label: 'About us',
          icon: 'pi pi-star',
          to: '#about'
        },
        {
          label: 'Services',
          icon: 'pi pi-search',
          to: '#service'
        },
        {
          label: 'About the team',
          icon: 'pi pi-user',
          to: '#about-team'
        },
        {
          label: 'Contact',
          icon: 'pi pi-envelope',
          to: '#contact'
        }
      ]
    }
  },
  methods: {
    redirectToExternalPage() {
      window.location.href = 'https://www.youtube.com'; // replace with your external URL
    }
  }
}
</script>

<template>
  <div class="fixed-menu fixed top-0 left-0 w-full z-5">
    <div class="relative card">
      <pv-menubar :model="items">
        <template #start>
          <h1 class="title">PERUVENTURA</h1>
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
          <a :href="item.to" class="flex align-items-center" v-bind="props.action">
            <span :class="item.icon"/>
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </template>
        <template #end>
          <div class="flex align-items-center gap-2">
            <pv-button label="Log In"
                       class="p-button text-700 text-white-alpha-90 bg-indigo-600 border-transparent"
                       @click="redirectToExternalPage"
            ></pv-button>
          </div>
        </template>
      </pv-menubar>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 20px;
}
</style>
