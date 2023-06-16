interface IButton {
  title: string
}

export function Button({ title }: IButton) {
  return <button>{title}</button>
}
