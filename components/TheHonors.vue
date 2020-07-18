<template>
  <div id="honors" class="panel box">
    <div class="in">
      <h2>Achievements</h2>

      <div>
        <p>
          <i
            >List of my Security discoveries and accomplishments. Tap or mouse
            hover on the thumbnail to know more</i
          >
        </p>

        <ul>
          <TheProjectItem
            project-cover-image="Microsoft-HOF.png"
            project-caption="Acknowledged by Microsoft for reporting Security vulnerabilities in one of Microsoft Acquisition (Minecraft)."
            project-title="Acknowledged By Microsoft"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="Sony-HOF.jpg"
            project-caption="Acknowledged by Sony for reporting multiple Security vulnerabilities in Sony web applications."
            project-title="Acknowledged By Sony"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="Google-HOF.jpg"
            project-caption="Acknowledged by Google for finding and reporting Security vulnerabilities in Google services."
            project-title="Acknowledged By Google"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="Adobe-HOF.jpg"
            project-caption="Acknowledged by Adobe for reporting Security vulnerability in their web mail server."
            project-title="Acknowledged By Adobe"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="Alien-Vault.jpg"
            project-caption="Acknowledged by Alien Vault for reporting Security vulnerabilities in their systems."
            project-title="Acknowledged By Alien Vault"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="Unsplash.png"
            project-caption="Acknowledged by Unsplash for reporting Security vulnerability in the web application."
            project-title="Acknowledged By Unsplash"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="Magix-HOF.jpg"
            project-caption="Acknowledged by Magix for reporting multiple Security vulnerability in Magix product website."
            project-title="Acknowledged By Magix"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="BugCrowd-HOF.png"
            project-caption="Acknowledged by BugCrowd for reporting Security Vulnerability in CrowdControl."
            project-title="Acknowledged By BugCrowd"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="Hubspot-HOF.jpg"
            project-caption="Acknowledged by Hubspot for reporting Security vulnerability in their website."
            project-title="Acknowledged By Hubspot"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="Inflectra-HOF.png"
            project-caption="Acknowledged by Inflectra for reporting XSS vulnerability in their website."
            project-title="Acknowledged By Inflectra"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="JET-HOF.png"
            project-caption="Acknowledged by Jet for reporting Security Vulnerability in their website."
            project-title="Acknowledged By JET"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="Intel.png"
            project-caption="Acknowledged by Intel for reporting critical Security Vulnerability in Intel's infrastructure"
            project-title="Acknowledged By Intel"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="KNB-HOF.png"
            project-caption="Acknowledged by KNB for reporting Security Vulnerability in their website."
            project-title="Acknowledged By KNB"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="LegalRobot-HOF.jpg"
            project-caption="Acknowledged by Legal Robot for reporting Security Vulnerability in their website."
            project-title="Acknowledged By Legal Robot"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="RecordedFuture-HOF.png"
            project-caption="Acknowledged by Recorded Future for reporting Security Vulnerability in their website."
            project-title="Acknowledged By Recorded Future"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="BugCrowd-HOF.png"
            project-caption="Acknowledged by BugCrowd for reporting Security Vulnerability in CrowdControl."
            project-title="Acknowledged By BugCrowd"
            read-more="https://muhaddis.info"
          />
          <TheProjectItem
            project-cover-image="Europa-HOF.png"
            project-caption="Acknowledged by European Union for reporting security vulnerability in their web server configurations."
            project-title="Acknowledged By European Union"
            read-more="https://cert.europa.eu/cert/newsletter/en/latest_HallOfFame_.html"
          />
          <TheProjectItem
            project-cover-image="DEV-HOF.png"
            project-caption="Acknowledged by DEV for reporting broken Authentication in Dev.to"
            project-title="Acknowledged By DEV"
            read-more="https://dev.to/security"
          />
          <TheProjectItem
            project-cover-image="NPO-HOF.png"
            project-caption="Acknowledged by NPO for reporting security vulnerability that leads to DDoS attack in the website."
            project-title="Acknowledged By NPO"
            read-more="https://over.npo.nl/organisatie/responsible-disclosure"
          />
          <TheProjectItem
            project-cover-image="Gratipay-HOF.png"
            project-caption="Acknowledged by Gratipay for reporting broken Authentication in their website."
            project-title="Acknowledged By Gratipay"
            read-more="https://hackerone.com/gratipay/thanks/2017"
          />
          <TheProjectItem
            project-cover-image="POSTNL-HOF.png"
            project-caption="Acknowledged by POST NL for reporting Click jacking and UI redressing in their website."
            project-title="Acknowledged By POST NL"
            read-more="https://www.postnl.nl/responsible-disclosure/"
          />
          <TheProjectItem
            project-cover-image="Udemy-Ethical-Hacking-Course.jpg"
            project-caption="This certificate verifies that I successfully completed the course Practical Ethical Hacking as taught by Heath Adams on Udemy."
            project-title="Certificate of Completion"
            read-more="https://www.udemy.com/certificate/UC-354d05db-77b8-43c1-85ff-aa06ef319023/"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import TheProjectItem from './TheProjectItem'
export default {
  components: {
    TheProjectItem
  }
}
</script>

<style>
#honors ul {
  column-count: 2;
  width: 100%;
  overflow: hidden;
}

#honors ul li {
  display: inline-block;
  width: 100%;
  overflow: hidden;
}

#honors ul li img {
  max-width: 100%;
  width: 100%;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

@media only screen and (max-width: 600px) {
  #honors ul li {
    width: 100%;
  }
  #honors ul {
    column-count: 1;
    column-gap: 0;
  }
}
</style>
