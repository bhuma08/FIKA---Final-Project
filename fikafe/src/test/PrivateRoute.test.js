import PrivateRoute from '../components/PrivateRoute'

describe('Private ROute', () => {
    let component;

    beforeEach(() => {
       // some pre-test setup
       component = shallow(<PrivateRoute/>);
       

    });

    test("length", () => {
       
            expect(component.find('div').toHaveLength(1));
    
    })

})