<template>
    <section>
        <error-dialog v-if="inpInvalid" title="Invalid Input" @close="confirmErr">
            <template #default>
                <p>Unfortunately atleast one of the input fields should be populated!!!</p>
                <p>Try by entering something...</p>
            </template>
            <template #actions>
                <base-button @click="confirmErr">Okay</base-button>
            </template>
        </error-dialog>
        <base-card>
            <form @submit.prevent="submitData">
                <div class="form-control">  
                    <label>Title</label>
                    <input type="text" name="title" id="title" ref="titleInp" />
                </div>
                <div class="form-control">  
                    <label>Description</label>
                    <textarea rows="3" name="description" id="description" ref="descriptionInp"></textarea>
                </div>
                <div class="form-control">  
                    <label>Link</label>
                    <input type="url" name="link" id="link" ref="linkInp" />
                </div>
                <base-button type="submit">Submit</base-button>
            </form>
        </base-card>
    </section>
</template>


<script>
export default {
  inject: ['addResource'],
  data() {
      return {
          inpInvalid: false
      }
  },
  methods: {
      submitData() {
        const enteredTitle = this.$refs.titleInp.value;
        const enteredDesc = this.$refs.descriptionInp.value;
        const enteredLink = this.$refs.linkInp.value;
        if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredLink.trim() === '') {
            this.inpInvalid = true;
            return;
        }
        this.addResource(enteredTitle, enteredDesc, enteredLink)
      },
      confirmErr() {
          this.inpInvalid = false
      }
  }
    
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>