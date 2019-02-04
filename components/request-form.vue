<template>
<div class="container">
	<b-form
		novalidate
		@submit="submit"
		@reset="reset"
		v-if="!isSubmitted"
	>
		<div class="form-group row">
			<div class="col-sm-6">
				<label for="fullNameInput" class="col-form-label">Full Name</label>
				<b-form-input
					:state="!$v.fullName.$dirty ? null : !$v.fullName.$invalid"
					@input="$v.fullName.$touch()"
					id="fullNameInput"
					required
					v-model="fullName"
				/>
				<b-form-invalid-feedback>Required</b-form-invalid-feedback>
			</div>
			<div class="col-sm-6">
				<label for="companyNameInput" class="col-form-label">Company Name</label>
				<b-form-input
					:state="!$v.companyName.$dirty ? null : !$v.companyName.$invalid"
					id="companyNameInput"
					required
					v-model="companyName"
				/>
				<b-form-invalid-feedback>Required</b-form-invalid-feedback>
			</div>
		</div>
		<div class="form-group row">
			<div class="col-sm-12">
				<label for="addressLine1Input" class="col-form-label">Address</label>
				<b-form-input
					:state="!$v.addressLine1.$dirty ? null : !$v.addressLine1.$invalid"
					id="addressLine1Input"
					required
					v-model="addressLine1"
				/>
				<b-form-invalid-feedback>Required</b-form-invalid-feedback>
			</div>
		</div>
		<div class="form-group row">
			<div class="col-sm-12">
				<label for="addressCityInput" class="col-form-label">City</label>
				<b-form-input
					:state="!$v.addressCity.$dirty ? null : !$v.addressCity.$invalid"
					id="addressCityInput"
					required
					v-model="addressCity"
				/>
				<b-form-invalid-feedback>Required</b-form-invalid-feedback>
			</div>
		</div>
		<div class="form-group row">
			<div class="col-sm-6">
				<label for="addressProvinceInput" class="col-form-label">Province / State</label>
				<b-form-input
					:state="!$v.addressProvince.$dirty ? null : !$v.addressProvince.$invalid"
					id="addressProvinceInput"
					required
					v-model="addressProvince"
				/>
				<b-form-invalid-feedback>Required</b-form-invalid-feedback>
			</div>
			<div class="col-sm-6">
				<label for="addressPostalCodeInput" class="col-form-label">Postal/Zip Code</label>
				<b-form-input
					:state="!$v.addressPostalCode.$dirty ? null : !$v.addressPostalCode.$invalid"
					id="addressPostalCodeInput"
					required
					v-model="addressPostalCode"
				/>
				<b-form-invalid-feedback>Required</b-form-invalid-feedback>
			</div>
		</div>
		<div class="form-group row">
			<div class="col-sm-6">
				<label for="emailInput" class="col-form-label">Email</label>
				<b-form-input
					:state="!$v.email.$dirty ? null : !$v.email.$invalid"
					id="emailInput"
					required
					v-model="email"
				/>
				<b-form-invalid-feedback>Required</b-form-invalid-feedback>
			</div>
			<div class="col-sm-6">
				<label for="phoneInput" class="col-form-label">Phone</label>
				<b-form-input
					:state="!$v.phone.$dirty ? null : !$v.phone.$invalid"
					id="phoneInput"
					required
					v-model="phone"
				/>
				<b-form-invalid-feedback>Required</b-form-invalid-feedback>
			</div>
		</div>
		<div class="form-group row">
			<div class="col-sm-12">
				<b-form-checkbox-group
					:options="requestOptions"
					:state="!$v.checkedRequestOptions.$dirty ? null : !$v.checkedRequestOptions.$invalid"
					id="requestOptions"
					name="requestOptions"
					required
					stacked
					v-model="checkedRequestOptions"
				/>
			</div>
		</div>
		<div class="form-group row">
			<div class="col">
				<label for="messageInput" class="col-form-label">Message</label>
				<b-form-textarea
					:rows="3"
					id="messageInput"
					v-model="message"
				/>
			</div>
		</div>
		<div class="form-group row">
			<div class="col">
				<vue-recaptcha
					@verify="recaptchaVerify"
					sitekey="6LdBAQETAAAAADzfcCHSDB7kkiN5uFSJKHKCnYff"
				>
				</vue-recaptcha>
			</div>
		</div>
		<div class="form-group row">
			<div class="col">
				<b-button
					@click="submit"
					v-b-modal.request-form
					variant="primary"
				>Submit</b-button>
			</div>
		</div>
	</b-form>
	<div v-else>
		<p>Thank you for your inquiry. A representative from Da-Lee Group will
		be in contact with you.</p>
		<b-button
			@click="reset"
			v-b-modal.request-form
			variant="primary"
		>Reset</b-button>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import VueRecaptcha from 'vue-recaptcha'
import {
	required
} from 'vuelidate/lib/validators'

const defaults = {
	requestOptions() {
		return [
			'Tom Day: Gravel Roads & Calcium Chloride book'
			, 'Secrets of Preparation Card '
			, 'Secrets of Preparation Card for Arenas'
		]
	}
}

export default {
	components: {
		VueRecaptcha
	}
	, data() {
		return {
			addressCity: ''
			, addressLine1: ''
			, addressPostalCode: ''
			, addressProvince: ''
			, checkedRequestOptions: []
			, companyName: ''
			, email: ''
			, fullName: ''
			, isSubmitted: false
			, message: ''
			, phone: ''
			, recaptchaToken: ''
			, requestOptions: defaults.requestOptions()
		}
	}
	, methods: {
		reset() {
			this.$v.$reset()
			this.addressCity = ''
			this.addressLine1 = ''
			this.addressPostalCode = ''
			this.addressProvince = ''
			this.checkedRequestOptions = []
			this.companyName = ''
			this.email = ''
			this.fullName = ''
			this.isSubmitted = false
			this.message = ''
			this.phone = ''
			this.requestOptions = defaults.requestOptions()
		}
		, async submit() {
			this.$v.$touch()
			if (this.$v.$invalid || !this.recaptchaToken) {
				alert('Errors were found. Please correct and re-submit.')
				return
			}
			const response = await axios.post(`/request.php`, this.$data)
			this.isSubmitted = true
		}
		, recaptchaVerify(response) {
			this.recaptchaToken = response
		}
	}
	, mounted() {
		this.isSubmitted = false
	}
	, validations: {
		addressCity: {
			required
		}
		, addressLine1: {
			required
		}
		, addressPostalCode: {
			required
		}
		, addressProvince: {
			required
		}
		, checkedRequestOptions: {
			required
		}
		, companyName: {
			required
		}
		, email: {
			required
		}
		, fullName: {
			required
		}
		, phone: {
			required
		}
	}
}
</script>
