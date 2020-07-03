<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="item.descricao"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" class="form-control" v-model="item.detalhes" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import CategoryDataService from "../../services/CategoryService";
export default{
        data(){
            return{
                item:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
                   console.log(this.$route.params.id)
                CategoryDataService.get(this.$route.params.id).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
                CategoryDataService.update(this.$route.params.id,this.item).then((response) => {
                    console.log(response)
                  this.$router.push({name: 'category'});
                });
            }
        }
    }
</script>