<template>
    <div id="dashboards">
        <button class="btn" data-toggle="modal" data-target="#createDashboardModal">
            <span class="h3">Crear tablero</span>
        </button>
        <div class="modal fade" id="createDashboardModal" tabindex="-1" role="form" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form @submit.prevent="crearDashboard">
                        <div class="modal-header">
                            <input type="text" class="form-control" id="db-name"
                            placeholder="Añadir título del tablero" v-model="dashboard.name">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <textarea class="form-control" rows="3"
                            placeholder="Añadir descripción del tablero..." v-model="dashboard.description">
                            </textarea>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" type="submit">Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <hr>
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in dashboards" :key="index" >
                <p>{{item.dboard_name}}</p>
                <p>{{item.dboard_description}}</p>
            </li>
        </ul>
        <!-- <figure class="col-md-3">
            <figcaption>Tablero 1</figcaption>
        </figure> -->
    </div>
</template>

</template>
<script>
    export default{
        data(){
            return{
                dashboards: [],
                dashboard: {name: '', description: ''}
            }
        },
        created(){
            axios.get('/dashboards').then(res=>{
                this.dashboards = res.data;
            })
        },
        methods:{
            crearDashboard(){
                if(this.dashboard.name.trim() === '' || this.dashboard.description.trim() === ''){
                    alert('Debes completar todos los campos para crear el tablero');
                    return;
                }
                const newDboard = this.dashboard;
                this.dashboard = {name: '', description: ''};    
                axios.post('/dashboards', newDboard).then((res) =>{
                    const dboardServer = res.data;
                    this.dashboards.push(dboardServer);
                })
            }
        }       
    }
</script>