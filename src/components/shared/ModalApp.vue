<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary theme-bg-color theme-border-color"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add Skills
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header theme-bg-color text-white">
            <h5 class="modal-title" id="exampleModalLabel">Add Skills</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div></div>
            <div class="dropdown-name">Skill Name</div>
            <div class="dropdown flex">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Skill
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li v-for="(skill, i) in skills" :key="i">
                  <span class="dropdown-item">{{ skill }}</span>
                </li>
              </ul>
            </div>
            <div class="text-start">
              <div class="radio-name">Skill Category</div>
              <div class="d-flex radio-container">
                <div class="form-check mr-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Primary
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Additional
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <!-- <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> -->
            <button
              type="button"
              class="btn btn-primary theme-bg-color theme-border-color"
              data-bs-dismiss="modal"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalApp",
  components: {},
  props: ["skills"],
});
</script>

<style lang="scss">
.modal-body {
  .dropdown-name,
  .dropdown {
    display: flex !important;
  }

  .dropdown {
    margin-bottom: 27px;
  }

  .dropdown-name,
  .radio-name {
    margin-bottom: 10px;
  }

  .radio-container {
    .form-check {
      margin-right: 15px;
    }
  }
}
</style>
