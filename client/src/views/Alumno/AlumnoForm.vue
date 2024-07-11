<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { actualizarAlumno, crearAlumno, obtenerAlumno } from '@/services/alumnos-api';

const alumno = ref({
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
});

const isEdit = ref(false);

const router = useRouter();
const route = useRoute();

const fetchAlumno = async (id) => {
    const response = await obtenerAlumno(id);
    alumno.value = response.data;
};

onMounted(() => {
    if (route.params.id) {
        isEdit.value = true;
        fetchAlumno(route.params.id);
    }
});

const guardarAlumno = async () => {
    if (isEdit.value) {
        await actualizarAlumno(route.params.id, alumno.value);
    } else {
        await crearAlumno(alumno.value);
    }
    router.push('/alumnos');
};
</script>

<template>
    <div>
        <h1>
            {{ isEdit ? 'Editar Alumno' : 'Crear Alumno' }}
        </h1>

        <form @submit.prevent="guardarAlumno">
            <input v-model="alumno.nombre" placeholder="Nombre" required />

            <input v-model="alumno.apellido_paterno" placeholder="Apellido paterno" required />

            <input v-model="alumno.apellido_materno" placeholder="Apellido materno" required />

            <button type="submit">
                {{ isEdit ? 'Actualizar' : 'Crear' }}
            </button>
        </form>
    </div>
</template>
