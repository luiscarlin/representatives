import { take, call, put, select, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import types from '../actionTypes'
import { getAddress } from '../selectors/address-selectors'
import fetchRepresentatives from '../../services/fetch-representatives-service'


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
    
    console.log('your representatives are', representatives)


    // const currentValueInDisplay = yield select(getDisplayValue)

    // if (!currentValueInDisplay) {
    //   continue
    // }

    // let newValueForDisplay

    // try {
    //   newValueForDisplay = yield call(eval, currentValueInDisplay)
    // } catch (e) {
    //   continue
    // }

    // yield put(getClearDisplayAction())
    // yield put(getPushToDisplayAction(newValueForDisplay))
  }
}