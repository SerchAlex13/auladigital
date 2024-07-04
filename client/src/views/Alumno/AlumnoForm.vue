<script>
    import { actualizarAlumno, crearAlumno, obtenerAlumno } from '@/services/api';
    
    export default {
        data() {
            return {
                alumno: {
                    nombre: '',
                    apellido_paterno: '',
                    apellido_materno: '',
                },
                isEdit: false
            };
        },
        async created() {
            if (this.$route.params.id) {
                this.isEdit = true;
                const response = await obtenerAlumno(this.$route.params.id);
                this.alumno = response.data;
            }
        },
        methods: {
            async saveStudent() {
                if (this.isEdit) {
                    await actualizarAlumno(this.$route.params.id, this.alumno);
                } else {
                    await crearAlumno(this.alumno);
                }
                this.$router.push('/alumnos');
            }
        }
    };
</script>

<template>
    <div>
        <h1>{{ isEdit ? 'Editar Alumno' : 'Crear Alumno' }}</h1>
        <form @submit.prevent="saveStudent">
            <input v-model="alumno.nombre" placeholder="Nombre" required />
            <input v-model="alumno.apellido_paterno" placeholder="Apellido paterno" required />
            <input v-model="alumno.apellido_materno" placeholder="Apellido materno" required />
            <button type="submit">{{ isEdit ? 'Actualizar' : 'Crear' }}</button>
        </form>
    </div>
</template>
