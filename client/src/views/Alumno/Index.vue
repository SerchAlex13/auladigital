<script>
    import { eliminarAlumno, obtenerAlumnos } from '@/services/api';

    export default {
        data() {
            return {
                alumnos: []
            };
        },
        async created() {
            const response = await obtenerAlumnos();
            this.alumnos = response.data;
        },
        methods: {
            async eliminarAlumno(id) {
                await eliminarAlumno(id);
                this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
            },
            editarAlumno(id) {
                this.$router.push(`/editar-alumno/${id}`);
            }
        }
    };
</script>

<template>
    <div>
        <h1>
            Alumnos
        </h1>

        <RouterLink to="/crear-alumno">
            Crear Alumno
        </RouterLink>

        <ul>
            <li v-for="alumno in alumnos" :key="alumno.id">
                {{ alumno.nombre }} {{ alumno.apellido_paterno }} {{ alumno.apellido_materno }}, {{ alumno.estatus }}

                <button @click="editarAlumno(alumno.id)">
                    Editar
                </button>

                <button @click="eliminarAlumno(alumno.id)">
                    Eliminar
                </button>
            </li>
        </ul>
    </div>
</template>
