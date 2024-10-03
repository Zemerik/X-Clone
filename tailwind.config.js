module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'normalWhite' : '#E7E9EA',
                'lowWhite' : 'rgba(231,233,234,0.09)',
                'lowsWhite' : 'rgba(239,241,241,0.37)',
                'hoverGray': '#181818',
                'useGreen': 'rgb(0, 150, 255)',
                'hoverGreen': 'rgb(0, 150, 255)',
                'useGray': 'rgba(32,35,39,0.99)',
                'tickBlue': '#1C9CEA',
                'myGray': '#1D1F23',
                'hoverBlue': 'rgba(28,156,234,0.15)',
                'myPink': '#F91880',
                'hoverPink': 'rgba(249,24,128,0.42)'
            },
            dropShadow: {
                '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
                '4xl': [
                    '0 35px 35px rgba(0, 0, 0, 0.25)',
                    '0 45px 65px rgba(0, 0, 0, 0.15)'
                ]
            },
            zIndex: {
                '100': '100',
            }
        },
    },
    plugins: [],
}