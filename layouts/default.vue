<template>
<div class="page-wrapper">
	<div class="top-bar">
		<div class="container">
			<a href="tel:+19056431135">+1 (905) 643-1135</a>
			<a href="mailto:contact@daleegroup.com"><img alt="envelope icon" class="mail-icon" src='~assets/images/icons/mail.svg'></a>
		</div>
	</div>
	<div class="navbar-wrapper container">
		<navbar/>
		<hr class="navbar"/>
		<as-bread-crumb-bar/>
	</div>
	<div class="container">
		<nuxt/>
		<b-button
			class="get-a-quote-button"
			v-b-modal.get-a-quote-form
			v-show="isNotHome"
			variant="primary"
		>Get a Quote</b-button>
	</div>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-sm-5">
					<address>
					Da-Lee Group
					<br>350 Jones Road,
					<br>Stoney Creek, ON Canada <span class="nowrap">L8E 5N2</span>
					<br><span class="nowrap"><a href="tel:+19056431135">+1 (905) 643-1135</a></span>
					<br><span class="nowrap"><a href="mailto:contact@daleegroup.com">contact@daleegroup.com</a></span>
					</address>
				</div>
				<div class="col-sm-7">
					<div
						v-if="!isSubscribed"
					>
						<p id="emailFieldDescription">Subscribe and we’ll keep you up-to-date on new products, services
						and promotions. Enter your email address here:</p>
						<div class="row no-gutters">
							<div class="col-sm-8">
								<b-form-input
									:state="!$v.email.$dirty ? null : !$v.email.$invalid"
									aria-labelledby="emailFieldDescription"
									required
									type="text"
									v-model="email"
								></b-form-input>
								<b-form-invalid-feedback>Valid email required</b-form-invalid-feedback>
							</div>
							<div class="col-sm-4">
								<b-button
									@click="subscribe"
									class="subscribe-button"
									variant="primary"
								>Subscribe</b-button>
							</div>
						</div>
					</div>
					<span v-else>Thank you for subscribing.</span>
				</div>
			</div>
		</div>
		<div class="footer-bottom-bar">
			<div class="container">
				<div class="row justify-content-between footer-bar">
					<div class="col-sm-3">
					&copy; Da-Lee Group
					</div>
					<div class="col-sm-5">
					<nuxt-link to="/terms-and-conditions">TERMS AND CONDITIONS</nuxt-link>
					| <nuxt-link to="/privacy-policy">PRIVACY POLICY</nuxt-link>
					</div>
					<div class="col-sm-4 hidden-md-down">
					<a rel="noopener noreferrer" target="_blank" href="http://minicucci.ca/">Design: Minicucci + Associates</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<b-modal
		id="get-a-quote-form"
		title="GET A QUOTE"
		hide-footer
	>
	<get-a-quote-form/>
	</b-modal>
</div>
</template>

<script>
import axios from 'axios'

import asBreadCrumbBar from '../components/as-bread-crumb-bar.vue'
import getAQuoteForm from '../components/get-a-quote-form.vue'
import navbar from '../components/navbar.vue'
import {
	email
	, required
} from 'vuelidate/lib/validators'

export default {
	mounted() {
		this.$router.beforeEach((to, from, next) => {
			this.isNotHome = to.path !== '/'
			next()
		})
		this.isNotHome = this.$router.currentRoute.path !== '/'
	}
	, data() {
		return {
			isNotHome: false
			, isSubscribed: false
			, email: ''
		}
	}
	, components: {
		asBreadCrumbBar
		, getAQuoteForm
		, navbar
	}
	, head() {
		return {
			script: [
				{
					async: true
					, defer: true
					, src: "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit"
				}
			]
		}
	}
	, methods: {
		async subscribe() {
			this.$v.$touch()
			if (this.$v.$invalid) {
				alert('Valid email address is required. Please correct and re-submit.')
				return
			}

			const data = await axios.post(`/subscribe.php`, this.$data)
			this.email = ''
			this.$v.$reset()
			this.isSubscribed = true
			setTimeout(() => {
				this.isSubscribed = false
			}, 2000)
		}
	}
	, validations: {
		email: {
			email
			, required
		}
	}
}

</script>

<style lang="stylus">
@import '~assets/css/variables.styl'
body
	// background-color: brand-blue

.get-a-quote-button
	margin 15px 0

.modal-header
	background-color brand-green
	color white
	.close
		color white
</style>

<style lang="stylus" scoped>
@import '~assets/css/variables.styl'

.page-wrapper
	display flex
	flex-flow column
	height 100%

.container.navbar-wrapper
	margin 0
	padding 0
	@media (min-width: 576px)
		margin 0 auto

.top-bar
	flex-grow 0
	background-color brand-blue
	text-align right
	padding 0 0 5px 0
	a, img
		color brand-white
		display inline-block
		height 0.8rem
		margin 3px

hr.navbar
	display none
	@media (min-width: 992px)
		display block
		margin 15px 15px 0 15px
		padding 0
		border-top 2px solid text-color

footer
	margin-top auto
	background-color darken(gray, 15)
	>.container
		color brand-white
		background-color darken(gray, 15)
		padding-top 15px
		margin-bottom 15px
	>.footer-bottom-bar
		color darken(brand-white, 30)
		text-align center

		@media (min-width: 992px)
			background-color darken(gray, 30)
			>.container >.row
				>*
					&:first-child
						text-align left
					&:last-child
						text-align right
		>.container
			margin 0
			max-width 100%
			color darken(brand-white, 30)
			background-color darken(gray, 30)
			>.row
				white-space nowrap
				font-size: responsive 11px 15px
				>.col-sm-5
					padding 0 15px
					@media (min-width: 992px)
						padding 0

	.subscribe-button
		width 100%

	address
		.nowrap
			white-space nowrap
		a
			color brand-white
	a
		color darken(brand-white, 30)
</style>
