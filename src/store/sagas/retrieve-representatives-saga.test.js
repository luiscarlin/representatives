import { take, select, call, put, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import types from '../actionTypes'
import actionCreators from '../actionCreators'

let getAddressSelectorMock = jest.fn()
jest.setMock('../selectors', { address: { getAddress: getAddressSelectorMock } })

let fetchRepresentativesMock = jest.fn()
jest.setMock('../../services/fetch-representatives-service', fetchRepresentativesMock)

const retrieveRepresentatviesSaga = require('./retrieve-representatives-saga').default

describe('Retrieve Representatives Saga', () => {
  describe('happy path', () => {
    let nextEffectWithPreviousResult, gen
    gen = retrieveRepresentatviesSaga()

    it('catches retrieve representatives action', () => {
      nextEffectWithPreviousResult = gen.next()
      expect(nextEffectWithPreviousResult.value).toEqual(take(types.saga.RETRIEVE_REPRESENTATIVES))
    })

    it('retrieves the current address from the store', () => {
      nextEffectWithPreviousResult = gen.next()
      expect(nextEffectWithPreviousResult.value).toEqual(select(getAddressSelectorMock))
    })

    it('calls service to fetch the representatives data with a 20 sec timeout', () => {
      nextEffectWithPreviousResult = gen.next('columbus, oh')
      expect(nextEffectWithPreviousResult.value).toEqual(race({
        representativesData: call(fetchRepresentativesMock, 'columbus, oh'),
        timeout: call(delay, 20000)
      }))
    })

    it('sets the representatives in the store', () => {
      nextEffectWithPreviousResult = gen.next({ representativesData: [ 'person1', 'person2' ] })
      expect(nextEffectWithPreviousResult.value).toEqual(put(actionCreators.representatives.setRepresentatives([ 'person1', 'person2' ])))
    })
  })
})