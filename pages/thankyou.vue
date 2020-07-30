<template>
  <div id="thank_you" class="panel box">
    <div class="in">
      <h2>THANK YOU! 😍</h2>
      Congratulations! 🥳 You are subscribed successfully!
      <br />
      <br />
      Maybe you joined to receive weekly updates about Programming in JavaScript
      or maybe you joined to learn about the Security or maybe you want to take
      my opinion on what’s going around the internet. I want to have a strong
      opinion about things.
      <br />
      <br />
      I explored that I learn best while teaching and guiding others and that’s
      the reason behind this weekly Newsletter and Website.
      <br />
      <br />
      I explored t Using Gmail? Let’s be friends! In Gmail, hover up my name and
      this hover panel will appear. Click “Add to Contacts”. This helps to avoid
      email to get lost into Gmail!
      <br />
      <br />
      <b>Now I have a question for you! </b><br />
      Is there something you are trying to learn now?<br />
      Maybe you wanted me to write about a specific topic?
      <br />
      <br />
      Please tell me by replying to the email which is opened in your inbox or
      submit this <nuxt-link to="/#contact">contact</nuxt-link> form.
      <br />
      <br />
      Every Thursday, I send out an email with new blog posts and tutorials. So
      keep an eye on your inbox this Thursday.
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Thank You! 😍'
    }
  }
}
</script>
<style>
#thank_you div a {
  transition: 250ms;
}

#thank_you div a:hover {
  color: #ff4343;
}
</style>
