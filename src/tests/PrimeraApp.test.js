import { PrimeraApp } from '../PrimeraApp';
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
const { render } = require("@testing-library/react");

describe('Pruebas primera app', () => {
    xtest('should show message', () => {
        const saludo = 'Hola, como andas';
        const {getByText} = render(<PrimeraApp saludo={saludo} />);
        expect(getByText(saludo)).toBeInTheDocument();
    })
    
    test('should show PrimeraApp correctly', () => {
        const saludo = 'Hola, como andas';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show subtitle', ()=> {
        const saludo = 'Hola, como andas?';
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toEqual('Soy un subtitulo');
    });
    
})
