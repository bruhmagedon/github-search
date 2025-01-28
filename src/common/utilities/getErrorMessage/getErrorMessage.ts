import type { ErrorResponse, ErrorType } from '@common/types/Error';

import { errorMessages } from './errorMessages';

export function getErrorMessage(
  type: ErrorType,
  error: ErrorResponse
): { title: string; description: string } {
  if (error.response) {
    const { status, data } = error.response;
    const defaultMessage = 'Произошла ошибка при выполнении запроса.';
    return {
      title: `Ошибка ${status}`,
      description: errorMessages[type][status] || data.message || defaultMessage
    };
  }

  if (error.request) {
    return {
      title: 'Сетевая ошибка',
      description: 'Не удалось выполнить запрос. Проверьте подключение к сети.'
    };
  }

  return {
    title: 'Неизвестная ошибка',
    description: error.message || 'Что-то пошло не так. Попробуйте повторить позже.'
  };
}
