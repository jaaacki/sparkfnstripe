<template>
  <section class="container">
    <div class="links">
        <a href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_DKvSiRbPBOvyhdCvHn56M2rsK8fUMMcY&scope=read_write" class="stripe-connect" target="_blank"><span>Connect with Stripe</span></a>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data: () => ({

  })
  // async asyncData () {
  //   let { data } = await axios.get('/api/users')
  //   return { users: data }
  // },
  // head () {
  //   return {
  //     title: 'Users'
  //   }
  // }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
