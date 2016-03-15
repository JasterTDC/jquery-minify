/**
 * Test clossure
 * @author  Ismael Moral <imoral@nohacefaltapapel-et.net>
 **/
(function(jq){

  /**
   * TestClass constructor
   * @param     {String} container
   * @constructor
   **/
  TestClass = function(container){

    /**
     * Container div
     * @type    {HTMLElement}
     * @private
     **/
    this._jqContainer = $('#' + container);
  };

})(jQuery);
