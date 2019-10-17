const validator = require('../../middleware/validators')

const ApiTokenController = require('./controller')
const apiTokenController = new ApiTokenController()

// export const baseUrl = '/users'
module.exports.baseUrl = '/apitoken'

module.exports.routes = [
  {
    method: 'GET',
    route: '/bchaddr/:id',
    handlers: [validator.ensureUser, apiTokenController.getBchAddr]
  },
  {
    method: 'POST',
    route: '/new',
    handlers: [validator.ensureUser, apiTokenController.newToken]
  },
  {
    method: 'GET',
    route: '/isvalid/:jwt',
    handlers: [apiTokenController.isValid]
  },
  {
    method: 'GET',
    route: '/update-credit/:id',
    handlers: [validator.ensureUser, apiTokenController.updateCredit]
  }
  /*
  {
    method: 'GET',
    route: '/:id',
    handlers: [validator.ensureTargetUserOrAdmin, user.getUser]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [validator.ensureTargetUserOrAdmin, user.getUser, user.updateUser]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [validator.ensureTargetUserOrAdmin, user.getUser, user.deleteUser]
  }
  */
]