export const formatSlug = (str: string, separator = "-") => {
  str = str
    .toLowerCase()
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ä/g, "a")
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
    .replace(/ì|í|ị|ỉ|ĩ/g, "i")
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ö/g, "o")
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ü/g, "u")
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    .replace(/ß/g, "s")
    .replace(/đ/g, "d")
    .replace(/\s+/g, "-")
    .replace(/[^A-Za-z0-9-]/g, "")
    .replace(/-+/g, "-");
  if (separator) {
    return str.replace(/-/g, separator);
  }
  return str;
};
