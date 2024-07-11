<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { eliminarAlumno, obtenerAlumnos } from '@/services/alumnos-api';
import Modal from '@/components/Modal.vue';

const alumnos = ref([]);

const router = useRouter();

const showModal = ref(false);

const alumnoIdToDelete = ref(null);

const fetchAlumnos = async () => {
    const response = await obtenerAlumnos();
    alumnos.value = response.data;
};

const editarAlumnoHandler = (id) => {
    router.push(`/editar-alumno/${id}`);
};

const eliminarAlumnoHandler = async (id) => {
    await eliminarAlumno(id);
    alumnos.value = alumnos.value.filter(alumno => alumno._id !== id);
};

const confirmDelete = (id) => {
    alumnoIdToDelete.value = id;
    showModal.value = true;
};

const handleConfirmDelete = async () => {
    if (alumnoIdToDelete.value !== null) {
        await eliminarAlumnoHandler(alumnoIdToDelete.value);
        alumnoIdToDelete.value = null;
    }
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
            <li v-for="alumno in alumnos" :key="alumno._id">
               {{ alumno.nombre }} {{ alumno.apellido_paterno }} {{ alumno.apellido_materno }}

                <button @click="editarAlumnoHandler(alumno._id)">
                    Editar
                </button>

                <button @click="confirmDelete(alumno._id)">
                    Eliminar
                </button>
            </li>
        </ul>

        <Modal :visible="showModal" @update:visible="val => showModal = val" @confirm="handleConfirmDelete">
            <template #header>
                Confirmar eliminación
            </template>
            <template #body>
                ¿Estás seguro de que deseas eliminar este alumno?
            </template>
        </Modal>
    </div>
</template>
