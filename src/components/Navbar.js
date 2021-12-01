import React, { Component } from 'react'
import { ThemeContext } from '../contexts/themeContext'

class Navbar extends Component {

    render() {
        return (
            <ThemeContext.Consumer>{context => {
                const { isLightTheme, light, dark } = context
                const theme = isLightTheme ? light : dark
                return (
                    <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
                        <h1>Context App</h1>
                        <ul>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Info</li>
                        </ul>
                    </nav>
                )
            }}</ThemeContext.Consumer>
        )
    }
}

export default Navbar