'use strict'

// Simple helper method to create new errors with a specific status value
// attached to them, to match up with the codes and methods below.
const createError = ({
  status = 500,
  message = 'Something went wrong.'
}) => {
  const error = new Error(message)
  error.status = status

  return error
}

Object.assign(exports, {
  createError,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  PAGE_NOT_FOUND: 404,
  UNPROCESSABLE: 422,
  GENERIC_ERROR: 500
})
