<template>
  <div class="privacy-policy">
    <NavBar></NavBar>

    <section id="container-content">
      <div class="container free-text">
        <div class="row">
          <div class="col-sm-12 mb-4">
            <p class="title">PRIVACY POLICY</p>
            <p>This is the privacy policy of ORI-SHINE and Diamond King (M) Sdn. Bhd. (hereinafter collectively referred to as “ORI-SHINE”, “Diamond King®”, "us", "we", or "our") operate https://www.ORISHINE.net/ (the “Site”). We may update this privacy policy from time to time by publishing the amended version on the Site. By using the Site, you agree to the collection and use of information in accordance with this privacy policy.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 mb-4">
            <p class="title">OUR WEBSITE</p>
            <p>We try to keep the Site secure. However, we ask you to recognise that when providing your information to us through the Site or when you send us or ask us to send you any of your confidential information by email, that the internet and email communications over the internet may not be secure.
            We cannot be responsible for any loss or unauthorised interception of information transmitted via the internet which is beyond our control. The Site may contain links to other websites outside of the Site. Our privacy policy only applies to the Site. We are not responsible for the content, privacy or security of other websites.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 mb-4">
            <p class="mb-3 title">DATA PROTECTION STATEMENT</p>
            <p>The confidentiality and integrity of your personal data is a matter of prime importance to us. We shall therefore process and use your personal data, which shall include, amongst others, your name, company name, contact number, email address and mailing address and all such personal information as you may have provided to us as stated below, with care and in accordance with the statutory provisions.
            Provision of your personal data is voluntary. However, if you do not provide us your personal data, we may not be able to provide you the products or services you request or process your personal data for the purposes set forth below.
            Please understand that should you provide insufficient information, inaccurate information or decline to provide obligatory information that we request for, we may not be able to process your requirements and/or requests and ultimately be unable to provide you with your requirements and/or requests.
            Personal data that we receive and process will vary, depending on the types of products and/or services requested by you and may include, amongst others:
              <ul>
                <li>data which are collected from your enquiries, sales orders, comments, personal information provided by you such as your name, company name, contact number, email address and mailing address and any other such information that may be relevant to your request;</li>
                <li>data about your transactions with us such as sales orders, order records and payment details and records;</li>
                <li>data provided by you such as comments, queries or messages that you may submit to us in whatever manner;</li>
                <li>data collected through participation in customer satisfaction surveys, or when you respond to communications from us; and</li>
                <li>data from publicly available sources.</li>
              </ul>
            </p>
            <p>Personal data are collected, processed and used for purposes which may include, amongst others:
              <ul>
                <li>to help us verifying your identity when you contact us;</li>
                <li>to respond to inquiries, comments and suggestions from you;</li>
                <li>for general administration purposes; and</li>
                <li>to conduct research, surveys and trend analysis on various matters, such as for product development, statistical and security purposes.</li>
              </ul>
            </p>
            <p>In respect of the abovementioned purposes, your personal data may be disclosed to and processed by:
              <ul>
                <li>third-party companies or individuals to facilitate our products and services offered by us to you;</li>
                <li>our professional advisors, including, amongst others, accountants, legal advisors and financial advisors; and</li>
                <li>governmental and regulatory authorities to comply with statutory, regulatory and governmental requirements.</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 mb-4">
            <p class="title">COOKIES</p>
            <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
            Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of the Site.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 mb-4">
            <p class="title">CHANGES TO PRIVACY POLICY</p>
            <p>We reserve the right to update or change our privacy policy at any time and you should check this privacy policy periodically. Your continued use of the Site after we post any modifications to the privacy policy on the Site will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified privacy policy.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 mb-4 contact">
            <p class="title">CONTACT US</p>
            <p>
              If you have any questions about this privacy policy, please contact us.<br>
              Diamond King (M) Sdn. Bhd. (472537-M)<br>
              Email: enquiry@orishine.net<br>
              Tel: +60 4458 2888<br>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <section id="bottom">
      <div class="container pb-5">
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue'
import Footer from '@/components/general/Footer'

export default {
  name: 'aboutus',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style scoped>
#container-content {
  width: 1080px;
  margin: 0 auto;
}

.privacy-policy {
  background-image: url('~@/assets/images/backgrounds/bg-privacy.png');
  background-size: 100%;
  background-repeat: no-repeat;
}

.free-text {
  margin: 0 auto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #e7e7e7;
}
.contact {
  font-size: 20px;
}

.title {
  font-size: 30px;
  font-weight: bold;
}
</style>
