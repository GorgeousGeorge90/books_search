import { OptionsType, useOptionsHook, OptionContext } from '../../context/OptionSearchWrapper';
import { render,screen } from '@testing-library/react';


describe('OptionsContext tests', () => {
    it('goal:to get options values in component', () => {
        const TestComponent = () => {
            const test = useOptionsHook()

            return (<>
                <h1>{test?.options.title}</h1>
            </>)
        }

        const options: OptionsType = {
            title: 'Batman',
            startIndex: 0,
            category: 'art',
            order: 'newest',
        }

        const setTitle = jest.fn()
        const setStart = jest.fn()
        const setCategory = jest.fn()
        const setOrder = jest.fn()

        render(<OptionContext.Provider value={{
            options,
            setTitle,
            setStart,
            setCategory,
            setOrder
        }}>
            <TestComponent/>
        </OptionContext.Provider>)

        expect(screen.getByRole('heading').textContent).toBe('Batman')
    })
})