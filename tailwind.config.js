/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#2F3061',
                secondary: '#FFE66D',
                third: '#6CA6C1',
                hover: '#626262',
                background: '#F7FFF7',
                black: '#343434',
                success: '#87bc45',
                error: '#ea5545',
                warning: '#ef9b20',
                info: '#27aeef',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
