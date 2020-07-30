<template>
  <div id="contact" class="panel box">
    <div class="in">
      <h2>Contact</h2>

      <div class="two-fifths">
        <p>
          Please don&#8217;t hesitate to contact me for more information about
          my work. I will reply when I&#8217;m available.
        </p>

        <address>
          Email: Ask@Muhaddis.Info
        </address>

        <ul id="social">
          <li class="facebook">
            <a href="https://facebook.com/MuhaddiMu" target="_blank"
              >Facebook</a
            >
          </li>
          <li class="twitter">
            <a href="https://twitter.com/MuhaddiMu" target="_blank">Twitter</a>
          </li>
          <li class="linkedin">
            <a href="https://www.linkedin.com/in/MuhaddiMu" target="_blank"
              >LinkedIn</a
            >
          </li>
          <li class="github">
            <a href="https://github.com/MuhaddiMu" target="_blank">GitHub</a>
          </li>
        </ul>
      </div>

      <div class="three-fifths column-last">
        <form id="contact_form" @submit="SubmitContactForm">
          <p>
            <label
              v-if="
                !InputName.Toggle &&
                  InputName.Value !== null &&
                  InputName.Value == ''
              "
              :class="{
                ErrorLabel: InputName.Error
              }"
              >Name</label
            >
            <input
              id="name"
              v-model="InputName.Value"
              name="Name"
              autocomplete="off"
              type="text"
              :class="{
                Blurred: InputName.hasData,
                ErrorInput: InputName.Error
              }"
              @focus="InputName.Toggle = true"
              @blur="Blur('Name')"
            />
          </p>

          <p>
            <label
              v-if="
                !InputEmail.Toggle &&
                  InputEmail.Value !== null &&
                  InputEmail.Value == ''
              "
              :class="{
                ErrorLabel: InputEmail.Error
              }"
              >Email</label
            >
            <input
              id="email"
              v-model="InputEmail.Value"
              autocomplete="off"
              name="Email"
              type="text"
              :class="{
                Blurred: InputEmail.hasData,
                ErrorInput: InputEmail.Error
              }"
              @focus="InputEmail.Toggle = true"
              @blur="Blur('Email')"
            />
          </p>

          <p>
            <label
              v-if="
                !InputMessage.Toggle &&
                  InputMessage.Value !== null &&
                  InputMessage.Value == ''
              "
              :class="{
                ErrorLabel: InputMessage.Error
              }"
              >Message</label
            >
            <textarea
              id="message"
              v-model="InputMessage.Value"
              name="Message"
              autocomplete="off"
              rows="8"
              cols="20"
              :class="{
                Blurred: InputMessage.hasData,
                ErrorInput: InputMessage.Error
              }"
              @focus="InputMessage.Toggle = true"
              @blur="Blur('Message')"
            ></textarea>
          </p>

          <button id="submit_button" type="submit" class="btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      InputName: { Value: '', Toggle: false, hasData: false, Error: false },
      InputEmail: { Value: '', Toggle: false, hasData: false, Error: false },
      InputMessage: { Value: '', Toggle: false, hasData: false, Error: false },
      isFormValid: false
    }
  },
  methods: {
    Blur(arg) {
      if (arg === 'Name') {
        this.InputName.Toggle = false
        if (this.InputName.Value !== '' && this.InputName.Value !== null) {
          this.InputName.hasData = true
          this.InputName.Error = false
        } else {
          this.InputName.hasData = false
          this.InputName.Error = false
        }
      }
      if (arg === 'Email') {
        this.InputEmail.Toggle = false
        if (this.InputEmail.Value !== '' && this.InputEmail.Value !== null) {
          this.InputEmail.hasData = true
          this.InputEmail.Error = false
        } else {
          this.InputEmail.hasData = false
          this.InputEmail.Error = false
        }
      }
      if (arg === 'Message') {
        this.InputMessage.Toggle = false
        if (
          this.InputMessage.Value !== '' &&
          this.InputMessage.Value !== null
        ) {
          this.InputMessage.hasData = true
          this.InputMessage.Error = false
        } else {
          this.InputMessage.hasData = false
          this.InputMessage.Error = false
        }
      }
    },
    SubmitContactForm(e) {
      e.preventDefault()

      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //eslint-disable-line

      if (this.InputName.Value === '' || this.InputName.Value === null) {
        this.InputName.Error = true
      } else {
        this.isFormValid = true
      }
      if (
        this.InputEmail.Value === '' ||
        this.InputEmail.Value === null ||
        emailRegex.test(this.InputEmail.Value) === false
      ) {
        this.InputEmail.Error = true
      } else {
        this.isFormValid = true
      }
      if (this.InputMessage.Value === '' || this.InputMessage.Value === null) {
        this.InputMessage.Error = true
      } else {
        this.isFormValid = true
      }
    }
  }
}
</script>

<style scoped>
#contact_form {
  width: 100%;
  min-height: 200px;
  position: relative;
  overflow: hidden;
}

#contact_form input,
#contact_form textarea {
  width: 93%;
  height: 40px;
  padding: 0 3%;
  margin: 0 0 20px 0;
  display: block;
  font-size: 14px;
  color: #fff;
  border: none;
  background: #eaeaea;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

#contact_form textarea {
  height: 120px;
  padding-top: 10px;
}

#contact_form label {
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-style: italic;
  position: absolute;
  margin: 10px 0 0 10px;
  color: #a7abad;
}

#contact_form #loader {
  position: absolute;
  bottom: -33px;
  right: 65px;
  display: none;
}

#submit_button {
  line-height: 24px;
}

#send_message {
  color: #9ecb5f;
}

#social {
  margin-top: 30px;
}

#social li {
  float: left;
  margin: 0 10px 10px 0;
  opacity: 0.5;
  transition: 200ms;
}
#social li:hover {
  opacity: 1;
}

#social li a {
  width: 32px;
  height: 32px;
  display: block;
  text-indent: -9999px;
}

#social .facebook a {
  background: url('~assets/images/icons/social_facebook.png') top left no-repeat;
  background-size: 32px 32px;
}
#social .twitter a {
  background: url('~assets/images/icons/social_twitter.png') top left no-repeat;
  background-size: 32px 32px;
}
#social .linkedin a {
  background: url('~assets/images/icons/social_linkedin.png') top left no-repeat;
  background-size: 32px 32px;
}

#social .github a {
  background: url('~assets/images/icons/social_github.png') top left no-repeat;
  background-size: 32px 32px;
}

.ErrorInput {
  background-color: #ff4343 !important;
}

.ErrorLabel {
  color: #fff !important;
}

input[type='text'],
textarea {
  transition: background 250ms;
  -webkit-transition: background 250ms;
  -o-transition: background 250ms;
  transition: background 250ms;
}

input[type='text']:focus,
textarea:focus {
  background-color: #323232 !important;
  color: #fff !important;
}

.Blurred {
  color: #323232 !important;
}
</style>
