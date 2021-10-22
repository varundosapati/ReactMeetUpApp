import LayoutClass from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className={LayoutClass.main}>
                {props.children}
            </main>    
        </div>

    );
}

export default Layout;