export const downloadTextFile = ({text, filename}) => {
  const element = document.createElement("a")
  const file = new Blob([text], {
    type: "text/plain",
  })
  element.href = URL.createObjectURL(file)
  element.download = filename
  document.body.appendChild(element) // Required for this to work in FireFox
  element.click()
}
