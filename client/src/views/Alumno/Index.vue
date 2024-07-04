<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { eliminarAlumno, obtenerAlumnos } from '@/services/api';

const alumnos = ref([]);

const router = useRouter();

const fetchAlumnos = async () => {
    const response = await obtenerAlumnos();
    alumnos.value = response.data;
};

const editarAlumnoHandler = (id) => {
    router.push(`/editar-alumno/${id}`);
};

const eliminarAlumnoHandler = async (id) => {
    await eliminarAlumno(id);
    alumnos.value = alumnos.value.filter(alumno => alumno.id !== id);
};

onMounted(fetchAlumnos);
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

                <button @click="editarAlumnoHandler(alumno.id)">
                    Editar
                </button>

                <button @click="eliminarAlumnoHandler(alumno.id)">
                    Eliminar
                </button>
            </li>
        </ul>
    </div>
</template>
