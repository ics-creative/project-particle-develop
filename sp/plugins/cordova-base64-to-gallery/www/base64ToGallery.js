/**
 * @file base64ToGallery PhoneGap/Cordova plugin
 * @author Tommy-Carlos Williams
 * @author Simba Zhang <solderzzc@gmail.com>
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 * @copyright Tommy-Carlos Williams 2012. All rights reserved.
 * @license MIT
 */

/*globals cordova*/

// Consts
// ------
var SERVICE = 'Base64ToGallery';
var ACTION  = 'saveImageDataToLibrary';

// Exports
// -------
/**
 * Saves base64 data as image.
 * @param  {string}   data
 * @param  {string}   [prefix]
 * @param  {function} [success]
 * @param  {function} [fail]
 * @return {undefined}
 */
module.exports = function(data, prefix, success, fail) {
  // Handle method call with 3 or 4 parameters (prefix optional)
  if (arguments.length < 4) {
    prefix  = '';
    success = arguments[1];
    fail    = arguments[2];
  }

  // Prepare base64 string
  data = data.replace(/data:image\/png;base64,/, '');

  return cordova.exec(ok(success), error(fail), SERVICE, ACTION, [data, prefix]);
};

// Private methods
// ---------------
/**
 * Gets success callback if it is defined and not null.
 * Otherwise returns a simple console.log.
 *
 * @param  {[function|undefined|null]} success
 * @return {function}
 */
function ok(success) {
  if (typeof success === 'undefined' || success === null) {
    return console.log;
  }

  return success;
}

/**
 * Gets fail callback if it is defined and not null.
 * Otherwise returns a simple console.error.
 *
 * @param  {[function|undefined|null]} fail
 * @return {function}
 */
function error(fail) {
  if (typeof fail === 'undefined' || fail === null) {
    return console.error;
  }

  return fail;
}
