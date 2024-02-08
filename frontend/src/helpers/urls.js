export function removeHashAfterQuestionMark(url) {
  return url.replace(/\?#/, "?");
}

export function extractUrlParams(url) {
  const urlParams = new URLSearchParams(url.split("?")[1]);

  const params = {};

  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }

  return params;
}
