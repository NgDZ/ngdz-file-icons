import { ALL_FILES_ICONS } from './consts';
function cleanExtension(ext: string) {
  ext = (ext || '').replace('.', '');
  return ext;
}
export function isVideo(ext: string) {
  ext = cleanExtension(ext);
  switch (ext.toLowerCase()) {
    case 'mp4':
    case 'mkv':
    case 'avi':
      return true;
  }
  return false;
}
export function isAudio(ext: string) {
  ext = cleanExtension(ext);
  switch (ext.toLowerCase()) {
    case 'mp3':
      return true;
  }
  return false;
}

export function isImage(ext: string) {
  ext = cleanExtension(ext);
  switch (ext.toLowerCase()) {
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'bmp':
      return true;
  }
  return false;
}
export function fileExtensionClass(ext: string) {
  ext = cleanExtension(ext);
  if (ALL_FILES_ICONS.indexOf(ext) >= 0) {
    return 'f-icon ' + ext;
  }

  if (isVideo(ext)) {
    return 'f-icon avi';
  } else if (isAudio(ext)) {
    return 'f-icon mp3';
  } else if (isImage(ext)) {
    return 'f-icon jpg';
  }
  return 'f-icon default';
}
