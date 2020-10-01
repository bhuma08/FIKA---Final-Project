import Chat from '../components/Chat'
import ChatInput from '../components/ChatInput'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
 
const mockStore = configureStore([]);

describe('Chat', () => {
    let component, store;

    beforeEach(() => {
        store = mockStore({
            user: 'bhuma'
        });
        component = renderer.create(
            <Provider store={store}>
              <Chat/>
            </Provider>
        );
    });

    test("submitMessage", () => {
        const submit = jest.spyOn(component.instance(), 'submitMessage')
        expect(typeof submit).toBe( 'function' );
    })

    test("length", () => {
            expect(component.find('div').toHaveLength(2));
    })

    test("it renders with state to be empty array", () => {
        expect(component.state('message')).toBe([])
    });


})

describe('on submit', () => {
    test('Test submit event', () => {
      const mockCallBack = jest.fn();
      const submit = shallow((<ChatInput onSumbitMessage={mockCallBack}>Ok!</ChatInput>));
      submit.find('div')
      expect(mockCallBack).toHaveBeenCalled();
    });
  });

describe('ws', () => {
    test('connect websockets response', (done) => {
        expect.assertions(1);

        const ws = new WebSocket(`ws://localhost:3030`)
            ws.on('message', (msg) => {
                expect(JSON.parse(msg)).toEqual(0);
                ws.close();
            })
            ws.on('close', () => done());
    });
});