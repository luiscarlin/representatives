import { take, call, put, select, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import types from '../actionTypes'
import actionCreators from '../actionCreators'
import { getAddress } from '../selectors/address-selectors'
import fetchRepresentatives from '../../services/fetch-representatives-service'
import repDataTransformer from '../../utils/representative-transformer'

export default function * runSaga () {
  while (true) {
    yield take(types.saga.RETRIEVE_REPRESENTATIVES)
    
    const address = yield select(getAddress)

    const { representatives } = yield race({
      representatives: call(fetchRepresentatives, address),
      timeout: call(delay, 20000)
    })
    
    if (representatives.length === 0) {
      console.log('no representatives found!')
      continue
    }

    const formattedRepresentatives = yield call(repDataTransformer, representatives.result)
    console.log('formatted', formattedRepresentatives)

    yield put(actionCreators.representatives.setRepresentatives(formattedRepresentatives))
  }
}