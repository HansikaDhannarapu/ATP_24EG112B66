import multer from "multer";

export const upload = multer({
  //store in RAM
  storage: multer.memoryStorage(),
  //to avoid RAM overflow
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
  //for security validation
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg"
    ];
     if (allowedTypes.includes(file.mimetype)) {
 cb(null, true);
    } else {
      const err = new Error("Only JPG and PNG allowed");
      err.status = 400;
      cb(err, false);
    }
  },
});