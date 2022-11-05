import { fireEvent, render, screen } from "@testing-library/react"
import { withTranslation } from "react-i18next"
import { renderWithTranslation } from "shared/lib/classNames/renderWithTranslation/renderWithTranslation"
import { SideBar } from "./Sidebar"

describe('Sidebar', () => {

    test('Test', () => {
        renderWithTranslation(<SideBar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTranslation(<SideBar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})