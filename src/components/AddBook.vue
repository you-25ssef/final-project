<template>
    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>Book : </label>
        <input type="text" v-model="title" name="Book" placeholder="Add Book" />
      </div>
      <div class="form-control">
        <label>Publishdate : </label>
        <input
          type="text"
          v-model="publish_date"
          name="publish_date"
          placeholder="Add the Published date"
        />
      </div>
      <div class="form-control">
        <label>Description : </label>
        <input
          type="text"
          v-model="description"
          name="description"
          placeholder="Add Description"
        />
      </div>
      <div class="form-control">
        <label>Author : </label>
        <input
          type="text"
          name="author"
          v-model="author"
          placeholder="Add Author"
        />
      </div>
      <input type="submit" value="Save book" class="btn btn-block" />
    </form>
  </template>
    
    <script>
  export default {
    name: "Addbook",
    data() {
      return {
        id: Math.floor(Math.random() * 10000),
        title: "",
        author: "",
        image:"",
        description: "",
        publish_date: "",
        // reminder: false,
      };
    },
    methods: {
      onSubmit(e) {
        e.preventDefault();
  
        if (!this.title) {
          alert("Please add a book");
          return;
        }
  
        const newbook = {
          title: this.title,
          author: this.author,
          image:this.image,
          description: this.description,
          publish_date: this.publish_date,
          
          //   reminder: this.reminder,
        };
  
        this.$emit("add-book", newbook);
  
        this.title = "";
        this.author = "";
        this.image="";
        this.description = "";
        this.publish_date = "";
        
      },
    },
  };
  </script>
  <style scoped>
  .add-form {
    margin-bottom: 40px;
  }
  
  .form-control {
    margin: 20px 0;
  }
  
  .form-control label {
    display: block;
  }
  
  .form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
  
  .form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .form-control-check label {
    flex: 1;
  }
  
  .form-control-check input {
    flex: 2;
    height: 20px;
  }
  </style>