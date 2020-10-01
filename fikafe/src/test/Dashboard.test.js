import Dashboard from '../components/DashBoard'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { getChat, getUser } from '../Actions/actions';
 
const mockStore = configureStore([]);

describe('Dashboard', () => {
    let component, store, spy;
    const props = {
        getUser,
        getChat
      };
    

    beforeEach(() => {
        store = mockStore({
            user: 'bhuma'
        });
        component = renderer.create(
            <Provider store={store}>
              <Dashboard/>
            </Provider>
        );

    });

    afterEach(() => {
        spy.mockClear()
    })

    test("it should contain sentence", ()=>{
        expect(component.find('h5').text()).toContain('What would you like to do today?')
    });
    

    test('should call the componentDidMount lifecycle method', () => {
        const spy = jest.spyOn(Dashboard.WrappedComponent.prototype, 'componentDidMount');
        const wrapper = mount(
          <Provider store={store}>
            <Dashboard {...props}/>
          </Provider>
        )
        expect(spy).toHaveBeenCalled()
        wrapper.unmount()
    })


})