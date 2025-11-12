import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import Badge from './Badge'

describe('Component: Badge', () => {
    test('Should properly render children', () => {
        render(<Badge>Some text</Badge>)

        const badgeElement = screen.getByText('Some text')
        expect(badgeElement).toBeInTheDocument()
    })

    test('Should pass default props if none is passed', () => {
        render(<Badge>Default Badge</Badge>)

        const badgeElement = screen.getByText('Default Badge')
        
        expect(badgeElement.classList.contains('gray')).toBe(true)
        expect(badgeElement.classList.contains('square')).toBe(true)
    })

    test('Should properly apply classes passed via props', () => {
        render(
        <Badge color='red' format='pill'>
            Red Badge
        </Badge>)

        const badgeElement = screen.getByText('Red Badge')

        expect(badgeElement.classList.contains('red')).toBe(true)
        expect(badgeElement.classList.contains('pill')).toBe(true)

        expect(badgeElement.classList.contains('gray')).toBe(false)
    })
})