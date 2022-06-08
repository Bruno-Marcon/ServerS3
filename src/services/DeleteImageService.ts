import S3Storage from '../utils/S3Storage';

class DeleteImageService {
  async execute(filename: string ): Promise<void> {
    const s3 = new S3Storage();

    await s3.deleteFile(filename);
  }
}

export default DeleteImageService;