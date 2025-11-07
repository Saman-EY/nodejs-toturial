// {
//     "name": "ValidationError",
//     "message": "Validation Failed",
//     "statusCode": 400,
//     "error": "Bad Request",
//     "details": {
//         "body": [
//             {
//                 "message": "\"email\" must be a valid email",
//                 "path": [
//                     "email"
//                 ],
//                 "type": "string.email",
//                 "context": {
//                     "value": "asdqwd",
//                     "invalids": [
//                         "asdqwd"
//                     ],
//                     "label": "email",
//                     "key": "email"
//                 }
//             }
//         ]
//     }
// }

function validationMapper(err) {
  const { details } = err;
  let invalidParams = {};
  if (details) {
    for (const item of details.body) {
      invalidParams[item.context.key] = item.message.replace(/[\'\"\\]*/g, "");
    }

    return invalidParams;
  }

  return {};
}

module.exports = validationMapper;
