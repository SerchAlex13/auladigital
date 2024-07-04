<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    visible: Boolean
});

const emit = defineEmits(['update:visible', 'confirm']);

const confirm = () => {
    emit('confirm');
    emit('update:visible', false);
};

const cancel = () => {
    emit('update:visible', false);
};
</script>

<template>
    <div v-if="visible" class="modal-overlay">
        <div class="modal">
            <div class="modal-header">
                <slot name="header">
                    Default Header
                </slot>
            </div>

            <div class="modal-body">
                <slot name="body">
                    Default Body
                </slot>
            </div>

            <div class="modal-footer">
                <button @click="confirm">
                    Confirm
                </button>

                <button @click="cancel">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: black;
    padding: 1rem;
    border-radius: 5px;
}

.modal-header, .modal-body, .modal-footer {
    margin-bottom: 1rem;
}

.modal-footer button {
    margin-right: 0.5rem;
}
</style>