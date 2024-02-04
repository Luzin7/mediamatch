export const statusCodeMapper = {
  // Errors status code
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  InternalServerError: 500,
  NotImplemented: 501,

  // Success status code
  OK: 200,
  Created: 201,
  Accepted: 202,
  NoContent: 204,
  PartialContent: 206,
} as const;
