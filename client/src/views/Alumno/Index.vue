<template>
    <div>
        <h1>Students</h1>
        <ul>
            <li v-for="student in students" :key="student.id">
                {{ student.nombre }}
            </li>
        </ul>
    </div>
</template>
  
<script>
    import { getStudents } from '@/services/api';
    
    export default {
        data() {
            return {
                students: []
            };
        },
        async created() {
            const response = await getStudents();
            this.students = response.data;
        },
    };
</script>