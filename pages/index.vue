<template>
  <div class="home blog">
    <!--// BEGIN #control //-->
    <header id="control">
      <div id="side">
        <!-- BEGIN #logo-->
        <div id="logo">
          <h1>
            <a href="https://www.muhaddis.info/"
              ><img src="@/assets/images/logo.png" alt="Muhaddis"
            /></a>
          </h1>
          <h4 class="sub">
            <vue-typer
              :repeat="Infinity"
              :text="['Security Researcher', 'Web Developer']"
              erase-style="backspace"
              :erase-delay="50"
              :pre-type-delay="500"
              :type-delay="100"
              caret-animation="expand"
            ></vue-typer>
          </h4>
        </div>
        <!-- END #logo -->

        <!-- BEGIN #nav -->
        <nav id="nav">
          <!-- Screen Size > 880px -->
          <ul class="regular">
            <li class="nav_1">
              <a v-smooth-scroll href="#profile">Profile<span></span></a>
            </li>
            <li class="nav_2">
              <a v-smooth-scroll href="#skills">Skills<span></span></a>
            </li>
            <li class="nav_3">
              <a v-smooth-scroll href="#works">Works<span></span></a>
            </li>
            <li class="nav_5">
              <a v-smooth-scroll href="#blog">Blog<span></span></a>
            </li>
            <li class="nav_6">
              <a v-smooth-scroll href="#contact">Contact<span></span></a>
            </li>
          </ul>

          <!-- Screen Size < 880px -->
          <ul class="mobile">
            <li class="nav_1">
              <a v-smooth-scroll href="#profile"><span></span></a>
            </li>
            <li class="nav_2">
              <a v-smooth-scroll href="#skills"><span></span></a>
            </li>
            <li class="nav_3">
              <a v-smooth-scroll href="#works"><span></span></a>
            </li>
            <li class="nav_5">
              <a v-smooth-scroll href="#blog"><span></span></a>
            </li>
            <li class="nav_6">
              <a v-smooth-scroll href="#contact"><span></span></a>
            </li>
          </ul>
        </nav>
        <!-- END #nav -->
      </div>
    </header>
    <!--// END #control //-->

    <!--// BEGIN #main //-->
    <section id="main">
      <div id="content">
        <!-- BEGIN #profile (panel 1) -->

        <div id="profile" class="panel">
          <img
            id="photo"
            src="https://muhaddis.info/wp-content/uploads/2016/06/Muhaddis-700x1050.jpg"
            alt="Muhaddis"
          />

          <div class="box">
            <div class="in">
              <div class="one-half no-margin">
                <h5>Who Am I?</h5>

                I make it my goal to look not only to my own interests, but also
                to the interests of others. Browse my
                <a href="#works">Portoflio</a> and discover the creative side of
                my being. Enough said for now, start scrolling.
              </div>

              <div class="one-half no-margin column-last">
                <h5>Roaming Outside the Box</h5>

                I'm never satisfied with the current trends and fads flying
                around the web. Creativity, I believe will never progress unless
                we climb outside the confining box of simplemindedness.
              </div>
            </div>
          </div>

          <div id="vcard" class="box">
            <div class="in">
              <div class="three-fourths">
                <h4>Grab a Quick Copy of my vCard</h4>
              </div>

              <div class="one-fourth column-last">
                <a
                  href="https://docs.google.com/uc?authuser=0&id=0B-KqdveSClD-T1BTMUNCdVdKYmM&export=download"
                  class="btn"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- BEGIN #skills (panel 2) -->

        <div id="skills" class="panel box">
          <div class="in">
            <h2>Skills</h2>

            <p>Here below some of my Interests and Skills are listed below.</p>

            <div class="clearfix"></div>

            <div class="skill-set expertism">
              <h3 class="line">Expertism</h3>
              <div class="skill level_9-5">
                <h5>
                  Cyber Security / Security Engineering / Penetration Testing /
                  Application Security
                </h5>
                <div class="bar">
                  <div><span>95%</span></div>
                </div>
              </div>

              <div class="skill level_8">
                <h5>
                  Backend Web Development / PHP / Node.js / Express / Laravel /
                  Django
                </h5>
                <div class="bar">
                  <div><span>80%</span></div>
                </div>
              </div>

              <div class="skill level_8-5">
                <h5>
                  Frontend Web Development / JavaScript / jQuery / Vue.js /
                  React.js
                </h5>
                <div class="bar">
                  <div><span>85%</span></div>
                </div>
              </div>

              <div class="skill level_7">
                <h5>Database / SQL / NoSQL / MySQL / MongoDB / Firebase</h5>
                <div class="bar">
                  <div><span>70%</span></div>
                </div>
              </div>

              <div class="skill level_7-5">
                <h5>
                  Designing / Material Design / Bootstrap / Bulma / Tailwind
                </h5>
                <div class="bar">
                  <div><span>75%</span></div>
                </div>
              </div>

              <div class="skill level_9">
                <h5>REST APIs / GraphQL(Apollo) / Open Source / PWAs</h5>
                <div class="bar">
                  <div><span>90%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- END #skills (panel 2) -->

        <!-- BEGIN #works (panel 3) -->

        <div id="works" class="panel box">
          <div class="in">
            <h2>Works</h2>

            <div id="work_wrap">
              <p>
                The best preparation for good work tomorrow is to do good work
                today. Choose a job you love, and you will never have to work a
                day in your life.<br />
                Below the list of works done by me.
              </p>

              <div id="toggle-14" class="toggle">
                <h3 id="acknowledgements">
                  <a href="#acknowledgements" class="work-jump"
                    >Cyber Security Researching</a
                  >
                </h3>
                <div>
                  <ul class="work_items">
                    <li
                      id="post-445"
                      class="post-445 work type-work status-publish format-standard has-post-thumbnail hentry tag-bug-bounty tag-bug-hunting tag-bugcrowd tag-cyber-security tag-hackerone tag-hackerone-reports tag-idor tag-microsoft tag-minecraft tag-msrc tag-security-vulnerability tag-web-security tag-xss works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/18th-acknowledgement-from-Microsoft/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2018/07/Microsoft-Hall-of-Fame-370x249.png"
                          alt="18th Acknowledgement From Microsoft"
                      /></a>
                    </li>

                    <li
                      id="post-397"
                      class="post-397 work type-work status-publish format-standard has-post-thumbnail hentry tag-account-takeover tag-cyber-security tag-information-system-security tag-whitehat-hacking works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/17th-acknowledgement-sony/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/11/Sony-Hall-of-Thanks-370x395.jpg"
                          alt="17th Acknowledgement From Sony"
                      /></a>
                    </li>

                    <li
                      id="post-385"
                      class="post-385 work type-work status-publish format-standard has-post-thumbnail hentry tag-acknowledgement tag-bug-bounty tag-bug-hunter tag-bug-hunter-google tag-bug-hunter-university tag-cyber-security tag-ethical-hacking tag-google tag-google-vrp tag-hack tag-hack-the-world tag-hacking tag-hacktober tag-hall-of-fame tag-iot tag-newsletter tag-security tag-session-management tag-technology tag-vulnerability tag-vulnerability-reward-program tag-whitehat works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/16th-acknowledgement-google/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/10/Google-VRP-Profile-370x260.jpg"
                          alt="16th Acknowledgement From Google"
                      /></a>
                    </li>

                    <li
                      id="post-370"
                      class="post-370 work type-work status-publish format-standard has-post-thumbnail hentry tag-adobe tag-bug-hunter tag-bug-hunting tag-bugbounty tag-cyber-security tag-dmarc tag-email-spoofing tag-emkei tag-ethical-hacker tag-hacker tag-hackerone tag-penetration-testing tag-responsible-disclosure tag-spf tag-whitehat works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/14th-acknowledgement-adobe/ "
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/09/Adobes-Hall-of-Fame-370x298.jpg"
                          alt="14th Acknowledgement From Adobe"
                      /></a>
                    </li>

                    <li
                      id="post-364"
                      class="post-364 work type-work status-publish format-standard has-post-thumbnail hentry tag-alienvault tag-certificate-of-appreciation tag-cyber-security-researcher tag-cyber-security-researching tag-ethical-hacking tag-hacker tag-hackerone tag-hackers tag-hacking tag-owasp tag-security tag-security-bypass tag-web-application-pentesting tag-whitehat tag-xss works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/13th-acknowledgement-alienvault/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/09/Alien-Vault-370x286.jpg"
                          alt="13th Acknowledgement From AlienVault"
                      /></a>
                    </li>

                    <li
                      id="post-361"
                      class="post-361 work type-work status-publish format-standard has-post-thumbnail hentry tag-apis tag-authentication tag-authorization tag-bug-bounty tag-bug-hunting tag-bugcrowd tag-business-logical-flaws tag-coding tag-cookies tag-csrf tag-data tag-encrypting tag-hackerone tag-hacking tag-idor tag-logical-flaws tag-session-management tag-xsrf tag-xss works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/12th-acknowledgment-unsplash/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/09/Unsplash-Recommendation-370x135.jpg"
                          alt="12th Acknowledgment From Unsplash"
                      /></a>
                    </li>

                    <li
                      id="post-355"
                      class="post-355 work type-work status-publish format-standard has-post-thumbnail hentry tag-apis tag-broken-authentication-session-management-flaw tag-cookies tag-data-stealing tag-hackerone tag-hacking tag-infosec tag-magix tag-open-redirection tag-security-blog tag-security-researcher tag-vulnerablity tag-xss works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/11th-acknowledgement-magix/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/09/Magix-Hall-Of-Fame-370x251.jpg"
                          alt="11th Acknowledgement From MAGIX"
                      /></a>
                    </li>

                    <li
                      id="post-299"
                      class="post-299 work type-work status-publish format-standard has-post-thumbnail hentry tag-acknowledgement tag-bugcrowd tag-cyber-security tag-hackerone tag-hall-of-fame tag-hubspot tag-javascript tag-security-researcher tag-xss works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/10th-acknowledgement-hubspot/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/05/Hubspot-Hall-of-Fame-370x211.jpg"
                          alt="10th Acknowledgement From HubSpot"
                      /></a>
                    </li>

                    <li
                      id="post-281"
                      class="post-281 work type-work status-publish format-standard has-post-thumbnail hentry tag-acknowledgement tag-black-hat tag-broken-auth tag-broken-authentication-session-management-flaw tag-bug-hunting tag-cookie-replay tag-cyber-security tag-hacker tag-hacking tag-hall-of-fame tag-jet-com tag-muhaddi tag-white-hat tag-zero-days works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/9th-acknowledgement-jet/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/03/JET-HOF-370x212.png"
                          alt="9th Acknowledgement From Jet"
                      /></a>
                    </li>

                    <li
                      id="post-225"
                      class="post-225 work type-work status-publish format-standard has-post-thumbnail hentry tag-acknowledgement tag-bounty tag-bug-bounty tag-bugcrowd tag-bugs tag-certificate tag-ddos tag-dorks tag-flaws tag-hackerone tag-hacking tag-hall-of-fame tag-haxer tag-injection tag-intel tag-intel-corp tag-issues tag-leets tag-secure-intel tag-security tag-smtp tag-sql tag-sqli tag-vulnerabilities tag-web-application tag-xss works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/7th-acknowledgement-from-inflectra/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/02/Inflectra-Acknowledgement-370x211.png"
                          alt="7th Acknowledgement From Inflectra"
                      /></a>
                    </li>

                    <li
                      id="post-200"
                      class="post-200 work type-work status-publish format-standard has-post-thumbnail hentry tag-acknowledgement tag-bounty tag-bug-bounty tag-bugcrowd tag-bugs tag-certificate tag-ddos tag-dorks tag-flaws tag-hackerone tag-hacking tag-hall-of-fame tag-haxer tag-injection tag-intel tag-intel-corp tag-issues tag-leets tag-secure-intel tag-security tag-smtp tag-sql tag-sqli tag-vulnerabilities tag-web-application tag-xss works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/6th-acknowledgement-intel/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/02/Intel-370x285.png"
                          alt="6th Acknowledgement From Intel"
                      /></a>
                    </li>

                    <li
                      id="post-194"
                      class="post-194 work type-work status-publish format-standard has-post-thumbnail hentry tag-acknowledgement tag-blackhat tag-bug-bounty tag-bugcrowd tag-ceh tag-click-jacking tag-coder tag-coding tag-csrf tag-cyber tag-cyber-security-researching tag-decode tag-dmarc tag-encode tag-ethical tag-geeks tag-hacker tag-hackerone tag-hacking tag-logical-issues tag-magneto tag-malware tag-security tag-shell tag-smtp tag-spdf tag-spf tag-sqli tag-ssh tag-ssl tag-trojans tag-vulnerability tag-web tag-web-application-pentesting tag-whitehat tag-xss works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/5th-acknowledgement-from-magento/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/02/Magento-370x211.png"
                          alt="5th Acknowledgement From Magento"
                      /></a>
                    </li>

                    <li
                      id="post-175"
                      class="post-175 work type-work status-publish format-standard has-post-thumbnail hentry tag-acknowledgement tag-blackhat tag-ceh tag-click-jacking tag-coder tag-coding tag-cyber tag-cyber-security-researching tag-geeks tag-hacker tag-hacking tag-knb tag-logical-issues tag-malware tag-trojans tag-web tag-web-application-pentesting tag-whitehat works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/4th-acknowledgement-from-knb/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/02/KNB-HOF-370x363.png"
                          alt="4th Acknowledgement From KNB"
                      /></a>
                    </li>

                    <li
                      id="post-162"
                      class="post-162 work type-work status-publish format-standard has-post-thumbnail hentry tag-alert tag-bug tag-bug-bounty tag-bugcrowd tag-cross-site-scripting tag-cyber-security tag-cyber-security-researcher tag-ethical tag-facebook tag-facebook-bug-bounty tag-flaw tag-hackerone tag-muhaddis tag-whatsapp tag-whitehat tag-xss works-acknowledgements"
                    >
                      <a href="https://www.muhaddis.info/work/xss-in-whatsapp/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2016/11/WhatsApp-XSS-370x208.jpg"
                          alt="XSS (Cross Site Scripting) In WhatsApp"
                      /></a>
                    </li>

                    <li
                      id="post-143"
                      class="post-143 work type-work status-publish format-standard has-post-thumbnail hentry tag-alert tag-bug tag-bug-bounty tag-bugcrowd tag-cross-site-scripting tag-cyber-security tag-cyber-security-researcher tag-ethical tag-facebook tag-facebook-bug-bounty tag-flaw tag-hackerone tag-muhaddis tag-whatsapp tag-whitehat tag-xss works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/recorded-future-acknowledgement/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2016/08/Recorded-Future-HOF-370x352.png"
                          alt="3rd Acknowledgement From Recorded Future"
                      /></a>
                    </li>

                    <li
                      id="post-140"
                      class="post-140 work type-work status-publish format-standard has-post-thumbnail hentry tag-alert tag-bug tag-bug-bounty tag-bugcrowd tag-cross-site-scripting tag-cyber-security tag-cyber-security-researcher tag-ethical tag-facebook tag-facebook-bug-bounty tag-flaw tag-hackerone tag-muhaddis tag-whatsapp tag-whitehat tag-xss works-acknowledgements"
                    >
                      <a
                        href="https://www.muhaddis.info/work/legal-robot-acknowledgment/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2016/08/legal-Robot-HOF-370x217.jpg"
                          alt="2nd Acknowledgment From Legal Robot"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="toggle-13" class="toggle">
                <h3 id="graphics-designing">
                  <a href="#graphics-designing" class="work-jump"
                    >Graphics Designing</a
                  >
                </h3>
                <div>
                  <ul class="work_items">
                    <li
                      id="post-206"
                      class="post-206 work type-work status-publish format-standard has-post-thumbnail hentry tag-adobe tag-ai tag-cdr tag-corel tag-designer tag-designing tag-flyer tag-graphics tag-graphics-desig tag-illustrator tag-ispark-16 tag-logo tag-poster tag-psd tag-shandaar tag-vector works-graphics-designing"
                    >
                      <a
                        href=" https://www.muhaddis.info/work/logo-designing-shandaar/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/02/Shandaar-Logo-370x159.jpg"
                          alt="Logo Designing for Shandaar"
                      /></a>
                    </li>

                    <li
                      id="post-207"
                      class="post-207 work type-work status-publish format-standard has-post-thumbnail hentry tag-adobe tag-cdr tag-corel-draw tag-designing tag-flyer tag-graphic-designer tag-graphic-designing tag-graphics tag-illustrator tag-logo tag-pamphlet tag-poster tag-poster-designing tag-printing tag-ps tag-vector works-graphics-designing"
                    >
                      <a
                        href="https://www.muhaddis.info/work/poster-designing-e7consultancy/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/02/E7-Consultancy-370x555.jpg"
                          alt="Poster Designing for E7Consultancy"
                      /></a>
                    </li>

                    <li
                      id="post-179"
                      class="post-179 work type-work status-publish format-standard has-post-thumbnail hentry tag-banner tag-edwardes tag-edwardes-college tag-edwardes-spelling-bee tag-graphic-designing tag-graphics tag-graphics-designing tag-logo tag-penaflex-banner tag-powerpoint tag-presentations tag-slides tag-spelling-bee tag-visual works-graphics-designing"
                    >
                      <a
                        href="https://www.muhaddis.info/work/edwardes-spelling-bee-contest-2016/"
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2017/01/Edwardes-Spelling-Bee-2016-370x260.jpg"
                          alt="Edwardes Spelling Bee Contest, 2016"
                      /></a>
                    </li>

                    <li
                      id="post-132"
                      class="post-132 work type-work status-publish format-standard has-post-thumbnail hentry tag-aii tag-cdr tag-designing tag-graphics tag-graphics-designing tag-illustrator tag-logo tag-ps tag-vector tag-xaster works-graphics-designing"
                    >
                      <a
                        href="https://www.muhaddis.info/work/logo-designing-xaster/ "
                        ><img
                          src="https://www.muhaddis.info/wp-content/uploads/2016/08/Xaster-3-370x370.jpg"
                          alt="Logo and Covers Designing For Xaster"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- END #works (panel 3) -->

        <!-- BEGIN #pricing (panel 4) -->
        <!-- END #pricing (panel 4) -->

        <!-- BEGIN #pricing (panel 5) -->

        <div id="blog" class="panel box">
          <div class="in">
            <h2>Blog</h2>

            <p>
              I believe that an effective way to learn something is by teaching
              others. I share everything I know about security and development
              through my articles and a weekly
              <a href="/Newsletter">newsletter</a>.
            </p>

            <div id="blog_posts">
              <div
                id="post_763"
                class="post-763 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a href="https://www.muhaddis.info/2019-annual-review/"
                    >2019 Annual Review: A Year of Change</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Monday 6, 2020</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_730"
                class="post-730 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a
                    href="https://www.muhaddis.info/5-cost-effective-tips-to-protect-sensitive-information-in-the-workplace/"
                    >5 Cost-Effective Tips to Protect Sensitive Information in
                    the Workplace</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Wednesday 11, 2019</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_720"
                class="post-720 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a
                    href="https://www.muhaddis.info/automate-the-code-formatting-with-eslint-and-prettier/"
                    >Automate the Code Formatting with Eslint and Prettier</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Sunday 17, 2019</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_693"
                class="post-693 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a
                    href="https://www.muhaddis.info/5-blog-ux-tips-to-minimize-bounce-rate/"
                    >5 Blog UX Tips to Minimize Bounce Rate</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Friday 8, 2019</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_681"
                class="post-681 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a
                    href="https://www.muhaddis.info/the-devastating-effects-of-cyber-attacks-on-business-and-how-to-prevent-them/"
                    >The Devastating Effects of Cyber Attacks on Business and
                    How to Prevent Them</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Thursday 7, 2019</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_672"
                class="post-672 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a
                    href="https://www.muhaddis.info/how-to-use-multiple-nuxt-js-applications-on-the-frontend/"
                    >How to use multiple Nuxt.Js Applications on the
                    Frontend?</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Wednesday 30, 2019</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_633"
                class="post-633 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a href="https://www.muhaddis.info/why-i-started-blogging/"
                    >Why I started Blogging</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Saturday 26, 2019</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_669"
                class="post-669 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a
                    href="https://www.muhaddis.info/how-to-go-from-developer-to-agency/"
                    >How to Go from Developer to Agency?</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Friday 25, 2019</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_585"
                class="post-585 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a href="https://www.muhaddis.info/my-inspirations/"
                    >My Inspirations!</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Thursday 24, 2019</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_514"
                class="post-514 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a
                    href="https://www.muhaddis.info/4-ways-to-secure-your-code-to-next-level/"
                    >4 Ways to Secure your Code to Next Level</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Tuesday 14, 2019</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_156"
                class="post-156 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a href="https://www.muhaddis.info/who-am-i/">Who I Am</a>
                </h3>

                <div class="post_date">
                  <h5 class="day">Wednesday 13, 2019</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_476"
                class="post-476 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a
                    href="https://www.muhaddis.info/why-you-should-choose-dedicated-server-hosting-for-business-expansion/"
                    >Why you should choose Dedicated server Hosting for Business
                    Expansion</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Friday 26, 2018</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_438"
                class="post-438 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a href="https://www.muhaddis.info/50-random-facts-about-me/"
                    >50 Random Facts About Me</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Saturday 14, 2018</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_338"
                class="post-338 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a
                    href="https://www.muhaddis.info/not-beginner-programmer-anymore/"
                    >How Do You Know If You Are Not A Beginner Programmer
                    Anymore?</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Friday 1, 2017</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_311"
                class="post-311 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a
                    href="https://www.muhaddis.info/programming-languages-learn-become-hacker/"
                    >Which Programming Languages Should You Learn to Become A
                    Hacker</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Sunday 25, 2017</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_305"
                class="post-305 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a href="https://www.muhaddis.info/guest-bloggers-wanted/"
                    >Write For Us – Guest Bloggers Wanted</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Monday 5, 2017</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>

              <div
                id="post_221"
                class="post-221 post type-post status-publish format-standard hentry category-uncategorized"
              >
                <h3 class="post_title">
                  <a
                    href="https://www.muhaddis.info/advanced-cross-site-scripting-xss-cheat-sheet/"
                    >Advance Cross Site Scripting (XSS) Cheat Sheet</a
                  >
                </h3>

                <div class="post_date">
                  <h5 class="day">Thursday 9, 2017</h5>
                </div>

                <div class="post_content"></div>

                <div class="none"></div>
              </div>
            </div>

            <!--=== Begin Post Navigation ===-->
            <div class="post-navigation">
              <div class="alignleft older"></div>
              <div class="alignright newer"></div>
            </div>
            <!--=== End Post Navigation ===-->
          </div>
        </div>

        <!-- END #pricing (panel 5) -->

        <!-- BEGIN #contact (panel 6) -->

        <div id="contact" class="panel box">
          <div class="in">
            <h2>Contact</h2>

            <div class="two-fifths">
              <p>
                Please don&#8217;t hesitate to contact me for more information
                about my work. I will reply when I&#8217;m available.
              </p>

              <address>
                Email: Ask@Muhaddis.Info
              </address>

              <address></address>

              <ul id="social">
                <li class="facebook">
                  <a href="http://facebook.com/MuhaddiMu" target="_blank"
                    >Facebook</a
                  >
                </li>
                <li class="twitter">
                  <a href="http://twitter.com/MuhaddiMu" target="_blank"
                    >Twitter</a
                  >
                </li>
                <li class="linkedin">
                  <a
                    href="https://www.linkedin.com/in/MuhaddiMu"
                    target="_blank"
                    >LinkedIn</a
                  >
                </li>
              </ul>
            </div>

            <div class="three-fifths column-last">
              <!-- BEGIN #contact_form -->
              <form
                id="contact_form"
                onsubmit="return validate_form()"
                method="post"
              >
                <p>
                  <label>Name</label>
                  <input id="name" type="text" name="name" />
                </p>

                <p>
                  <label>Email</label>
                  <input id="email" type="text" name="email" />
                </p>

                <p>
                  <label>Message</label>
                  <textarea id="message" rows="8" cols="20"></textarea>
                </p>

                <button
                  id="submit_button"
                  type="submit"
                  name="submit"
                  class="btn"
                >
                  <span>Send Message</span>
                </button>
              </form>
              <!-- END #contact_form -->
            </div>
          </div>
        </div>

        <!-- END #contact (panel 6) -->

        <!-- BEGIN #nomore (panel 7) -->
        <div id="nomore" class="panel box">
          <div class="in center">
            <h2>No more, where are you going?</h2>

            <h5>
              <a href="#profile">Go back to top</a> or use the menu to your left
              to navigate.
            </h5>
          </div>
        </div>

        <!-- END #nomore (panel 7) -->
      </div>
    </section>
    <!--// BEGIN #main //-->

    <!--// BEGIN #footer //-->
    <footer id="footer">
      <p class="copy">
        &copy; Muhaddis. All rights reserved Muhaddis. Powered by WordPress.
      </p>
    </footer>
    <!--// END #footer //-->

    <!--// BEGIN .vcard_success //-->
    <div class="vcard_success"><h4>Thanks for downloading!</h4></div>
    <!--// END vcard_success //-->

    <!--// BEGIN .jump //-->
    <a href="#main" class="jump">Top</a>
    <!--// END .jump //-->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.clearfix:after {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0;
}

.clearfix {
  *display: inline-block;
  height: 1%;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  line-height: 1;
}
#side li,
#social li {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
:focus {
  outline: 0;
}
ins,
a {
  text-decoration: none;
}
a,
input[type='submit'],
button[type='submit'] {
  cursor: pointer;
}
del {
  text-decoration: line-through;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*========================================================

	BEGIN Main

========================================================*/

address,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

address {
  color: #fff;
}

p {
  margin-bottom: 20px;
}
a {
  color: #fff;
  font-style: italic;
  text-decoration: none;
}

input,
textarea,
select {
  vertical-align: middle;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
button {
  padding: 0;
  border: none;
  background: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #fff;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-weight: 400;
  margin-bottom: 25px;
  line-height: 1em;
  letter-spacing: 2px;
}

h1 {
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 7px;
  line-height: 1.2em;
}

h1 span {
  font-weight: 300;
}

h2 {
  font-size: 24px;
  line-height: 1.6em;
  text-transform: uppercase;
}

h3 {
  font-size: 20px;
  line-height: 1.6em;
  letter-spacing: 0;
}

h4 {
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
}

h5 {
  font-size: 12px;
  font-weight: 300;
  line-height: 1.7em;
  text-transform: uppercase;
}

h6 {
  font-size: 10px;
}

hr {
  border: 1px solid #fff;
}

iframe,
object,
embed {
  width: 100%;
  max-height: 100%;
  float: left;
}

.center {
  text-align: center;
}

.line {
  width: 100%;
  clear: both;
  padding-bottom: 20px;
  margin-bottom: 20px;
  background: url('~assets/images/sep.png') bottom left repeat-x;
}

.under {
  text-decoration: underline;
}

.none {
  display: none;
}

.jump {
  color: #fff;
  font-size: 10px;
  font-style: normal;
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;
  width: 30px;
  height: 25px;
  padding: 5px;
  display: block;
  position: fixed;
  bottom: 30px;
  right: 30px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  -webkit-box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
  box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
  background-color: rgba(0, 0, 0, 0.8);
}

img {
  max-width: 100%;
  height: auto;
}

/*========================================================

	BEGIN Layout & Global Elements

========================================================*/

#control {
  width: 34%;
  min-width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
  box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
  background-color: rgba(0, 0, 0, 0.8);
}

#control #side {
  width: 240px;
  padding: 78px 30px 0 30px;
  float: right;
}

#main {
  width: 63%;
  float: right;
}

#main #content {
  max-width: 660px;
  padding: 0 30px 0 0;
  position: relative;
}

/* Box */

.panel {
  padding-top: 78px;
  margin-bottom: 350px;
  position: relative;
}

.box {
  color: #cacdce;
}

.box .in {
  padding: 30px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
}

#main img,
.box .in {
  max-width: 100%;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  -webkit-box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
  box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
}

/* Columns */

.full {
  width: 100%;
  clear: both;
  margin-bottom: 25px;
  overflow: hidden;
}
.one-half,
.one-third,
.two-thirds,
.one-fourth,
.three-fourths,
.one-fifth,
.two-fifths,
.three-fifths,
.four-fifths,
.one-sixth {
  float: left;
  position: relative;
  margin-right: 4%;
  margin-bottom: 25px;
  overflow: hidden;
}
.no-margin {
  margin-bottom: 0;
}
.one-half {
  width: 48%;
}
.one-third {
  width: 30.66%;
}
.two-thirds {
  width: 65.1%;
}
.one-fourth {
  width: 22%;
}
.three-fourths {
  width: 74%;
}
.one-fifth {
  width: 16.8%;
}
.two-fifths {
  width: 37.2%;
}
.three-fifths {
  width: 54.8%;
}
.four-fifths {
  width: 78.8%;
}
.column-last {
  margin-right: 0 !important;
  clear: right;
}

/* Buttons */

.btn {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  color: #fff !important;
  text-transform: uppercase;
  padding: 4px 15px;
  margin: 0 10px 10px 0;
  display: inline-block;
  border: none;
  background: #323439;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

.large {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding: 4px 20px;
}

.regular {
  font-size: 12px;
}

.small {
  height: 16px;
  line-height: 16px;
  padding: 4px 10px;
}

/*========================================================

	BEGIN Side

========================================================*/

#side #logo {
  text-align: right;
}

#side #logo h1 {
  overflow: hidden;
  margin-bottom: 10px;
}

#side #logo a {
  font-style: normal;
  text-decoration: none;
  display: block;
  float: right;
}

#side #logo .plain_text {
  margin: -6px -7px 10px 0;
}

#side #nav {
  width: 100%;
  margin-top: 60px;
  overflow: hidden;
}

#side #nav .mobile {
  display: none;
}

#side #nav ul li {
  margin-bottom: 30px;
  float: right;
  clear: both;
}

#side #nav ul li a,
#side #nav ul li span {
  display: block;
  float: right;
}

#side #nav ul li a {
  font-size: 12px;
  font-style: normal;
  text-align: right;
  line-height: 17px;
}

#side #nav ul li span {
  width: 26px;
  height: 18px;
  margin-left: 10px;
  display: block;
}

#side #nav ul .nav_1 span {
  height: 17px;
  background: url('~assets/images/nav.png') top right no-repeat;
}

#side #nav ul .nav_2 span {
  height: 16px;
  background: url('~assets/images/nav.png') right -47px no-repeat;
}

#side #nav ul .nav_3 span {
  height: 21px;
  background: url('~assets/images/nav.png') right -93px no-repeat;
}

#side #nav ul .nav_4 span {
  height: 22px;
  background: url('~assets/images/nav.png') right -141px no-repeat;
}

#side #nav ul .nav_5 span {
  height: 23px;
  background: url('~assets/images/nav.png') right -193px no-repeat;
}

#side #nav ul .nav_6 span {
  height: 16px;
  background: url('~assets/images/nav.png') bottom right no-repeat;
}

/* Secondary Nav */

#secondary_nav {
  float: right;
  padding-bottom: 30px;
  margin-top: 30px;
}

#secondary_nav ul {
  list-style-type: none;
}

#secondary_nav ul li {
  float: left;
  margin-left: 10px;
  position: relative;
}

#secondary_nav ul li a {
  font-style: normal;
  font-size: 10px;
  text-transform: uppercase;
  padding-left: 10px;
}

#secondary_nav ul li span {
  opacity: 0.5 !important;
}

#secondary_nav ul li:first-child span {
  display: none;
}

/* Sub */

#secondary_nav ul ul {
  min-width: 150px;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  margin-right: -20px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
}

#secondary_nav ul ul li {
  width: 100%;
  margin-left: 0;
  float: left;
  clear: both;
  margin-top: 15px;
  line-height: 1;
}

#secondary_nav ul ul li:first-child {
  margin-top: 0;
}

#secondary_nav ul ul li a {
  width: 100%;
  padding-left: 0;
  display: block;
  text-align: right;
}

#secondary_nav ul ul li span {
  display: none;
}

/* Active/Current */

.nav_on,
.active,
.current_page_item,
.current-menu-item {
  opacity: 1 !important;
}

/*========================================================

	BEGIN Content

========================================================*/

#content {
}

/*=============================
	
		BEGIN Profile
	
	=============================*/

#profile #photo {
  margin-bottom: 20px;
}

#profile p {
  margin-bottom: 0;
}

/* vCard */

#vcard .in {
  padding-bottom: 0;
}

#vcard .in > div {
  margin-bottom: 0;
}

#vcard .btn {
  width: 72%;
  text-align: center;
  padding-left: 14%;
  padding-right: 14%;
}

#vcard h4 {
  line-height: 36px;
  margin-bottom: 30px;
}

.vcard_success {
  width: 200px;
  height: 70px;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 30px;
  margin: -65px 0 0 -130px;
  text-align: center;
  display: none;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  -webkit-box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
  box-shadow: 0px 1px 7px 0px rgba(00, 00, 00, 0.7);
  background-color: rgba(0, 0, 0, 0.8);
}

/*=============================
	
		BEGIN Skills
	
	=============================*/

.skill {
  margin-bottom: 30px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

.skill .bar {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
  height: 44px;
  line-height: 44px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  margin-bottom: 10px;
  background: #323439;
}

.skill .bar div {
  height: 44px;
  padding: 0 4%;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

.level_1 .bar div {
  width: 2%;
}
.level_2 .bar div {
  width: 12%;
}
.level_3 .bar div {
  width: 22%;
}
.level_4 .bar div {
  width: 32%;
}
.level_5 .bar div {
  width: 42%;
}
.level_6 .bar div {
  width: 52%;
}
.level_7 .bar div {
  width: 62%;
}
.level_7-5 .bar div {
  width: 67%;
}
.level_8 .bar div {
  width: 72%;
}
.level_8-5 .bar div {
  width: 77%;
}
.level_9 .bar div {
  width: 82%;
}
.level_9-5 .bar div {
  width: 87%;
}
.level_10 .bar div {
  width: 92%;
}

.skill h5,
.skill h6 {
  margin-bottom: 5px;
}

.skill span {
  font-size: 14px;
  text-align: right;
  display: inline-block;
  float: right;
}

.skill-set {
  margin-bottom: 15px;
  clear: both;
}

/*=============================
	
		BEGIN Works
	
	=============================*/

#works ul {
  width: 104%;
  overflow: hidden;
}

#works ul li {
  width: 46%;
  padding-right: 4%;
  margin-bottom: 10px;
  overflow: hidden;
  float: left;
}

#works ul li a {
  display: block;
  font-style: normal;
}

#works ul li a img {
  float: left;
}

#works .ui-accordion-content {
  padding: 20px 0 0 0;
  overflow: hidden;
}

#works ul li .info {
  clear: both;
}

#works ul li .work_vid {
  margin-bottom: 10px;
  overflow: hidden;
}

#works ul li img,
#works ul li .info h4 {
  margin-bottom: 10px;
}

#works ul li .info h4 a {
  font-style: normal;
}

#last {
  display: none;
}

/* Transitions */

.masonry {
  -webkit-transition-property: height, width;
  -moz-transition-property: height, width;
  -ms-transition-property: height, width;
  -o-transition-property: height, width;
  transition-property: height, width;
}

.masonry-brick {
  -webkit-transition-duration: 0.7s;
  -moz-transition-duration: 0.7s;
  -ms-transition-duration: 0.7s;
  -o-transition-duration: 0.7s;
  transition-duration: 0.7s;
  -webkit-transition-property: left, right, top;
  -moz-transition-property: left, right, top;
  -ms-transition-property: left, right, top;
  -o-transition-property: left, right, top;
  transition-property: left, right, top;
}

/* Accordion */

.ui-accordion {
  width: 100%;
}

.ui-accordion .ui-accordion-header {
  color: #525252;
}

.ui-accordion .ui-accordion-header {
  color: #686b71;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  position: relative;
  zoom: 1;
  margin: 0;
  display: block;
  padding: 0 20px;
  margin-top: 20px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: #323439;
}

.ui-accordion .ui-accordion-li-fix {
  display: inline;
}

.ui-accordion .ui-accordion-header-active {
  color: #fff;
  background: #ff4343;
}

.ui-accordion .ui-accordion-header .ui-icon {
  position: absolute;
  left: 0.5em;
  top: 50%;
  margin-top: -8px;
}

.ui-accordion .ui-accordion-content {
  border-top: 0;
  position: relative;
  overflow: auto;
  display: none;
  zoom: 1;
  padding: 20px;
}

.ui-accordion .ui-accordion-content-active {
  display: block;
}

/*=============================
	
		BEGIN Pricing
	
	=============================*/

#pricing h5 {
  margin-bottom: 15px;
}

.check li {
  padding-left: 20px;
  margin-bottom: 15px;
  list-style-type: none;
  background: url('~assets/images/check.png') left 4px no-repeat;
}

/*=============================
	
		BEGIN Blog
	
	=============================*/

/* Home Blog */

#blog_posts .post {
  width: 100%;
  clear: both;
  float: left;
  padding-top: 40px;
  margin-top: 10px;
  background: url('~assets/images/sep.png') top left repeat-x;
}

#blog_posts .post .post_left {
  width: 35%;
  float: left;
}

#blog_posts .post .post_right {
  width: 60%;
  float: right;
}

/* Single Post */

.post .post_date h5 {
  color: #777 !important;
}

.post .post_title {
  margin-bottom: 10px;
}

.post .post_title a {
  font-style: normal;
}

.post .post_thumb,
.post .post_video {
  margin-bottom: 30px;
  overflow: hidden;
}

/* Image */

.format-image img {
  max-width: 100%;
  height: auto;
}

/* Video */

/* Quote */

.format-quote .quote {
  line-height: 1.8em;
  font-style: italic;
}

.format-quote .author,
.format-quote .author a {
  color: #757575;
  font-style: normal;
}

/*=============================
	
		BEGIN Contact
	
	=============================*/

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
  font-weight: 300;
  font-style: italic;
  position: absolute;
  margin: 10px 0 0 10px;
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

/* Social */

#social {
  margin-top: 30px;
}

#social li {
  float: left;
  margin: 0 10px 10px 0;
}

#social li a {
  width: 32px;
  height: 32px;
  display: block;
  text-indent: -9999px;
}

#social .facebook a {
  background: url('~assets/images/icons/social_facebook.png') top left no-repeat;
}
#social .twitter a {
  background: url('~assets/images/icons/social_twitter.png') top left no-repeat;
}
#social .linkedin a {
  background: url('~assets/images/icons/social_linkedin.png') top left no-repeat;
}

/*=============================
	
		BEGIN No More
	
	=============================*/

h5 {
  margin-bottom: 10px;
}

/*========================================================

	BEGIN Widgets - If Widgets are turned on

========================================================*/

#widgets {
  padding-top: 30px;
  margin-top: 30px;
  clear: both;
  background: url('~assets/images/sep.png') top left repeat-x;
}

.widget {
  width: 100%;
  text-align: right;
  padding-bottom: 25px;
  margin-bottom: 25px;
  clear: both;
  background: url('~assets/images/sep.png') bottom left repeat-x;
}

.widget input[type='text'] {
  height: 15px;
  padding: 10px 15px;
  border: none;
  outline: none;
}

.widget ul a {
  font-style: normal;
}

/* Calendar */

.widget_calendar #wp-calendar {
  width: 100%;
  border: 1px solid #222;
}

.widget_calendar #wp-calendar a {
  color: #fff;
}

.widget_calendar #wp-calendar caption {
  text-align: right;
  padding-bottom: 10px;
}

.widget_calendar tbody .pad {
}

.widget_calendar #wp-calendar > tbody > tr > td > a {
  font-size: 14px;
  font-weight: bold;
}

.widget_calendar thead > tr > th {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #222;
  border-top: none;
}

.widget_calendar tbody > tr > td {
  width: 24px;
  height: 24px;
  line-height: 24px;
  color: #a7abad;
  font-size: 11px;
  text-align: center;
  border: 1px solid #222;
}

.widget_calendar tfoot > tr > td > a,
.widget_calendar tfoot > tr > td > a:link,
.widget_calendar tfoot > tr > td > a:visited,
.widget_calendar tfoot > tr > td > a:hover,
.widget_calendar tfoot > tr > td > a:active {
  font-weight: bold;
  font-size: 14px;
}

.widget_calendar tfoot > tr > #prev {
  width: 58px;
  height: 20px;
  text-align: left;
  padding-left: 5px;
}

.widget_calendar tfoot > tr > #next {
  width: 58px;
  height: 20px;
  text-align: right;
  padding-right: 5px;
}

/*========================================================

	BEGIN Footer

========================================================*/

#footer {
  width: 63%;
  height: 42px;
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100000;
}

.copy {
  color: #fff;
  font-size: 11px;
  font-weight: 300;
  text-transform: uppercase;
  text-align: right;
  line-height: 42px;
  padding-right: 30px;
  margin-bottom: 0;
  text-align: right;
}

div.in > ul {
  display: block;
  list-style-type: disc;
  padding-left: 40px;
  margin-bottom: 20px;
}
div.in > ol {
  display: block;
  list-style-type: decimal;
  margin-bottom: 20px;
  padding-left: 40px;
}

/*========================================================

	BEGIN Unused WP Styls

========================================================*/

/*================================================================================================================

	RESPONSIVE

================================================================================================================*/

@media only screen and (max-width: 880px) {
  #control {
    width: 100%;
    height: 150px;
    top: 0;
    right: 0;
    bottom: auto;
    z-index: 10001;
  }

  #control #side {
    width: 88%;
    padding: 20px 6% 0 6%;
    float: none;
    overflow: hidden;
  }

  #control #side #logo {
    width: 100%;
    float: left;
    text-align: center;
  }

  #control #side #logo h1 {
    font-size: 24px;
    margin: 0 -5px 8px 0;
    text-align: center;
  }

  #control #side #logo .sub {
    font-size: 12px;
    margin-bottom: 15px;
  }

  #control #side #logo a {
    width: 214px;
    margin: 0 auto;
    float: none;
  }

  #control #side #nav {
    float: left;
    position: relative;
    margin: 0;
  }

  #control #side #nav .mobile {
    clear: left;
    float: left;
    margin: 0;
    padding: 0;
    position: relative;
    left: 50%;
    text-align: center;
    display: block;
  }
  #control #side #nav .regular {
    display: none;
  }

  #control #side #nav ul li {
    width: auto;
    display: block;
    clear: none;
    float: left;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    right: 50%;
    height: 26px;
    margin: 0 10px;
  }

  #control #side #nav ul li span {
    margin: 0;
  }

  #secondary_nav {
    width: 100%;
    height: 12px;
    padding-top: 16px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('~assets/images/trans.png') repeat;
  }

  #secondary_nav > ul {
    clear: left;
    float: left;
    margin: 0;
    padding: 0;
    position: relative;
    left: 50%;
    text-align: center;
    display: block;
  }

  #secondary_nav > ul > li {
    width: auto;
    display: block;
    clear: none;
    float: left;
    list-style: none;
    position: relative;
    right: 50%;
  }

  #secondary_nav ul li ul {
    left: 0;
    margin-right: 0;
  }

  #secondary_nav ul li ul li a {
    text-align: left;
  }

  #main {
    width: 100%;
    opacity: 1 !important;
  }

  #main #content {
    max-width: none;
    padding: 0 20px;
  }

  .panel {
    padding-top: 180px;
  }

  .skill .bar {
    height: 32px;
    line-height: 32px;
  }

  .skill .bar div {
    height: 32px;
  }

  #widgets {
    display: none;
  }
}

@media only screen and (max-width: 540px) {
  .one-half,
  .one-third,
  .two-thirds,
  .one-fourth,
  .three-fourths,
  .one-fifth,
  .two-fifths,
  .three-fifths,
  .four-fifths,
  .one-sixth {
    width: 96%;
  }

  .skill .bar {
    height: 24px;
    line-height: 24px;
  }

  .skill .bar div {
    height: 24px;
  }

  .post_left,
  .post_right {
    width: 100% !important;
  }
}

@media only screen and (max-width: 320px) {
  #works ul li {
    width: 100%;
  }
}
</style>
