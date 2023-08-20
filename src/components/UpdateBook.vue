<template>
    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>Book : </label>
        <input type="text" v-model="title" name="Book" placeholder="Add Book" />
      </div>
      <div class="form-control">
        <label>Author : </label>
        <input
          type="text"
          v-model="author"
          name="author"
          placeholder="Add the Author"
        />
      </div>
      <div class="form-control">
        <label>Image : </label>
        <input
          type="text"
          name="image"
          v-model="image"
          placeholder="Add image"
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
        <label>PublishDate: </label>
        <input
          type="text"
          name="Publish_date"
          v-model="publish_date"
          placeholder="Add the published Date"
        />
      </div>
      <div class="form-control">
        <label>id:</label>
        <input
          type="text"
          name="id"
          v-model="id"
          placeholder="Add the book id"
        />
      </div>
      <input type="submit" value="Save book" class="btn btn-block" />
    </form>
  </template>
    
    <script>
  export default {
    name: "UpdateBook",
    data() {
      return {
        id:"",
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
          
        };
        let listy=[this.id,newbook]
  
        this.$emit("update-book", listy);
  
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