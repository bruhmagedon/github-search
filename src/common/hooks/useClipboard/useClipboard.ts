import clipboardCopy from 'clipboard-copy';
import { toast } from 'sonner';

// Хук для копирования ссылки
export const useClipboard = () => {
  const onCopyLink = async (url: string) => {
    try {
      await clipboardCopy(url);
      toast.success('Ссылка скопирована!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error('Ошибка копирования ссылки', { description: error.message });
      }
    }
  };

  return { onCopyLink };
};
