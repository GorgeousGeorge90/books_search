import { render,screen } from '@testing-library/react';
import Header from '../componets/Header/Header';
import { OptionContext } from "../context/OptionSearchWrapper";



jest.mock('react-redux')
describe('Header',()=> {
    it('goal:render Header component',()=> {

        const view = render(
            <OptionContext.Provider value={null}>
                <Header/>
            </OptionContext.Provider>)
        expect(view).toMatchSnapshot()
    })
})