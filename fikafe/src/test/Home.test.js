import React from 'react';
import { mount } from 'enzyme';
import Dashboard from "../components/DashBoard";
import Chat from "../components/Chat";
import Game from "../components/Game";
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';
import Home from '../components/Home'

describe('routes using memory router', () => {

  test('should show Dashboard component for /home router (using memory router)', () => {
    const component = mount( <MemoryRouter initialentries="{['/home']}">
        <Dashboard/>
     </MemoryRouter>
    );
    expect(component.find(Dashboard)).toHaveLength(1);
  })

  test('should show Chat component for /home/chat router (using memory router)', () => {
    const component = mount( <MemoryRouter initialentries="{['/home/chat']}">
        <Chat/>
     </MemoryRouter>
    );
    expect(component.find(Chat)).toHaveLength(1);
  })

  test('should show Game component for /Game router (using memory router)', () => {
    const component = mount( <MemoryRouter initialentries="{['/home/game']}">
        <Game/>
     </MemoryRouter>
    );
    expect(component.find(Game)).toHaveLength(1);
  })
})

describe('Home', () => {
  let component;

  beforeEach(() => {
     // some pre-test setup
     component = shallow(<Home/>);
     

  });

  test("length", () => {
   
          expect(component.find('div').toHaveLength(1));

  })

})