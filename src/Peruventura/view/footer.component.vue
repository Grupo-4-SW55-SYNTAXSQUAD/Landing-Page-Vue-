<script>
export default {
  name: "footer-component",
  data() {
    return {
      contactInfo: {
        email: "info@example.com",
        phone: "(123) 456-7890"
      },
      socialLinks: [
        { name: "Facebook", url: "#" },
        { name: "Twitter", url: "#" },
        { name: "Instagram", url: "#" }
      ],
      navigationLinks: [
        {
          label: 'Home',
          to: '#home'
        },
        {
          label: 'About us',
          to: '#about'
        },
        {
          label: 'Services',
          to: '#service'
        },
        {
          label: 'About the team',
          to: '#about-team'
        },
        {
          label: 'Contact',
          to: '#contact'
        }
      ]
    };
  }
};
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <h1 class="title">PERUVENTURA</h1>
      </div>
      <div class="footer-nav">
        <h3>Navigation</h3>
        <ul>
          <li v-for="(link, index) in navigationLinks" :key="index">
            <a :href="link.to">{{ link.label }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: {{ contactInfo.email }}</p>
        <p>Phone: {{ contactInfo.phone }}</p>
        <h3>Follow Us</h3>
        <div class="social-links">
          <a v-for="(socialLink, index) in socialLinks" :key="index" :href="socialLink.url" class="social-link">{{ socialLink.name }}</a>
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
