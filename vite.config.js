import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

//Importar fuentes de google fonts

// import { defineConfig } from 'vite'
// import fontsPlugin from 'vite-plugin-fonts'

// export default defineConfig({
//   plugins: [
//     fontsPlugin({
//       google: {
//         families: ['Roboto'] // Agrega aquí los nombres de las fuentes de Google Fonts que deseas usar
//       }
//     })
//   ]
// })

