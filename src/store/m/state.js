import localStorage from '../../util/localStorage'
import util from '../../util/util'

const state = {
    count: 10,
    userInfo:util.getStore(localStorage.loginUserInfo)||null
  }
   
  export default state