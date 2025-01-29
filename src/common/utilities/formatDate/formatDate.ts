export const formatDate = (date?: string | null) => date ? new Date(date).toLocaleDateString() : 'Неизвестно';
