export type ThemeType = typeof light

export const light = {
  primary: '#f45511',
  text: '#000',
  background: '#fff',
}

export const darkTheme: ThemeType = {
  primary: '#fff',
  text: 'red',
  background: '#cacaca',
}

const theme = light
export default theme
