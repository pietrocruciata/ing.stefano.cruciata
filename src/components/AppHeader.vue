
  <template>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center p-2">
        <div class="col-md-4">
            <img src="/public/img/Logo_orizzzontale.png" alt="" class="logo">

        </div>
  
        <div class="hamburger col-md-6" @click="toggleMenu" v-if="isMobile">
            <img src="/img/hamburger-menu.png" alt="" class="menu">
      
        </div>
  
        <nav class=" gap-sm-3 align-items-center col-md-8 justify-content-sm-end justify-content-center  d-none d-md-flex" :class="{ 'open': isOpen }">
          <RouterLink :class="$route.fullPath === '/' ? 'text-header' : 'c-green'" :to="{ name: 'home' }">
            Home
          </RouterLink>
          <RouterLink :class="$route.fullPath === '/projects' ? 'text-header' : 'c-green'" :to="{ name: 'projects' }">
            Progetti
          </RouterLink>
          <RouterLink :class="$route.fullPath === '/contact' ? 'text-header' : 'c-green'" :to="{ name: 'contact' }">
            Contatti
          </RouterLink>
          <RouterLink :class="$route.fullPath === '/me' ? 'text-header' : 'c-green'" :to="{ name: 'me' }">
            Chi Sono
          </RouterLink>
        </nav>
      </div>
  
      <nav class="mobile-menu " v-if="isOpen && isMobile">
        <ul>
          <li @click="navigateTo('home')">Home</li>
          <li @click="navigateTo('projects')">Progetti</li>
          <li @click="navigateTo('contact')">Contatti</li>
          <li @click="navigateTo('me')">Chi Sono</li>
        </ul>
      </nav>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isMobile: false,
    };
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile);
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    navigateTo(section) {
      this.$router.push({ name: section });
      this.isOpen = false; 
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 800; 
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.menu{
    width: 60px;
}

.logo {
  padding: 5px;
  max-width: 300px;
}

.c-green {
  color: $green;
  font-size: 18px;
  padding: 10px;
  border-right: 4px solid $green;
}

.text-header {
  font-size: 22px;
  padding: 10px;
  color: $orange;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 4px solid $orange;
}

.hamburger {
  display: none; 
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 700px) {
    display: flex; 
  }
}

.bar {
  width: 30px;
  height: 4px;
  background-color: $black;
  margin: 5px 0;
  transition: 0.3s;
}

.bar.active {
  background-color: $orange;
}

.mobile-menu {
  position: absolute;
  top: 60px; 
  right: 10px;
  background: white;
  border: 1px solid $black;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu li {
  padding: 10px 20px;
  cursor: pointer;
  color: $black;
}

.mobile-menu li:hover {
  background: $blue;
  color: white;
}
</style>


  





  