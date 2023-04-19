<template>
  <div
    class="login-form container d-flex justify-content-center align-items-center h-100 z-index-2"
  >
    <div class="row justify-content-center g-0 rounded-0">
      <div class="col-md-6 secondary-bg-color rounded-start">
        <div
          class="d-flex justify-content-center align-items-center h-100 px-4"
        >
          <img
            class="img-fluid"
            alt="login img"
            src="../assets/login-img.svg"
          />
        </div>
      </div>
      <div class="col-md-6 rounded-0 rounded-end">
        <div class="card card-container py-5 rounded-0 rounded-end">
          <div class="mb-5">
            <img alt="login img" src="../assets/logo-landing.svg" />
          </div>
          <Form @submit="handleLogin" :validation-schema="schema">
            <div class="form-group mb-3">
              <label class="text-start w-100" for="employee_id"
                >Employee Id</label
              >
              <Field name="email" type="text" class="form-control" />
              <ErrorMessage name="employee_id" class="error-feedback" />
            </div>
            <div class="form-group mb-5">
              <label class="text-start w-100" for="password">Password</label>
              <Field name="password" type="password" class="form-control" />
              <ErrorMessage name="password" class="error-feedback" />
            </div>

            <div class="form-group mb-3">
              <button
                class="btn btn-primary btn-block theme-bg-color theme-border-color w-100 rounder-1"
                :disabled="loading"
              >
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span>Login</span>
              </button>
            </div>

            <div class="form-group">
              <div
                v-if="message"
                class="alert alert-danger mx-2 my-2 position-fixed bottom-0 end-0 w-50 slide"
                role="alert"
              >
                {{ message }}
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "LoginView",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Employee Id is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", this.schema).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setTimeout(() => {
            this.message = "";
          }, 5000);
        }
      );
    },
  },
};
</script>

<style scoped lang="scss">
.login-form {
  position: relative;
  z-index: 10;
}
Form {
  max-width: 300px;
  margin: 0 auto;
}

.form-group {
  position: relative;
}
.error-feedback {
  font-size: 12px;
  left: 0;
  color: #dc3545;
  position: absolute;
}
</style>
