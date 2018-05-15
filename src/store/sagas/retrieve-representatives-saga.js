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

    const { rawRepresentativesData } = yield race({
      rawRepresentativesData: call(fetchRepresentatives, address),
      timeout: call(delay, 20000)
    })
    
    if (rawRepresentativesData.length === 0) {
      console.log('there was a problem getting your representatves using the address')
      continue
    }

    console.log('raw', rawRepresentativesData)
    const formattedRepresentativesData = yield call(repDataTransformer, rawRepresentativesData)
    console.log('formatted', formattedRepresentativesData)

    yield put(actionCreators.representatives.setRepresentatives(formattedRepresentativesData))
  }
}