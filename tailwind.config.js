/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            defaultFontFamily: ['Poppins'],
        },
        fontSize: {
            sm: {
                lineHeight: 'normal',
                fontStyle: 'normal',
                fontWeight: '600',
            },
        },
        minWidth: {
            '1/2' : '50%',
        },
        colors: {
            defaultBackgroundColor: '#FFF'
        },
    },
    plugins: [],
};

