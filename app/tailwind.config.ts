import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Config>{
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue'
    ],
    plugins: [],
    theme: {
        extend: {
            fontFamily: {
                mirza: ['mirza', 'sans-serif'],
            }
        }
    }
}
