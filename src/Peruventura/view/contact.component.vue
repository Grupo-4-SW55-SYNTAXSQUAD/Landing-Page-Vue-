<script >

  export default{
    name:"contact-component",
    data(){
      return{
        form:{
          name:"",
          email:"",
          message:"",
        },

        methods: {
          handleSubmit() {
            console.log("Form submitted:", this.form);
            this.form.name = "";
            this.form.email = "";
            this.form.message = "";
          },
        }
      }

    }
  }
</script>

<template>
    <section class="contact container">
      <div class="contact-container ">
        <div class="contact__title text-center">
          <h1><span class="title-span">CONTACT</span></h1>
        </div>
        <div class="form-container flex flex-column align-items-center p-3 max-w-30rem  shadow-1">
          <pv-image class="form-img" src="../src/assets/images/contact.png"></pv-image>
          <form class="form-content w-full flex flex-column align-items-center ">
            <div class="form-group ">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" required></textarea>
            </div>
            <button type="submit" class="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </section>
</template>

<style scoped>
  .form-container{
    margin: 0 auto;
    background-color: white;
    border: 2px solid red;
    border-radius: 15px;
  }
  .form-img{
    width: 100%;
    height: auto;
    max-width: 100%;
    margin-bottom: 20px;
  }

  .form-group{
    margin-botton:15px;
  }
  .form-group label {
    width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-group textarea {
    height: 150px;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .submit-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
</style>