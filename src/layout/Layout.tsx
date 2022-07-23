import { Logo } from '../components/Logo'
import {
    AppShell,
    Group,
    Header,
    Text
} from '@mantine/core'
import { HeaderResponsive } from '../components/Header'
import { FooterResponsive } from '../components/Footer'

interface LayoutProps {
    children: JSX.Element
}

const Layout = ({children}: LayoutProps) => {
    return (
        <AppShell
            styles = {{
                main: {
                    background: '#FFFFFF',
                    width: '100vw',
                    height: '100vw',
                }
            }}
            fixed
            header = {<HeaderResponsive links={[{link:'/', label:'Home'}, {link:'/interview', label:'Interview'}]}/>}
            footer = {<FooterResponsive />}
        >
            {children}
        </AppShell>
    )
}

export default Layout