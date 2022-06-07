import React from "react";

function Header() {
    return (
        <>
            <nav sidenav-trigger> 
                <div class="nav-wrapper light-blue accent-4">
                    <a href="#!" class="brand-logo">NAASSOM</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="Currículo.html">Currículo</a></li>
                        <li><a href="badges.html">Portifólio</a></li>
                        <li><a href="collapsible.html">Apresentação</a></li>
                        <li><a href="mobile.html">Certificados</a></li>
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </>
        
    )
}

export default Header;