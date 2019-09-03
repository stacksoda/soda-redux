import thunk from 'redux-thunk';
import {stub} from 'sinon';
import configureStore from 'redux-mock-store';

import * as actions from '../../weather/actions';
import * as actionTypes from '../../weather/actionTypes';

const middlewares = [];
middlewares.push(thunk);
const createMockStore = configureStore(middlewares);

describe('weather/actions', () => {
    describe('fetchWeather', () => {
        let stubbedFetch;
        const store = createMockStore();

        beforeEach(() => {
            stubbedFetch = stub(global, 'fetch');
        });

        afterEach(() => {
            stubbedFetch.restore();
        });

        it('should dispatch fetchWeatherSuccess action type on fetch success', () => {
            const mockResponse = Promise.resolve({
                status: 200,
                json: () => Promise.resolve({
                    weatherinfo: {}
                })
            });
            stubbedFetch.returns(mockResponse);

            return store.dispatch(actions.fetchWeather(1)).then(() => {
                const dispatchedActions = store.getActions();
                console.log('dispatchedActions :', dispatchedActions);
                expect(dispatchedActions.length).toBe(2);
            })
        })
    })
})