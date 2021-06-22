<template>
  <v-layout justify-center align-center>
      <v-card class='mx-auto' style='flex: 0 1 700px'>
        <v-card-title class="headline">صفحه پروفایل</v-card-title>
        <v-card-text>
          <span v-if="user">شناسه  : {{ user.id }}</span>
          <span v-if="user">موبایل  : {{ user.mobile }}</span>
          <p v-if="user">کدملی  : {{ user.national_code }}</p>
          <img :src="user.photo"  v-if="user" >
            <v-form  @submit.prevent='submit'>
              <v-text-field style="width:48%;  display:inline-block" placeholder='نام' v-model='first_name' />
              <v-text-field style="width:50%;  display:inline-block" placeholder='نام خانوادگی' v-model='last_name' />
              <v-text-field style="width:49%;  display:inline-block"  placeholder='آدرس' v-model='address' />
              <v-text-field style="width:50%;  display:inline-block" placeholder='مدرسه' v-model='school' />
                  <v-select style="width:48%;  display:inline-block"
                    :items="grades"
                    placeholder="مقطع"
                    item-text="title"
                    item-value="id"
                    v-model="grade_id"
                    dense
                  ></v-select> 
                  <v-select style="width:50%;  display:inline-block"
                    :items="majors"
                    placeholder="رشته"
                     item-text="title"
                    item-value="id"
                    v-model="major_id"
                    dense
                  ></v-select>
                  <v-select style="width:48%;  display:inline-block"
                    :items="genders"
                    item-text="title"
                    item-value="id"
                    placeholder="جنسیت"
                    v-model="gender_id"
                    dense
                  ></v-select>
                   <v-select style="width:50%;  display:inline-block"
                    :items="provinces"
                     item-text="title"
                    item-value="id"
                    placeholder="استان"
                    v-on:change="changeP(p_id)"
                     v-model="p_id"
                    dense
                  ></v-select>
                  <v-select style="width:50%;  display:inline-block"
                    :items="city"
                    :disabled= "showCity"
                     item-text="title"
                    item-value="id"
                    placeholder="شهر"
                     v-model="shahr_id"
                    dense
                  ></v-select>
              <v-btn class="btn btn-success" type='submit' :loading='loading' :disabled='loading'
                >ویرایش</v-btn >
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <!-- <v-btn color="primary" flat nuxt to="/">Main Page</v-btn> -->
        </v-card-actions>
      </v-card>
  </v-layout>
</template>
<script>
import axios from 'axios'
// edit_profile_url
export default {
  layout: 'fullscreen',
  middleware: 'auth',
  data () {
    return {
      showCity: true,
      first_name: '',
      last_name: '',
      address: '',
      school: '',
      grade_id: '',
      gender_id: '',
      shahr_id: '',
      p_id: '',
      major_id: '',
      alert: null,
      loading: false,
      provinces: [],
      cities: [],
      city: [],
      majors: [],
      grades: [],
      genders: []
    }
  },
  computed: {
    user () {
      return (this.$store.state.auth || {}).user || null
    }
  },
  created () {
    this.$store.dispatch('auth/getInfo')
      .then(result => {
        // console.log('result', result)
        this.majors = result.data.data.majors
        this.grades = result.data.data.grades
        this.genders = result.data.data.genders
        this.provinces = result.data.data.provinces
        this.cities = result.data.data.cities
        console.log('this.cities', this.cities)
        console.log('userId', this.$store.state.auth.userId)
        this.loading = false
      }).catch(error => {
        console.log('error', error)
      })
  },
  mounted () {
    // console.log(this.$store.state.auth)
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/reset').then(() => {
        this.$router.push('/')
      })
    },
    submit () {
      this.alert = null
      this.loading = true
      let data = {
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address,
        school: this.school,
        grade_id: this.grade_id,
        gender_id: this.gender_id,
        shahr_id: this.shahr_id,
        major_id: this.major_id
      }
      axios.put(`user/${this.$store.state.auth.userId}`, data).then(result => {
        console.log('edit', result)
        this.loading = false
        // this.alert = { type: 'success', message: result.data.message }
      }).catch(error => {
        console.log('error', error)
        this.loading = false
        if (error.response && error.response.data) {
          this.alert = { type: 'error', message: error.response.data.message || error.reponse.status }
        }
      })
    },
    changeP (id) {
      console.log(this.cities)
      let c = this.cities.find(i => {
        return i.province.id === this.p_id
      })
      console.log(c)
      this.city.push(c)
      this.showCity = false
    }
  }
}
</script>
<style scoped>
.layout {
  direction: rtl;
}
.v-text-field .v-label {
  right: 0 !important;
  left: unset !important;
}
</style>