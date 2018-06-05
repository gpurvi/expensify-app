import auth from '../../reducers/auth';

test('should set uid if login', () => {
    const uid = '123abc';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = auth(undefined, action);
    expect(state.uid).toBe(uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = auth({ uid: '123abc'}, action);
    expect(state).toEqual({});
});