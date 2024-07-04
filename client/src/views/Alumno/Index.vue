<script>
    import { obtenerAlumnos } from '@/services/api';

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
    };
</script>

<template>
    <div>
        <h1>Alumnos</h1>
        <ul>
            <li v-for="alumno in alumnos" :key="alumno.id">
                {{ alumno.nombre }} {{ alumno.apellido_paterno }} {{ alumno.apellido_materno }}, {{ alumno.estatus }}
            </li>
        </ul>
    </div>
</template>
