const multer = require('multer');
const User = require('../models/User');

const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/user');
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split('/')[1];
    callback(null, `image-${Date.now()}.${ext}`);
  },
});

const onlyImage = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    callback(new Error('Only Jpeg Allowed'));
  }
};

const upload = multer({
  storage: multerConfig,
  fileFilter: onlyImage,
});

exports.uploadPhoto = upload.single('photo');

exports.upload = (req, res) => {
  if (!req.file) {
    console.log('Something Went Wrong');
  }

  try {
    console.log(req.file);
    console.log(req.body.name);
    res.status(200).json({
      status: 'sucess',
    });
  } catch (error) {
    res.status(400).json({
      status: 'failure',
    });
  }
};
