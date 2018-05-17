import { take, call, put, select, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import types from '../actionTypes'
import actionCreators from '../actionCreators'
import selectors from '../selectors'
import fetchRepresentatives from '../../services/fetch-representatives-service'

export default function * runSaga () {
  while (true) {
    yield take(types.saga.RETRIEVE_REPRESENTATIVES)

    const address = yield select(selectors.address.getAddress)

    const { representativesData } = yield race({
      representativesData: call(fetchRepresentatives, address),
      timeout: call(delay, 20000)
    })

    if (representativesData.length === 0) {
      continue
    }

    yield put(actionCreators.representatives.setRepresentatives(representativesData))
  }
}