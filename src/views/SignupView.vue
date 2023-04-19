<template>
  <div
    class="signup-form container d-flex justify-content-center align-items-center h-100 z-index-2"
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
          <Form @submit="handleRegister" :validation-schema="schema">
            <div v-if="!successful">
              <div class="form-group mb-3">
                <label class="text-start w-100" for="employee_id"
                  >Employee Id</label
                >
                <Field
                  name="employee_id"
                  type="text"
                  class="form-control rounded-2"
                />
                <ErrorMessage name="employee_id" class="error-feedback" />
              </div>
              <div class="form-group mb-3">
                <label class="text-start w-100" for="first_name"
                  >First Name</label
                >
                <Field
                  name="first_name"
                  type="first_name"
                  class="form-control rounded-2"
                />
                <ErrorMessage name="first_name" class="error-feedback" />
              </div>
              <div class="form-group mb-3">
                <label class="text-start w-100" for="middle_name "
                  >Middle Name</label
                >
                <Field
                  name="middle_name"
                  type="middle_name"
                  class="form-control rounded-2"
                />
                <ErrorMessage name="middle_name" class="error-feedback" />
              </div>

              <div class="form-group mb-3">
                <label class="text-start w-100" for="last_name"
                  >Last Name</label
                >
                <Field
                  name="last_name"
                  type="last_name"
                  class="form-control rounded-2"
                />
                <ErrorMessage name="last_name" class="error-feedback" />
              </div>

              <div class="form-group mb-3">
                <label class="text-start w-100" for="email">Email</label>
                <Field
                  name="email"
                  type="email"
                  class="form-control rounded-2"
                />
                <ErrorMessage name="email" class="error-feedback" />
              </div>
              <div class="form-group mb-5">
                <label class="text-start w-100" for="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  class="form-control rounded-2"
                />
                <ErrorMessage name="password" class="error-feedback" />
              </div>

              <div class="form-group">
                <button
                  class="btn btn-primary btn-block theme-bg-color theme-border-color w-100 rounder-1"
                  :disabled="loading"
                >
                  <span
                    v-show="loading"
                    class="spinner-border spinner-border-sm"
                  ></span>
                  Sign Up
                </button>
              </div>
            </div>
          </Form>

          <div
            v-if="message"
            class="alert mx-2 my-2 position-fixed bottom-0 end-0 w-50"
            :class="successful ? 'alert-success' : 'alert-danger'"
          >
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import { defineComponent } from "vue";

export default defineComponent({
  name: "SignupView",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      employee_id: yup
        .string()
        .required("Employee id is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      first_name: yup
        .string()
        .required("First Name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      last_name: yup
        .string()
        .required("Last Name id is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });

    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
          setTimeout(() => {
            this.message = "";
          }, 5000);
        }
      );
    },
  },
});
</script>
<style scoped lang="scss">
.signup-form {
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
