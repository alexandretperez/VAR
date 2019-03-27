import store from '@/store';

export const addMessage = msg => {
    store.dispatch('addMessage', msg);
};

export const clearMessages = () => {
    store.dispatch('clearMessages');
};
