import React from 'react';
import { shallow } from 'enzyme';
import { CounterApp } from '../CounterApp';

describe('counterApp test', () => {
    let wrapper = shallow(<CounterApp />);
    
    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);

    })

    test('should render the component correctly', () => {        
        expect(wrapper).toMatchSnapshot();
    })

    test('should show 100 as value', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        const valor = wrapper.find('h2').text();
        expect(valor).toEqual("100");
    })

    test('should increment one', ()=>{
        wrapper.find('button').at(0).simulate('click');
        const valor = wrapper.find('h2').text();

        expect(valor).toBe('11');
    })

    test('should decrement one', ()=>{
        wrapper.find('button').at(2).simulate('click');
        const valor = wrapper.find('h2').text();
        console.log(valor);

        expect(valor).toBe("9");
    })

    test('should reset the value', ()=>{
        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const valor = wrapper.find('h2').text();
        expect(valor).toBe('105')
    });
    
    
})
