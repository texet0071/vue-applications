<template>
    <div class="card" @submit.prevent>
        <h1>Войти в систему</h1>

        <div :class="['form-control ',{invalid: eError} ]" >
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email">
            <small v-if="eError">{{eError}}</small>
        </div>

        <div :class="['form-control ',{invalid: pError} ]" >
            <label for="password">Пароль</label>
            <input type="password" id="password" v-model="password">
            <small v-if="pError">{{pError}}</small>
        </div>

        <button class="btn primary" type="submit">Войти</button>

    </div>
</template>

<script>
    import {useField} from 'vee-validate'
    export default {
        setup() {
          const {value: email,errorMessage: eError,handleBlur: eBlur} = useField('email')

          const {value: password,errorMessage: pError,handleBlur: pBlur} = useField('password')

            return{
                email,
                eError,
                eBlur,
                password,
                pError,
                pBlur,
            }
        }
    }
</script>

<style scoped>

</style>