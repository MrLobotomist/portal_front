import Modal from '@/shared/ui/modal/modal.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';
import { NewsEditService } from '@/features/newsEdit/service/newsEditService.ts';
import { Input } from '@/shared/ui/input/input.tsx';
import { Textarea } from '@/shared/ui/textarea/textarea.tsx';
import { InputFile } from '@/shared/ui/input/inputFile.tsx';
import React, { useEffect, useMemo, useState } from 'react';
import {
  useNewsCreateMutation,
  useNewsGetQuery,
  useUpdateImageMutation,
  useUpdateNewsMutation,
} from '@/entities/news/api/news.ts';
import { Button } from '@/shared/ui/button/button.tsx';
import { PaginationService } from '@/features/pagination/service/paginationService.tsx';

export const NewsEdit = () => {
  const [newsCreate] = useNewsCreateMutation();
  const [updateImage] = useUpdateImageMutation();
  const [updateNews] = useUpdateNewsMutation();
  const id = useSelector((state: RootState) => state.newsEdit.id);
  const isOpen = useSelector((state: RootState) => state.newsEdit.isOpen);
  const currentNews = useSelector(
    (state: RootState) => state.newsEdit.currentNews,
  );
  const [newsImage, setNewsImage] = useState<File | null>(null);

  const { data } = useNewsGetQuery(id!, {
    skip: id === null,
  });

  useMemo(() => data, [data]);

  useEffect(() => {
    if (id != null) useNewsGetQuery(id);
    return () => {
      NewsEditService.reset();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) NewsEditService.reset();
  }, [isOpen]);

  const saveNews = async () => {
    if (id == null && currentNews != null)
      await newsCreate(currentNews).then((r) => {
        if (newsImage && r.data?.id != null) {
          const formData = new FormData();
          formData.append('image', newsImage);
          console.log(r.data);
          updateImage({ id: r.data.id, img: formData });
        }
      });
    else if (currentNews != null)
      await updateNews(currentNews).then((r) => {
        if (newsImage && r.data?.id != null) {
          const formData = new FormData();
          formData.append('image', newsImage);
          updateImage({ id: r.data.id, img: formData });
        }
      });
    PaginationService.setPage(1);
    NewsEditService.setIsOpen(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e);
      setNewsImage(e.target.files[0]);
      NewsEditService.setImage(e.target.value);
    }
  };

  const title = id == null ? 'Добавить новость' : 'Редактировать новость';

  const content = () => {
    return (
      <>
        <Input
          id={'title'}
          value={currentNews?.title}
          placeholder={'Заголовок'}
          onChange={(e) => NewsEditService.setTitle(e)}
        />
        <Textarea
          id={'title'}
          value={currentNews?.content}
          placeholder={'Статья'}
          onChange={(e) => NewsEditService.setContent(e)}
          type={'textarea'}
        />
        <InputFile
          value={newsImage == null ? '' : currentNews?.image}
          placeholder={'Изображение:'}
          onChange={(e) => handleImageChange(e)}
        />
        <Button
          text={'Сохранить'}
          variant={'secondary'}
          onClick={() => saveNews()}
        />
      </>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      content={content()}
      onClose={() => NewsEditService.setIsOpen(false)}
    />
  );
};
