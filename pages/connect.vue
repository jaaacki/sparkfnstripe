<template>
	<section class="container">
    <div>
    	<v-card>
    		 <v-card-title primary-title>
    		 	<div>
			      <h1 class="headline mb-0">
			        Connect Account to Stripe
			      </h1>
			      <div class="links">
						<v-btn
							:loading="loading"
							:disabled="disable"
							color="info"
							@click="connect"
						>
							Connect
						</v-btn>
			      </div>
			     </div>
			  </v-card-title>
	     </v-card>
    </div>

    <v-snackbar
      v-model="snackbar"
      right="right"
      :color="color"
      :timeout="timeout"
      top="top"
    >
      {{ message }}
      <v-btn
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </section>
</template>

<script>

export default {
	data: () => ({
		secret: 'sk_test_JSdDSI3SFYOHJshWm7sThiD9',
		grant_type: 'authorization_code',
		snackbar: false,
		timeout: 5000,
		message: '',
		color: 'success',
        loading: false,
        disable: false
	}),
	methods: {
		async connect () {
			try {
				this.loading = true;
				this.disable = true;
				let data = {
					client_secret: this.secret,
					code: this.$route.query['code'],
					grant_type: this.grant_type
				};

				let headers = {
					headers: {
						'Content-Type': 'application/json'
					}
				}
				//console.log(data);
		  		let response = await this.$axios.$post('/api/connect', data, headers);
		  		this.color = 'success';
		  		this.message = 'Account successfully connected!';
		  		this.snackbar = true;
		  		this.loading = false;
		  		await setTimeout(() => {
		  			this.disable = false;
		  			this.$nuxt.$router.replace({ path: '/' });
		  		}, 3000)

			} catch (e) {
				this.color = 'danger';
		  		this.message = "There's a problem fulfilling  your request!";
		  		this.snackbar = true;
		  		this.loading = false;
		  		this.disable = false;
			}

		}
	}
}

</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>