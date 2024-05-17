export const metadata = {
    appleWebApp: {
        capable: 'yes',
        statusBarStyle: 'black-translucent'
    },
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent"
}

const layout = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export default layout