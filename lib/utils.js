// scope field is a list of comma saparted scopes
exports.convertScope = function (scope) {
  if (!scope) {
    return [];
  }
  return scope.split(',');
};
