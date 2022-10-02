function classnames(...classNamesList: (string | undefined)[]) {
  return classNamesList.filter(Boolean).join(" ")
}

export { classnames }
