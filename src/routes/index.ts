import { Router } from 'express';
import multer from 'multer';

import UploadImagesService from '../services/UploadImageService';
import DeleteImagesService from '../services/DeleteImageService';

import uploadConfig from '../config/multer';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/', upload.single('image'), async (request, response) => {
  const { file } = request;

  const uploadImagesService = new UploadImagesService();

  await uploadImagesService.execute(file);

  return response.json({ success: true });
});

routes.delete('/:filename', async (request, response) => {
  const { filename } = request.params;

  const deleteImagesService = new DeleteImagesService();

  await deleteImagesService.execute(filename);

  return response.send();
});

export default routes;