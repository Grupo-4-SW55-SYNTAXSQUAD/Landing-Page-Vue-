<script>
  export default {
    name:"footer-component",
  }
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <h1 class="title ">PERUVENTURA</h1>
      </div>
      <div class="footer-nav">
        <h3>Navigation</h3>
        <ul>
          <li><router-link :to="{ path: '/', hash: '#home' }">Home</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#about' }">About</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#service' }">Service</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#about-team' }">About Team</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#contact' }">Contact</router-link></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <h3>Follow Us</h3>
        <div class="social-links">
          <a href="#" class="social-link">Facebook</a>
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-nav,
.footer-contact {
  flex: 1;
  min-width: 200px;
  margin: 10px;
}



.footer-nav h3,
.footer-contact h3 {
  margin-bottom: 10px;
  font-size: 18px;
  color: #ffd700;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
}

.footer-nav ul li {
  margin: 5px 0;
}

.footer-nav ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-nav ul li a:hover {
  text-decoration: underline;
}

.footer-contact p,
.footer-contact a {
  margin: 5px 0;
  color: #fff;
  text-decoration: none;
}

.footer-contact a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-link {
  margin: 0 10px;
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-logo,
  .footer-nav,
  .footer-contact {
    margin: 10px 0;
    text-align: center;
  }

  .social-links {
    flex-direction: column;
  }

  .social-link {
    margin: 5px 0;
  }
}
</style>