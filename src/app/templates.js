function title(block) {
  return `<h2 style="${block.styles}">${block.value}</h2>`
}
function text(block) {
  return `<p style="${block.styles}">${block.value}</p>`
}


export const templates = {
  title,
  text
}