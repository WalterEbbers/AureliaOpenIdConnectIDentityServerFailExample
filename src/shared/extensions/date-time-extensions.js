function toJSON()
{
  function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }

  var jsonString = this.getFullYear() +
        '-' + pad(this.getMonth() + 1) +
        '-' + pad(this.getDate()) +
        'T' + pad(this.getHours()) +
        ':' + pad(this.getMinutes()) +
        ':' + pad(this.getSeconds()) +
        '.' + (this.getMilliseconds() / 1000).toFixed(3).slice(2, 5);

  return jsonString;
}

Date.prototype.toJSON = toJSON;
