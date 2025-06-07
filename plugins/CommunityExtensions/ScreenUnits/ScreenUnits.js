let basePx = 16;

numi.addUnit({
  "id": "px",
  "phrases": "pixel, pixels, px",
  "baseUnitId": "px",
  "format" : "px",
  "ratio" : 1,
});

numi.addUnit({
  "id": "rem",
  "phrases": "rem",
  "baseUnitId": "px",
  "format" : "rem",
  "ratio" : basePx,
});

/**
 * Convert a pixel value to its rem representation.
 *
 * @param {number} pixels - Pixel value to convert.
 * @param {number} [base=basePx] - Base pixel size for conversion.
 * @returns {number} rem value
 */
function calculate(pixels, base = basePx) {
  return pixels / base;
}

numi.addFunction({ "id": "toRem", "phrases": "toRem, convertRem" }, function(values) {
  if (typeof values[1] === 'object') {
    return {"double" : calculate (values[0].double, values[1].double)};
  }
  if (typeof values[0] === 'object') {
    return {"double" : calculate (values[0].double)};
  }

  return 0;
});